import React from 'react';

import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';

import MDXComponents from '@theme/MDXComponents';
import {MDXProvider} from '@mdx-js/react';

import styles from './styles.module.css';

import classnames from 'classnames';
import dateFormat from 'dateformat';

function BlogPostPage(props) {
  const {content: BlogPostContents} = props;
  const {frontMatter, metadata} = BlogPostContents;
  const {author, id, title} = frontMatter;
  const {date: dateString, tags} = metadata;
  const date = new Date(Date.parse(dateString));

  
  return (
    <Layout title={metadata.title} description={metadata.description}>
     <article className={styles.blogPost}>
        <header className={classnames('hero', 'domain-bg', 'domain-bg--vector', styles.header)}>
          <div className={classnames('container', styles.headerContainer)}>
           
            <h1>{title}</h1>
            <div className={styles.description}>{metadata.description}</div>

          </div>
        </header>
        <div className="container container--xs margin-vert--xl">
          <section className="markdown align-text-edges dropcap">
            <MDXProvider components={MDXComponents}><BlogPostContents /></MDXProvider>
          </section>
    
          {(metadata.nextItem || metadata.prevItem) && (
            <div className="margin-vert--xl">
              <BlogPostPaginator
                nextItem={metadata.nextItem}
                prevItem={metadata.prevItem}
              />
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
}

export default BlogPostPage;
