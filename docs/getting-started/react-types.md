---
id: react-types
title: React Types
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
