import { Row, Col } from "react-bootstrap";
import Layout from "components/layout";
import { getAllPosts, getPostBySlug, urlFor } from "lib/api";
import BlockContent from "@sanity/block-content-to-react";
import Highlight from "components/highlight-code";
import PostHeader from "components/post-header";
export default function Posts({ post }) {
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

  return (
    <Layout>
      <Row>
        <Col md="12">
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

export const getStaticProps = async ({ params }) => {
  console.log("params2", params);
  const post = await getPostBySlug(params.slug);
  console.log("post1", post);
  return {
    props: {
      post: post[0],
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  const data = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  console.log("data2", data);
  return {
    paths: data,
    fallback: false,
  };
};
