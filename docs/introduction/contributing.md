---
id: contributing
title: Contributing
sidebar_label: Contributing
custom_edit_url: https://github.com/gojutin/www.tsx.guide/blob/master/docs/introduction/contributing.md
description: Contributing to the tsx.guide documentation website.
keywords:
  - typescript
  - react
  - tsx
  - guide
  - cheatsheet
  - docs
  - reacttypescript
  - contributing
image: https://res.cloudinary.com/gojutin/image/upload/v1584230645/www.tsx.guide/tsx-guide-logo.png
---

Do you have an idea on how to improve this site or see something that doesn't quite look right? Any contributions to help make this site better are greatly appreciated!

There are two ways that you can help:

1. #### Share your ideas/feedback, or report mistakes/bugs in a GitHub Issue.
2. #### Change the code yourself.

> Please review the [Code of Conduct](code-of-conduct) before you make any contributions.

## File an Issue

If you don't feel like going in and making any changes to the code yourself, you can [submit an issue on GitHub](https://github.com/gojutin/www.tsx.guide/issues).

> Please look through the existing issues to make sure that whatever you are reporting is not already reported.

When you click the `New Issue` button, you can choose to file an issue for one of these options:

- **Incorrect/Missing Documentation**
- **Suggestion for Documentation/Site**
- **Bug report**

## Change the Code

The source code is made up of two parts-

1. **The website**

This site is built with [Docusaurus 2](https://v2.docusaurus.io/) and has few customizations beyond the defaults.

2. **The Documentation**

The documentation is a collection of markdown and MDX files in a root-level `docs` folder. All files created in the `docs` folder are manually mapped to the sidebar in a root-level `sidebars.ts` file.

### Editing an Existing Page

The easiest way to propose a change to a page is by pressing the `Edit this page` button at the bottom of each page on the website. This will take you to the file in GitHub, where you can make an edit to the page without having to download the code (login required).

The second option is to fork the repo, and submit the changes through a Pull Request.

### Adding New Documentation Pages

- Make sure you are using `.md` or `.mdx` files in the root-level `docs` folder.
- Make sure you are using the correct front matter formatting. See example below.
- Add the new page to the sidebar in the root-level `sidebars.ts` file.

**Front matter example**

```yaml
---
id: contributing
title: Contributing
sidebar_label: Contributing
custom_edit_url: https://github.com/gojutin/www.tsx.guide/blob/master/docs/introduction/contributing.md
description: Contributing to the tsx.guide documentation website.
keywords:
  - typescript
  - react
  - tsx
  - guide
  - cheatsheet
  - docs
  - reacttypescript
  - contributing
image: https://res.cloudinary.com/gojutin/image/upload/v1584230645/www.tsx.guide/tsx-guide-logo.png
---

```

And, here are all of the available front matter options:

Copied from [https://v2.docusaurus.io/docs/markdown-features](https://v2.docusaurus.io/docs/markdown-features)

- `id`: A unique document id. If this field is not present, the document's `id` will default to its file name (without the extension).
- `title`: The title of your document. If this field is not present, the document's `title` will default to its `id`.
- `hide_title`: Whether to hide the title at the top of the doc. By default it is `false`.
- `hide_table_of_contents`: Whether to hide the table of contents to the right. By default it is `false`.
- `sidebar_label`: The text shown in the document sidebar and in the next/previous button for this document. If this field is not present, the document's `sidebar_label` will default to its `title`.
- `custom_edit_url`: The URL for editing this document. If this field is not present, the document's edit URL will fall back to `editUrl` from options fields passed to `docusaurus-plugin-content-docs`.
- `keywords`: Keywords meta tag for the document page, for search engines.
- `description`: The description of your document, which will become the `<meta name="description" content="..."/>` and `<meta property="og:description" content="..."/>` in `<head>`, used by search engines. If this field is not present, it will default to the first line of the contents.
- `image`: Cover or thumbnail image that will be used when displaying the link to your post.
