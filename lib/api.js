import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
export const getPaginatedPost = async (page, limit = 2) => {
  const posts = await client.fetch(
    `*[_type=="post"]{_createdAt,title,date,'image' :cover_image.asset->url,'slug':slug.current,'publisher':publisher->{publisherName,'picture' : picture.asset->url}}|order(date desc)[${
      page * limit
    }...${(page + 1) * limit}]`
  );
  return posts;
};

export const getAllPosts = async () => {
  const posts = await client.fetch(
    `*[_type=="post"]{_createdAt,title,date,'image' :cover_image.asset->url,'slug':slug.current,'publisher':publisher->{publisherName,'picture' : picture.asset->url}}|order(date desc)`
  );
  return posts;
};
export const getPostBySlug = async (slug) => {
  console.log("slug", slug);
  const post = await client.fetch(
    `*[_type=="post" && slug.current==$slug]{_createdAt,title,date,content[]{...,'asset':asset->},cover_image,'slug':slug.current,'publisher':publisher->{publisherName,'picture' : picture.asset->url}}`,
    { slug }
  );
  return post;
};
// export const getPostBySlug = async (slug) => {
//   const post = await client.fetch(
//     `*[_type=="post" && slug.current==$slug]{_createdAt, title, subtitle, date, 'image': cover_image.asset->url, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url }}`,
//     { slug }
//   );
//   return post;
// };
