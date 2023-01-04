import { Row, Col, Button } from "react-bootstrap";

import GridItem from "components/grid-item";
import { getPaginatedPost } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";
// import { usePosts } from "hooks/usePosts";
import useSWRInfinite from "swr/infinite";
import PreviewAlert from "components/preview-alert";

const PAGE_LIMIT = 2;
export default function Home({ posts, preview }) {
  const { data, size, setSize, isValidating } = useSWRInfinite(
    (index) => `/api/posts?page=${index}&limit=${6}`,
    { fallbackData: [posts] }
  );
  // const { data, isLoading, error } = usePosts(posts);
  // if (error) return <pre>Алдаа гарлаа : {JSON.stringify(error, null, 2)}</pre>;
  // if (isLoading) return <div>Уншиж байна...</div>;

  return (
    <Layout>
      <Row>
        {preview && <PreviewAlert />}
        <Col md="12">
          <Intro />
        </Col>
      </Row>
      <hr />
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Row className="mb-5">
        {data.map((page, index) =>
          page.map((post, key) => (
            <Col key={index + key} md={12 / PAGE_LIMIT}>
              <GridItem post={post} />
            </Col>
          ))
        )}
      </Row>
      <div style={{ textAlign: "center" }}>
        {data[data.length - 1].length !== 0 &&
          (isValidating ? (
            <div>Түр хүлээнэ үү...</div>
          ) : (
            <Button onClick={() => setSize(size + 1)}>Цааш үзэх</Button>
          ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const posts = await getPaginatedPost(0, PAGE_LIMIT);
  console.log("preview", preview);
  console.log("posts", posts);
  return {
    props: {
      posts,
      preview,
    },
  };
};
