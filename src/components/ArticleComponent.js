/**
 * File: ArticleComponent.js
 * Description:
 *   This component represents an article with a title and content.
 * Props:
 *   - title: The title of the article (string)
 *   - content: The content of the article (string)
 * Example Usage:
 *   <ArticleComponent title="Introduction" content="Lorem ipsum dolor sit amet." />
 */
import React from 'react';

const ArticleComponent = ({ title, content }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default ArticleComponent;
