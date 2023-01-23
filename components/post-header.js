import { urlFor } from "lib/api";
import moment from "moment";
import "moment/locale/mn";

const PostHeader = ({ post }) => {
  moment.locale("mn");
  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        {post.publisher && post.publisher.picture && (
          <img
            src={urlFor(post.publisher.picture).height(50).url()}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
          />
        )}
        {post.publisher.publisherName},{moment(post.date).format("LLL")}
      </p>

      <h1 className="font-weight-bold blog-detail-header-title mb-0">
        {post.title}
      </h1>

      <h2 className="blog-detail-header-subtitle mb-3">{post.subtitle}</h2>

      <img
        className="img-fluid rounded"
        style={{ width: "100%", height: 400 }}
        src={urlFor(post.cover_image).height(400).url()}
        alt={post.cover_image.alt}
      />
      <div className="code-filename" style={{ textAlign: "center" }}>
        {post.cover_image.alt}
      </div>
    </div>
  );
};

export default PostHeader;
