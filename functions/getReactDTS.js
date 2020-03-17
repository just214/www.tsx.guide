require("typescript");
const { parse } = require("react-docgen-typescript").withDefaultConfig();
const path = require("path");

 const lll = path.join( __dirname, "Test.tsx");
 console.log("LLL", lll)

exports.handler = async (event, context) => {
  const type = event.queryStringParameters.type;
  const res = parse(lll);
  const result = res.find(({ displayName }) => displayName === type).props;

  return {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type,Accept"
    },

    statusCode: 200,
    body: JSON.stringify(Object.values(result).sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
  };
};
