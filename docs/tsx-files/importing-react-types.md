---
id: importing-react-types
title: Importing React Types
sidebar_label: Importing React Types
custom_edit_url: https://github.com/gojutin/www.tsx.guide/blob/master/docs/tsx-files/importing-react-types.mdx
description: A guide to importing React types with TypeScript
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

[@types/react]: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react
[@types/react-dom]: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom
