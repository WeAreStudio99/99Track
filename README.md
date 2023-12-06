# 99Track API

Welcome to the **99Track-api** development environment setup guide. This document provides comprehensive instructions to facilitate a smooth and consistent setup across various development environments.

## Prerequisites

### Node.js

To synchronize Node.js versions across different environments, we recommend
using [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm). Once installed, you can set the project's Node.js
version with the following command:

```bash
nvm install
```

### Yarn

Yarn is the package manager of choice for this project. After ensuring you are using Node.js 20 _(lts/iron)_,
activate `corepack` to use Yarn by running:

```bash
corepack enable
```

### Visual Studio Code

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

### Environment Configuration

Initiate by setting up environment variables. Duplicate `.env.local.example` as `.env.local`:

```bash
cp .env.local.sample .env.local
```

Amend `.env.local` with your specific configurations.

### Dependency Installation

Install necessary project dependencies :

```bash
yarn install
```

## Running the Application

Execute the app in various modes using :

```bash
# Development mode
$ yarn run start

# Watch mode
$ yarn run start:dev

# Production mode
$ yarn run start:prod
```

## Managing Database structure

This project is using [Prisma](https://www.prisma.io/) to manage the database structure. Synchronize your database with the state described in `schema.primsa` and generate the associated [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client) :

```bash
yarn run db:synch
```

This command must be run after initial setup and subsequent schema.prisma updates.

## Testing

Conduct tests using:

```bash
# Tests
$ yarn run test

# Watch mode for tests
$ yarn run test:watch

# Test coverage
$ yarn run test:cov
```

## Tooling

Visualize and modify database data with [Primsa Studio](https://www.prisma.io/studio) :

```bash
yarn run db:studio
```

Generate a new version of the [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client) :

```bash
yarn run db:generate-client
```

## Cleaning

Delete the `/dist` build output, the `/node_modules` folder and re-install the dependencies :

```bash
yarn run reset
```
