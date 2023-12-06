# 99Track API

This README outlines the necessary steps to get the **99Track-api** development environment up and running. Please follow the instructions carefully to ensure compatibility across different work environments.

## Node.js

To synchronize Node.js versions across different environments, we recommend
using [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm). Once installed, you can set the project's Node.js
version with the following command:

```bash
nvm install
```

## Yarn

Yarn is the package manager of choice for this project. After ensuring you are using Node.js 18 _(lts/hydrogen)_,
activate `corepack` to use Yarn by running:

```bash
corepack enable
```

## Visual Studio Code

Uniformity in the TypeScript version used across different development setups is crucial. For VSCode users, ensure that
you [use the workspace version of TypeScript](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript)
rather than the built-in version provided by VSCode.

### Optional: Optimized Editor Configuration

For an enhanced development experience with project-specific editor settings, copy the `.vscode.sample` folder to your
workspace configuration folder `.vscode`:

```bash
cp -R .vscode.sample .vscode
```

## Getting Started

Ensure that you follow the sections below in sequence to set up your development environment without issues.
Documentation is provided to guide you through the major setup steps.

### Setup Environment Variables

Begin by creating a `.env.local` file for your environment variables. Use the `.env.local.example` as a template:

```bash
cp .env.local.sample .env.local
```

Replace the placeholders in the newly created file with your actual values.

### Install Dependencies

To install the project dependencies, run:

```bash
yarn install
```

## Running the App

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Manage Database structure

This project is using [Prisma](https://www.prisma.io/) to manage the database structure. You can synchronize your database with the state described in the `schema.primsa` file and generate the associated [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client) by running :

```bash
yarn run db:synch
```

Keep in mind that yout must run this command if this is the first time you're launching the application and each time you update the `schema.prisma` file.

## Test

```bash
# tests
$ yarn run test

# tests in watch mode
$ yarn run test:watch

# test coverage
$ yarn run test:cov
```

## Tooling

You can lunch [Primsa Studio](https://www.prisma.io/studio), a tool that lets you visualize and modify your DB live data by running the following command :

```bash
yarn run db:studio
```

You can generate a new version of the [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client) by running the following command :

```bash
yarn run db:generate-client
```

## Cleaning

You can delete the `/dist` build output, the `node_modules` folder and re-install all the dependencies by running the following command :

```bash
yarn run reset
```
