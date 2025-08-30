<p align="center">
  <img height="150px" src="https://raw.githubusercontent.com/davejs-playground/.github/main/davejs-logo.svg"  />
</p>

# Sample React + TypeScript Project

This is a sample project for React + TypeScript. It has a lot of extra tooling that come out-of-the-box including:

- Testing with Vitest
- Build-time CSS-in-JS with Linaria
- Code linting with Prettier/ESLint/
- Commit linting with commitlint
- Githooks with Lefthook
- HTML valitation
- Spellcheck with Cspell
- Pre-configured CI for Github Actions
- React Component templates for auto-generating new components

## Commands

### Install

```
npm install
```

### Run dev environment

```
npm run dev
```

### Generate a new component

```
npm run new:component
```

## TODOs

There are a few things I'd like to add in terms of tooling:

- Storybook: for developing and testing different variants of components
- Playwright: for visual regression testing
- Stylelint: for ensuring CSS is clean (I'd especially like to lint for rational-ordering, which keeps properties with similar functionality grouped closely)
- bundlesize: I'd like to add bundlesize check for extreme bloat. Sometimes you can accidentally include deps that are way too heavy for what they do and it's better to just write something yourself.
