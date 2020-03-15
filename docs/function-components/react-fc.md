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

```tsx
import React from 'react';

const App: React.FC = () => {
  return ...
}
```

`FC` is shorthand for `FunctionComponent`, which is an interface that provides the basic values that a component needs:

```typescript
interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
```

You can also pass a type argument to `FC` with your own custom component prop types. `FC` will take care of merging them with the prop type definitions that it provides. In the above definition, `P` represents the type definition that you optionally supply.

```tsx
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

### SFC

You may also see `SFC` (Stateless Function Component), which is the same thing, but was deprecated after hooks arrived and function components were no longer stateless.
