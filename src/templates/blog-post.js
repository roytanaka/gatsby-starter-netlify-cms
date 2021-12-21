import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import BlogNav from '../components/BlogNav';
import tw, { styled } from 'twin.macro';

const TagList = styled.ul`
  ${tw`list-none flex space-x-3`}
  > li.tag {
    ${tw`before:hidden p-0`}
    a {
      ${tw`py-1 px-3 bg-purple-300 rounded-full text-sm no-underline hover:bg-purple-200 active:bg-purple-300`}
    }
  }
`;

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  next,
  previous,
}) => {
  console.log('🚀 ~ file: blog-post.js ~ line 20 ~ helmet', helmet);
  console.log('🚀 ~ file: blog-post.js ~ line 20 ~ previous', previous);
  console.log('🚀 ~ file: blog-post.js ~ line 20 ~ next', next);
  const PostContent = contentComponent || Content;

  return (
    <section className="container">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            <BlogNav previous={previous} next={next} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <TagList>
                  {tags.map((tag) => (
                    <li className="tag" key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </TagList>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  next: PropTypes.object,
  previous: PropTypes.object,
};

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        next={pageContext.next}
        previous={pageContext.previous}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
