import ReactMarkdown from "react-markdown/with-html";

import Image from './renderers/Image';
import CodeBlock from './renderers/CodeBlock';

export default function Markdown({children}) {
    return (
        <ReactMarkdown
            escapeHtml={false}
            source={children}
            renderers={{ image: Image, code: CodeBlock }}
      />
    );
};