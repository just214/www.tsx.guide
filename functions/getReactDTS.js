const { parse } = require("react-docgen-typescript").withDefaultConfig();
const path = require("path");
const types = require("./react-types.json")

function sortByName(a, b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return 1;
  }
  return -1;
}

exports.handler = async (event, context) => {
  const queryParam = event.queryStringParameters.type;
  const matchingType = types.find(t => t.name === queryParam);
  const sortedMatchingType = {...matchingType, members: matchingType.members.sort(sortByName)}

  const extendedMatchingTypes = types.filter(type => {
    if (matchingType.extends.includes(type.name)) {
      return true
    }
    return false
  })

  const extendedMembers = extendedMatchingTypes.reduce((acc, value) => {
    return {
      ...acc,
      [value.name]: value.members.sort(sortByName)
    }
  }, {})


  const final = {
    ...sortedMatchingType,
    extendedMembers
  }
  

  return {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type,Accept"
    },

    statusCode: 200,
    body: JSON.stringify(final)
  };
};
