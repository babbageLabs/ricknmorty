![example workflow](https://github.com/babbageLabs/ricknmorty/actions/workflows/ci.yml/badge.svg?branch=main&event=push)



# About

This is a monorepo containing a Next.js app and a React component library. It is powered by [Turborepo](https://turbo.build/repo).
It implements a web application to explore the Rick and Morty universe and consumes the [Rick and Morty API](https://rickandmortyapi.com/).

Using the application you can:

- Explore various locations in the Rick and Morty universe
- View the characters in the universe
- View the episodes in the universe
- Add notes about your favorite characters

[Live Demo](https://ricknmorty.vercel.app/)

## Using this app

Run the following command:

```sh
pnpm install
pnpm run dev --filter web
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What's inside?

This application has 2 workspaces i.e packages and apps:

- `web`: A [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library used by `web`
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- ` @repo/tailwind `: tailwind configuration

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Playwright](https://playwright.dev/) for end-to-end testing
- [Turbo](https://turbo.build/repo) for monorepo management

### Build

To build all apps and packages, run the following command:

```
cd ricknmorty
pnpm build
```

### Production

To  run all apps, run the following command:

```
cd ricknmorty
pnpm build
pnpm start
```

### Testing

To run tests for all apps and packages, run the following command:

```bash
cd ricknmorty
pnpm run test --filter web
```

## Implementation Details

The application consumes the [Rick and Morty REST API](https://rickandmortyapi.com/). The reason for opting for REST as opposed to GraphQL is that the REST API is simple and easy to use. The REST API is also well documented and has a lot of resources available for it.

In addition to the ease of use and predicatable error handling, use of caching for static data meaning the problem of over-fetching is mitigated.

 for note taking, the application uses the browser's local storage . This is because the notes are not sensitive and do not need to be persisted on the server. The notes are also not shared between users. Additionally, since the application is public and does not require authentication then local storage is the most reliable solution to  retrieve notes for any given anonymous users.
