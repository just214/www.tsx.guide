---
id: react-types
title: React Types
sidebar_label: React Types
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
image: https://res.cloudinary.com/gojutin/image/upload/v1584230645/www.tsx.guide/tsx-guide-logo.png
---

All of the types needed for React and React DOM are found in the
[@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react)
and [@types/react-dom](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom) npm modules respectively.
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

You may have seen types like `JSX.Element` and `React.Element` used interchangeably in React apps.
