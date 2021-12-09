import React from 'react';
import { Link } from 'gatsby';

import { blogNav, nextLink } from './BlogNav.module.css';

const BlogNav = ({ previous, next }) => {
  return (
    <nav className={blogNav}>
      {previous && (
        <Link to={previous.fields.slug} title={previous.frontmatter.title}>
          <header>Previous article</header>
          <p>{previous.frontmatter.title}</p>
        </Link>
      )}
      {next && (
        <Link
          className={nextLink}
          to={next.fields.slug}
          title={next.frontmatter.title}
        >
          <header>Next article</header>
          <p>{next.frontmatter.title}</p>
        </Link>
      )}
    </nav>
  );
};

export default BlogNav;
