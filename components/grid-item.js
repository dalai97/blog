import { Card } from "react-bootstrap";
import Link from "next/link";
export default function GridItem({ post }) {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={"https://source.unsplash.com/user/erondu/150x150"}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div style={{ marginLeft: "1rem" }}>
            <Card.Title className="font-weight-bold mb-1">
              Алтан Эрдэнэдалай
            </Card.Title>
            <Card.Text className="card-date">{post.date}</Card.Text>
          </div>
        </Card.Header>
        <Link href={`/${post.slug}`}>
          <a>
            <div className="view overlay">
              <Card.Img src={post.image} alt="Card image cap" />
            </div>
            <Card.Body>
              <Card.Title className="card-main-title">{post.title}</Card.Title>
              <Card.Text>{post.subTitle}</Card.Text>
            </Card.Body>
          </a>
        </Link>
      </div>
    </Card>
  );
}
