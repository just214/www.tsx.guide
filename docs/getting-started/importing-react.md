---
id: importing-react
title: Importing React
sidebar_label: Importing React
custom_edit_url: https://github.com/gojutin/www.tsx.guide/blob/master/docs/getting-started/importing-react.mdx
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

There are two ways to import React into a `.tsx` file:

**Option 1:**

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
```

**Option 2:\***

\* Requires the `allowSyntheticDefaultImports` or `esModuleInterop` compiler option set to `true`.

```tsx
import React from "react";
import ReactDOM from "react-dom";
```

#### Why `allowSyntheticDefaultImports`?

The React library is kind of interesting in the fact that it does not export a default value, however, it requires that you import `React` as if it were a default value. `allowSyntheticDefaultImports` was added in TypeScript V2.7 to allow the import of these "synthetic" defaults.

#### `allowSyntheticDefaultImports` **vs.** `esModuleInterop`

`esModuleInterop` is a compiler options that includes `allowSyntheticDefaultImports` along with some other helpers. This option is meant more for Node, Browserfy, AMD,etc. Therefore, it is generally recommended to stick with `allowSyntheticDefaultImports` when building apps. See [this tweet](https://twitter.com/drosenwasser/status/1003097042653073408) for more.

In the terminal:

```sh
$ tsc --allowSyntheticDefaultImports --esModuleInterop
```

In `tsconfig.json`:

```json
{
  "compilerOptions": {
    // ...
    "jsx": "react",
    "allowSyntheticDefaultImports": true,
    // or
    "esModuleInterop": true
  }
}
```
