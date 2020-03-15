---
id: without-react-fc
title: Without React FC
sidebar_label: Without React FC
custom_edit_url: https://github.com/gojutin/www.tsx.guide/blob/master/docs/function-components/without-react-fc.mdx
description: A guide to using the React FC type with TypeScript
keywords:
  - typescript
  - react
  - tsx
  - guide
  - cheatsheet
  - docs
  - reacttypescript
  - fc
  - function
  - component
image: https://res.cloudinary.com/gojutin/image/upload/v1584239143/www.tsx.guide/tsx-guide-logo.png
---

You can annotate your function components without using `React.FC` by providing the type to the function arguments just like any other function.

```tsx {8,13}
import React from 'react';

type AppProps = {
  loading: boolean;
  greeting: string;
}

const App = (props: AppProps ) => {
  return ...
}

// Or destructured
const App = ({loading, greeting}: AppProps ) => {
  return ...
}
```

`React.FC` normally handles providing the types for these props and properties.

- props with `children` and `context`
- `propTypes` property
- `contextTypes` property
- `defaultProps` property
- `displayName` property

You will be responsible for providing types for any of these props you plan to use. Here are the definition for `FC`:

```typescript
interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
```

### Typing Children

When you use `React.FC`, the type of `children` is `React.ReactNode`.

`React.ReactNode` is a general type that allows `children` to be one of several different types:

```ts
type ReactText = string | number;
type ReactChild = ReactElement | ReactText;
interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;

type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;
```

By defining `children` on your own, you have more control over what types can be provided. Here is an example where `children` can only be a string or `null`.

```tsx {4,7}
import React from "react";

type AppProps = {
  children: React.ReactText | null;
};

const App = ({ children }: AppProps) => {
  return <div>{children}</div>;
};
```

```tsx
// Okay
<App>A string</App>

// Okay
<App>{null}</App>

// Error
<App> <div /> </App>
```
