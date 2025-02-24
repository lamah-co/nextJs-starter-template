#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import ora from "ora";
import fs from "fs-extra";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";
import { fileURLToPath } from "url";
import { ASCII_ART, IGNORED_FOLDERS, DEPENDENCIES } from "./constants.js";
import chalk from "chalk";

// Get __dirname equivalent in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const execPromise = promisify(exec);
const program = new Command();

async function main() {
  console.clear();
  console.log(chalk.cyan(ASCII_ART));
  console.log("🚀 Welcome to the Lamah's NextJs Starter 🚀");
  console.log(
    "Quickly set up your Next.js project with our starter template.\n"
  );

  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter the project name:",
      validate: (input) => (input ? true : "Project name cannot be empty"),
    },
  ]);

  const templateDir = path.resolve(__dirname, ".."); // Parent directory (template root)
  const targetDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    const { confirmOverwrite } = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirmOverwrite",
        message: `The folder '${projectName}' already exists. Do you want to overwrite it?`,
        default: false,
      },
    ]);

    if (!confirmOverwrite) {
      console.log("❌ Setup canceled.");
      process.exit(1);
    }

    const deleteSpinner = ora("Deleting existing folder...").start();
    await fs.remove(targetDir);
    deleteSpinner.succeed("✅ Existing folder deleted.");
  }

  const copySpinner = ora(`Initializing project '${projectName}'...`).start();

  try {
    // Copy all files except ignored ones
    await fs.copy(templateDir, targetDir, {
      filter: (src) => {
        const relativePath = path.relative(templateDir, src);
        return !IGNORED_FOLDERS.some((folder) =>
          relativePath.startsWith(folder)
        );
      },
    });

    const gitignoreTemplatePath = path.join(
      templateDir,
      "cli",
      ".gitignore.template"
    );
    const newGitignorePath = path.join(targetDir, ".gitignore");

    // Rename `.gitignore.template` to `.gitignore` in the new project
    if (fs.existsSync(gitignoreTemplatePath)) {
      await fs.copyFile(gitignoreTemplatePath, newGitignorePath);
    }

    copySpinner.succeed(`Project Created Successfully in ${targetDir}!`);

    // Initialize a new Git repository
    const gitInitSpinner = ora("Initializing Git repository...").start();
    process.chdir(targetDir);
    await execPromise("git init");
    gitInitSpinner.succeed("Git repository initialized!");

    // Git remote setup instructions
    console.log(
      "\n💡 To push your changes to a remote repository, follow these steps:"
    );
    console.log(
      chalk.cyan("1. Add a remote URL: `git remote add origin <your-repo-url>`")
    );
    console.log(
      chalk.cyan(
        "2. commit your files: `git add . && git commit -m 'Initial commit'`"
      )
    );
    console.log(chalk.cyan("3. Push your changes: `git push -u origin main`"));

    // Install dependencies
    console.log("\n📦 Installing dependencies:\n");
    DEPENDENCIES.forEach((dep) => console.log(chalk.cyan(`  - ${dep}`)));
    const installSpinner = ora("").start();
    await execPromise("npm install");
    installSpinner.succeed("Dependencies installed!");

    ora(`🎉 Project setup complete!`).succeed();
    console.log(chalk.cyan("\n👉 Next steps:"));
    console.log(`   cd ${projectName} && npm run dev\n`);
  } catch (error) {
    ora().fail("Error setting up project: " + error.message);
  }
}

program.action(main);
program.parse(process.argv);
