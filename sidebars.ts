/*
All new files created in the root-level docs directory need to be added to the sidebar menu here. 
*/

/*
A simple helper function to help organize groups into individual declarations
that are merged into the default export.
*/
function createGroup(groupName, links) {
  return {
    [groupName]: links
  };
}

/*
GROUPS- Represent collapsable menu item groups in the sidebar.
*/

const introduction = createGroup("Introduction", [
  "introduction/welcome",
  "introduction/why-typeScript",
  "introduction/prerequisites",
  "introduction/about-site",
  "introduction/contributing",
  "introduction/code-of-conduct"
]);

const gettingStarted = createGroup("Getting Started", [
  "getting-started/importing-react",
  "getting-started/react-types",
  "getting-started/tsx-files"
]);

const hooks = createGroup("Hooks", [
  "hooks/useCallback",
  "hooks/useContext",
  "hooks/useDebugValue",
  "hooks/useEffect",
  "hooks/useImperativeHandle",
  "hooks/useLayoutEffect",
  "hooks/useMemo",
  "hooks/useReducer",
  "hooks/useRef",
  "hooks/useState",
  "hooks/customHooks"
]);

const functionComponents = createGroup("Function Components", [
  "function-components/react-fc"
]);
const classComponents = createGroup("Class Components", ["mdx"]);
const reactDOM = createGroup("React DOM", ["mdx"]);
const examples = createGroup("Examples", ["mdx"]);
const resources = createGroup("Resources", ["mdx"]);
const context = createGroup("Context", ["mdx"]);

/*
EXPORT
*/

module.exports = {
  sidebar: {
    ...introduction,
    ...gettingStarted,
    ...hooks,
    ...functionComponents,
    ...classComponents,
    ...context,
    ...reactDOM,
    ...examples,
    ...resources
  }
};
