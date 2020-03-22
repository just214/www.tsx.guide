// This import causes a TypeScript error that the module is not found.
// Exporting from hooks so @ts-ignore only has to be applied once.

// @ts-ignore
import UseBaseUrl from "@docusaurus/useBaseUrl";

export const useBaseUrl = UseBaseUrl as (path: string) => string;
