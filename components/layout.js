import { useTheme } from "hooks/use-theme";
import { Container } from "react-bootstrap";
import MyNavbar from "./my-navbar";

export default function Layout({ children }) {
  const { theme } = useTheme();
  return (
    <div className={theme.type}>
      <Container>
        <MyNavbar />
        <div className="blog-detail-page">
          <div className={`page-wrapper`}>{children}</div>
          {/* <footer className="page-footer">
            <div>
              <a href="#">нүүр</a>
              {" | "}
              <a href="#">сургалт</a>
            </div>
          </footer> */}
        </div>
      </Container>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </div>
  );
}
