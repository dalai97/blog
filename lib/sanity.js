const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "dox9ji82",
  dataset: "production",
  useCdn: process.NODE_ENV === "production",
});

export const previewClient = sanityClient({
  projectId: "dox9ji82",
  dataset: "production",
  useCdn: false,
  token:
    "skFwyQ0zS7QFDf102Iug85qblhdl1dpHIxQyrbk60mRBYPwQdwDseM9W8TBDsqEpwVS7HU9BvFAhMSFxUM7149kfhnLuAC4oywOhmTUGH65JoMfNeGlUaf79dKxFazYz7GokHUz7MfY3p41TqAofof3tjhXUdx87BDVpRoAZgqB7SstaXZYx",
});

export default client;
