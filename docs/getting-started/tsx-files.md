---
id: tsx-files
title: TSX Files
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

`.tsx` files are not interchangeable with `.ts` files like `.js`/`.jsx` files.

You can learn more about JSX and TypeScript at in the [TypeScript Docs](https://www.typescriptlang.org/docs/handbook/jsx.html).
