import ReactMarkdown from 'react-markdown';
import styles from './MarkdownContent.module.css';

interface MarkdownContentProps {
    content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
    return (
        <div className={styles.markdown}>
            <ReactMarkdown
                components={{
                    h1: ({ node, ...props }) => <h1 className={styles.h1} {...props} />,
                    h2: ({ node, ...props }) => <h2 className={styles.h2} {...props} />,
                    h3: ({ node, ...props }) => <h3 className={styles.h3} {...props} />,
                    h4: ({ node, ...props }) => <h4 className={styles.h4} {...props} />,
                    p: ({ node, ...props }) => <p className={styles.p} {...props} />,
                    a: ({ node, ...props }) => <a className={styles.link} {...props} />,
                    ul: ({ node, ...props }) => <ul className={styles.ul} {...props} />,
                    ol: ({ node, ...props }) => <ol className={styles.ol} {...props} />,
                    li: ({ node, ...props }) => <li className={styles.li} {...props} />,
                    blockquote: ({ node, ...props }) => <blockquote className={styles.blockquote} {...props} />,
                    code: ({ node, inline, ...props }: any) => 
                        inline ? 
                            <code className={styles.inlineCode} {...props} /> :
                            <code className={styles.codeBlock} {...props} />,
                    pre: ({ node, ...props }) => <pre className={styles.pre} {...props} />,
                    img: ({ node, ...props }) => <img className={styles.img} {...props} />,
                    table: ({ node, ...props }) => <table className={styles.table} {...props} />,
                    thead: ({ node, ...props }) => <thead className={styles.thead} {...props} />,
                    tbody: ({ node, ...props }) => <tbody className={styles.tbody} {...props} />,
                    tr: ({ node, ...props }) => <tr className={styles.tr} {...props} />,
                    td: ({ node, ...props }) => <td className={styles.td} {...props} />,
                    th: ({ node, ...props }) => <th className={styles.th} {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
