const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "dox9ji82",
  dataset: "production",
  useCdn: process.NODE_ENV === "production",
});
export default client;
