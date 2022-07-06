import { React, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneLight} from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function BlogPage({id}) {

    const [md, setMd] = useState()

    useEffect(() => {

        fetch(process.env.PUBLIC_URL + `${id}.md`)
        .then(res => res.text())
        .then(res => setMd(res))



    }, [id]);

    return (
        <ReactMarkdown
            children={md}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            style={atomOneLight}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}

        />
    );

};