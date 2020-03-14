---
id: contributing
title: Contributing
---

Do you have an idea on how to improve this site or see something that doesn't quite look right? Any contributions to help make this site better are greatly appreciated!

There are two ways that you can help:

1. #### Share your ideas, feedback, mistakes, or bugs in a GitHub Issue.
2. #### Change the code yourself.

## File an Issue

If you don't feel like going in and making any changes to the code yourself, you can [submit an issue on GitHub](https://github.com/gojutin/www.tsx.guide/issues).

> Please look through the existing issues to make sure that whatever you are reporting is not already reported.

When you click the `New Issue` button, you can choose to file an issue for one of these options:

- **Incorrect/Missing Documentation**
- **Suggestion for Documentation/Site**
- **Bug report**

## Change the Code

The source code can be thought of in two parts-

1. **The website**

This site is built with [Docusaurus V2](https://v2.docusaurus.io/) with little customization beyond the defaults.

2. **The Documentation**

The documentation is a collection of markdown and MDX files in a root-level `docs` folder. All files created in the `docs` folder are manually mapped to the sidebar in a root-level `sidebars.ts` file.

Checklist for adding a new documentation page:

- Make sure you are using `.md` or `.mdx` files in the root-level `docs` folder.
- Make sure you are using the correct front matter formatting. See example below.
- Add the new page to the sidebar in the root-level `sidebars.ts` file.

**Front matter example**

```yaml
---
id: doc-markdown
title: Markdown Features
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown :)
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
---

```
