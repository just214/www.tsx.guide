---
id: react-fc
title: React FC
sidebar_label: React FC
custom_edit_url: https://github.com/gojutin/www.tsx.guide/blob/master/docs/function-components/react-fc.mdx
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

The most common way to specify types for a function component is with a generic type provided by React:

**`FC`**

```tsx {3}
import React from 'react';

const App: React.FC = () => {
  return ...
}
```

`FC` is shorthand for `FunctionComponent`, which is an interface that provides properties and the basic prop types for a React component:

```typescript
interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
```

You can optionally pass a type argument to `FC` with your own custom component prop types. `FC` will take care of merging them with the prop type definitions that it provides. In the above definition, `P` represents the type definition that you optionally supply.

```tsx {7}
import React from "react";

type TitleProps = {
  color?: string;
};

const Title: React.FC<TitleProps> = props => {
  const { color, children } = props; // color is provided by TitleProps, children is provided by FC
  return <h1 style={{ color }}>{children}</h1>;
};

// or as a function declaration

function Title(props) {
  const { color, children } = props;
  return <h1 style={{ color }}>{children}</h1>;
}
```

### SFC- Deprecated

You may also see `SFC` (Stateless Function Component), which is the same thing, but was deprecated after hooks arrived and function components were no longer stateless.

### The Case Against `React.FC`

There are some limitations that come with `React.FC` and many people recommend that it not be used. Some of these limitations include:

- Provides an implicit definition of `children`
- Doesn't support generics.
- Makes "component as namespace pattern" more awkward.
- Doesn't work correctly with defaultProps

See this [Create React App Pull Request](https://github.com/facebook/create-react-app/pull/8177) for more information.
