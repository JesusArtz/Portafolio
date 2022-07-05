import { React, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneLight} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import md from '../../resource/prueba.md';

export default function BlogPage() {

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(md)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    console.log(markdown)

    return (
        <ReactMarkdown
            children={markdown}
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