---
id: about-tsx-files
title: About TSX Files
sidebar_label: About TSX Files
custom_edit_url: https://github.com/gojutin/www.tsx.guide/blob/master/docs/tsx-files/about-tsx-files.mdx
description: A guide to understanding TSX files with React and TypeScript
keywords:
  - typescript
  - react
  - tsx
  - guide
  - cheatsheet
  - docs
  - reacttypescript
  - tsx
image: https://res.cloudinary.com/gojutin/image/upload/v1584239143/www.tsx.guide/tsx-guide-logo.png
---

If you are using React with TypeScript, you are doing so in a `.tsx` file.
These files are the TypeScript version of `.jsx` files.
They behave the same as `.jsx` files, except you can use TypeScript.

Example:
`App.tsx`

In order to use `.tsx` files, the `jsx` option in your `tsconfig.json` file must be set to either `preserve`, `react`, or `react-native`.

```json
// tsconfig.json
{
  ...
  "compilerOptions": {
    ...
    "jsx": "react"
  }
}
```

:::caution
You can use `.js` and `.jsx` files interchangeably. This is **not** the case with `.ts` and `.tsx` files.
You can only use JSX in a `.tsx` file.
:::
