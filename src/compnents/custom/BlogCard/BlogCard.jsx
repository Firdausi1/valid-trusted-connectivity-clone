import React from "react";
import styles from './BlogCard.module.scss'
import blogImage from "src/assets/images/blog.jpg"

const BlogCard = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.blogTop}>
        <div className={styles.blogTopLeft}>
          <p>Latest Blog posts</p>
          <div className={styles.blogTime}>
            <p>24 February 2024</p>
            <p>8 mins read</p>
            <p></p>
          </div>
          <h3>Valid's Take on Multiple Enabled Profile</h3>
        </div>
        <div className={styles.postCount}>
          1/3
        </div>
      </div>
      <div className={styles.blogBottom}>
        <img src={blogImage} alt="blog" />
      </div>
    </div>
  );
};

export default BlogCard;
