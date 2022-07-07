import { Container } from "react-bootstrap";
import MyNavbar from "./my-navbar";

export default function Layout({ children }) {
  return (
    <Container>
      <MyNavbar />
      <div className="blog-detail-page">
        <div className={`page-wrapper`}>{children}</div>
        <footer className="page-footer">
          <div>
            <a href="#">нүүр</a>
            {" | "}
            <a href="#">сургалт</a>
          </div>
        </footer>
      </div>
    </Container>
  );
}
