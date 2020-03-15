---
id: react-types
title: React Types
sidebar_label: React/JSX Types
custom_edit_url: https://github.com/gojutin/www.tsx.guide/blob/master/docs/getting-started/react-types.mdx
description: A guide to importing React with TypeScript
keywords:
  - typescript
  - react
  - tsx
  - guide
  - cheatsheet
  - docs
  - reacttypescript
  - import
image: https://res.cloudinary.com/gojutin/image/upload/v1584239143/www.tsx.guide/tsx-guide-logo.png
---

All of the types needed for React and React DOM are found in the
[@types/react]
and [@types/react-dom] npm modules respectively.
Both of these libraries should be included as dev dependencies for all of your React/TypeScript projects.

```sh
yarn add --dev @types/react @types/react-dom
```

Once you import the type definitions, React will expose all of the available types as named exports.

```ts
import React, { FC, HTMLAttributes } from "react";
// You could also use it without destructuring - React.FC
```

### React vs JSX Types

You may have seen types like `JSX.Element` and `React.ReactElement` used interchangeably in React apps.

The Facebook team made JSX at the time they made React. JSX is a JavaScript language extension that adds support for writing markup (HTML) in JavaScript. Although React makes heavy use of JSX, the two are independent. In fact, there are other frameworks that use JSX as well like [Stencil], [Solid], and [Vue].

TypeScript made the decision to provide first-class support for JSX and created a rich set of types to describe JSX. These live in a global `JSX` namespace. (Think every DOM element and attribute)

That is where the JSX types comes from.

React ships their own types in the [@types/react] package. These types wrap the JSX types with some React-specific types.

For instance, if you are using `JSX.Element` in a React project, then you are really using `React.ReactElement`.

From the React Types:

```ts
declare global {
    namespace JSX {
        interface Element extends React.ReactElement<any, any> { }
        interface ElementClass extends React.Component<any> {
            render(): React.ReactNode;
        }
        // ...
```

[@types/react]: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react
[@types/react-dom]: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom
[stencil]: https://stenciljs.com/
[solid]: https://github.com/ryansolid/solid
[vue]: https://vuejs.org/v2/guide/render-function.html
