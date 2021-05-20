import React from 'react';

import Link from '@docusaurus/Link';
import classnames from 'clsx';
import {MDXProvider} from '@mdx-js/react';

import MDXComponents from '@theme/MDXComponents';

import dateFormat from 'dateformat';

import './styles.css';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const {date: dateString, description, permalink, tags} = metadata;
  const {author, title} = frontMatter;
  const date = new Date(Date.parse(dateString));
  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL =
    frontMatter.author_image_url || frontMatter.authorImageURL;

    return (
      <Link to={permalink + '/'} className={classnames('blog-post-item', 'domain-bg', 'domain-bg--hover', 'domain-bg--vector')}>
        <article>
          <h2>{title}</h2>
          
          <div className="markdown">
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </div>
          
          <div className="avatar margin-bottom--md">
          {authorImageURL && (
            <a
              className="avatar__photo-link"
              href={authorURL}
              target="_blank"
              rel="noreferrer noopener">
              <img
                className="avatar__photo"
                src={authorImageURL}
                alt={author}
              />
            </a>
          )}
          <div className="avatar__intro">
            {author && (
              <>
                <h4 className="avatar__name">
                  <a href={authorURL} target="_blank" rel="noreferrer noopener">
                    {author}
                  </a>
                </h4>
                <small className="avatar__subtitle">{authorTitle}</small>
              </>
            )}
          </div>
        </div>


          <time dateTime={date.toISOString()}>{dateFormat(date, "mmm d, yyyy")} </time>
          
  
              {tags.length > 0 && (
                <div className="col">
                  <strong>Tags:</strong>
                  {tags.map(({label, permalink: tagPermalink}) => (
                    <Link
                      key={tagPermalink}
                      className="margin-horiz--sm"
                      to={tagPermalink}>
                      {label}
                    </Link>
                  ))}
                </div>
              )}

              
        </article>
      </Link>
    );

}

export default BlogPostItem;
