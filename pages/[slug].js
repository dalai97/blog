import { Row, Col } from "react-bootstrap";
import Layout from "components/layout";
import { getAllPosts, getPostBySlug, urlFor } from "lib/api";
import BlockContent from "@sanity/block-content-to-react";
import Highlight from "components/highligh-code";
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
          <div className="blog-detail-header">
            <p className="lead mb-0">
              <img
                src={urlFor(post.publisher.picture).height(50).url()}
                className="rounded-circle mr-3"
                height="50px"
                width="50px"
              />
              {post.publisher.title}, {post.date}
            </p>

            <h1 className="font-weight-bold blog-detail-header-title mb-0">
              {post.title}
            </h1>

            <h2 className="blog-detail-header-subtitle mb-3">
              {post.subtitle}
            </h2>

            <img
              className="img-fluid rounded"
              src={urlFor(post.cover_image).height(600).url()}
              alt={post.cover_image.alt}
            />
            <div className="code-filename" style={{ textAlign: "center" }}>
              {post.cover_image.alt}
            </div>
          </div>
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
