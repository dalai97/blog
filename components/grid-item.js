import { Card } from "react-bootstrap";
import Link from "next/link";
import moment from "moment";

import "moment/locale/mn";
import { urlFor } from "lib/api";
import { useEffect } from "react";
export default function GridItem({ post }) {
  useEffect(() => {
    moment.locale("mn");
  }, []);
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={urlFor(post.publisher.picture).height(50).url()}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div style={{ marginLeft: "1rem" }}>
            <Card.Title className="font-weight-bold mb-1">
              {post.publisher.publisherName}
            </Card.Title>
            <Card.Text className="card-date">
              {moment(post.date).format("LLL")}
            </Card.Text>
          </div>
        </Card.Header>
        <Link href={`/${post.slug}`}>
          <a>
            <div className="view overlay">
              <Card.Img
                src={urlFor(post.image).height(300).url()}
                height={300}
                alt="Card image cap"
              />
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
