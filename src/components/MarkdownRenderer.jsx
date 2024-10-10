import { marked } from "marked";

const MarkdownRenderer = ({ markdown }) => {
  const htmlContent = marked(markdown);
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>;
};

export default MarkdownRenderer;
