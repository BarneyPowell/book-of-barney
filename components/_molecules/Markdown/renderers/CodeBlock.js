import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function CodeBlock ({ language, value }) {

    const style = {
        fontSize: '0.75em',
        lineHeight: '1'
    }

  return <SyntaxHighlighter customStyle={style} className="text-xs" language={language}>{value}</SyntaxHighlighter>;
};

