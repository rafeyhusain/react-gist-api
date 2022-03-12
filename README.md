# Introduction

## Tech Stack

Following technologies are used to make solution testable, documented, secure and scalable.

### TypeScript
Type safe language with full OOPS features, Generics and IDE intellisence
### React
Core component creation technology
### Jest & React Testing Library
Unit testing, Snapshot testing and Crash testing

### Vite 
A super fast backbone to load module on the fly
### Tailwind 
Responsive layout and component CSS

### prettier, eslint and stylelint
To lint TypeScript code
### StoryBook
Component documentation and testing

## Setup

Install using:

```shell
npm i
```

This will install the dependencies required to run the app.

```shell
npm run dev
```

These scripts run your client and storybook in development mode.

The default PORTS are:

- `3000` for the client
- `6006` for the storybook

If you don't like to call all scripts at once, you can also run:

```shell
npm run client:dev
npm run storybook
```

To lint
```shell
npm run lint
```

## Building

To build the project, run:

```shell
npm run build
```

This will build the client, server and storybook.

```shell
npm start
```

In production, you have a single server serving everything.

`/storybook` is the Storybook.  
`/*` is the client.

## Tests

To run Jest tests:

```shell
npm test
```

Or in watch mode:

```shell
npm testw
```

## TODO List
- Integrate npm module https://github.com/exuanbo/file-icons-js for more file icons other than JavaScript, CSS, HTML
- Snapshot tests are added for Header and Search components. Snapshot test could be added for components as well
- Added Storybook for Header and Search components. Storybook could be added to other components.