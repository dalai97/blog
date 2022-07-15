import { useRouter } from "next/router";
import { Row, Col } from "react-bootstrap";
import Layout from "components/layout";
import {
  getPaginatedPost,
  getPostBySlug,
  urlFor,
  listenPostUpdate,
} from "lib/api";
import BlockContent from "@sanity/block-content-to-react";
import Highlight from "components/highlight-code";
import PostHeader from "components/post-header";
import PreviewAlert from "components/preview-alert";
import { useEffect, useState } from "react";
export default function Posts({ post: initialPost, preview }) {
  const [post, setPost] = useState(initialPost);
  const router = useRouter();
  useEffect(() => {
    const sub = listenPostUpdate(post.slug, (update) => {
      setPost(update.result);
    });
    return sub && sub.unsubscribe?.();
  }, []);

  if (router.isFallback) {
    return (
      <Layout>
        {" "}
        <div>Уншиж байна</div>
      </Layout>
    );
  }
  if (!router.isFallback && !post?.slug) {
    return (
      <Layout>
        {" "}
        <div>Уучлаарай ийм пост байхгүй байна</div>
      </Layout>
    );
  }
  return (
    <Layout>
      <Row>
        <Col md="12">
          {preview && <PreviewAlert></PreviewAlert>}
          {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
          <PostHeader post={post}></PostHeader>
          <br />
          <BlockContent
            blocks={post.content}
            serializers={serializers}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
          />
        </Col>
      </Row>
    </Layout>
  );
}
const serializers = {
  types: {
    code: (props) => (
      <Highlight language={props.node.language}>
        {props.node.code}
        <div className="code-filename">{props.node.filename}</div>
      </Highlight>
    ),
    image: (props) => (
      <div>
        <img
          className={`blog-image blog-image-${props.node.position}`}
          src={urlFor(props.node).height(400).url()}
        />
        <div className="code-filename">{props.node.alt}</div>
      </div>
    ),
  },
};
export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  console.log(preview, previewData);
  console.log("params2", params);
  const post = await getPostBySlug(params.slug, preview);
  console.log("post1", post);
  return {
    props: {
      post: post.length > 1 ? post[1] : post.length > 0 ? post[0] : {},
      preview,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPaginatedPost(0, 2);

  const data = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  console.log("data2", data);
  return {
    paths: data,
    fallback: true,
  };
};
