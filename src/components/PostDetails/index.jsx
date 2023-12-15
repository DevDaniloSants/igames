import styles from './styles.module.css';

import { Link } from 'react-router-dom';

const PostDetails = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={post.image} alt={post.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <p>{post.body}</p>
        </div>
        <div className={styles.end}>
          <span className={styles.author}>
            Por <span>{post.createdBy}</span>
          </span>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
