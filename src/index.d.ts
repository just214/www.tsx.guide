declare module "@docusaurus"

declare module "@docusaurus/useBaseUrl" {
  export default (arg: string): string
}

declare module "@docusaurus/router" {
  interface RouterProps {
    Redirect: any;
  }
  export const Redirect;
}
