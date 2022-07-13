import { Row, Col } from "react-bootstrap";
import useSWR from "swr";

import GridItem from "components/grid-item";
import { getPaginatedPost } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";
// import { usePosts } from "hooks/usePosts";
import useSWRInfinite from "swr/infinite";

const PAGE_LIMIT = 3;
export default function Home({ posts }) {
  const { data, size, setSize } = useSWRInfinite(
    (index) => `/api/posts?page=${index}&limit=${PAGE_LIMIT}`
  );
  // const { data, isLoading, error } = usePosts(posts);
  // if (error) return <pre>Алдаа гарлаа : {JSON.stringify(error, null, 2)}</pre>;
  // if (isLoading) return <div>Уншиж байна...</div>;

  return (
    <Layout>
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>
      <hr />
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Row className="mb-5">
        {data &&
          data.map((page, index) =>
            page.map((post) => (
              <Col key={index} md={12 / PAGE_LIMIT}>
                <GridItem post={post} />
              </Col>
            ))
          )}
      </Row>
      <div style={{ textAlign: "center" }}>
        {data && data[data.length - 1].length !== 0 && (
          <button onClick={() => setSize(size + 1)}>Цааш үзэх</button>
        )}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getPaginatedPost(1, PAGE_LIMIT);
  return {
    props: {
      posts,
    },
  };
};
