import client from "./sanity";

export const getAllPosts = async () => {
  const posts = await client.fetch(
    `*[_type=="post"]{_createdAt,title,date,'image' :cover_image.asset->url,'slug':slug.current}`
  );
  return posts;
};
