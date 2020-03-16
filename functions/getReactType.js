const { parse } = require("react-docgen-typescript").withDefaultConfig();

const res = parse("../src/components/AboutSite.tsx");
const fs = require("fs");

// res[0].props || {}

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: "Hi ⊂◉‿◉つ"
    })
  };
};
