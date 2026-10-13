import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  const renderedContent = useMemo(() => {
    if (!text) return null;

    // Preserve escaped dollar symbols (\$ or literal $) so they don't corrupt inline math parsing
    let safeText = text.replace(/\\\$/g, '___LITERAL_DOLLAR___');

    // Pre-sanitize Moodle / markdown artifacts (stray asterisks around colons and newlines)
    safeText = safeText
      .replace(/:\*\*(\s*)/g, ':$1')
      .replace(/\*\*(\s*\n\s*)\*\*/g, '$1')
      .replace(/\*\*(\s*)\*\*/g, '$1');

    // Split text by display math ($$...$$) and inline math ($...$)
    const parts = safeText.split(/(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g);

    return parts.map((part, index) => {
      if (!part) return null;

      // 1. Display math: $$...$$
      if (part.startsWith('$$') && part.endsWith('$$') && part.length >= 4) {
        const mathContent = part.slice(2, -2).trim().replace(/___LITERAL_DOLLAR___/g, '\\text{\\$}');
        try {
          const html = katex.renderToString(mathContent, {
            displayMode: true,
            throwOnError: false,
            strict: 'ignore',
          });
          return (
            <span
              key={index}
              className="block my-2 overflow-x-auto text-center font-normal"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <span key={index} className="block font-mono text-xs my-1 text-center text-white/80">
              {mathContent}
            </span>
          );
        }
      }

      // 2. Inline math: $...$
      if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
        const mathContent = part.slice(1, -1).trim().replace(/___LITERAL_DOLLAR___/g, '\\text{\\$}');
        try {
          const html = katex.renderToString(mathContent, {
            displayMode: false,
            throwOnError: false,
            strict: 'ignore',
          });
          return (
            <span
              key={index}
              className="inline-math inline-block align-baseline mx-0.5 font-normal"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return (
            <span key={index} className="font-mono text-xs text-indigo-300">
              {mathContent}
            </span>
          );
        }
      }

      // 3. Normal text: format basic markdown (**bold**, *italic*, `code`, \n)
      return <RenderFormattedText key={index} content={part} />;
    });
  }, [text]);

  return <span className={className}>{renderedContent}</span>;
};

const RenderFormattedText: React.FC<{ content: string }> = ({ content }) => {
  // Split on bold (**...** on single line), italic (*...*), inline code (`...`), newline (\n), or literal dollar token
  const tokens = content.split(/(\*\*[^\*\n]+?\*\*|\*[^\*\n]+?\*|`[^`\n]+?`|\n|___LITERAL_DOLLAR___)/g);

  return (
    <>
      {tokens.map((token, i) => {
        if (!token) return null;
        if (token === '___LITERAL_DOLLAR___') {
          return (
            <code
              key={i}
              className="font-mono bg-white/10 px-1 py-0.5 rounded text-[11px] text-indigo-300 font-bold"
            >
              $
            </code>
          );
        }
        if (token === '\n') {
          return <br key={i} />;
        }
        if (token.startsWith('**') && token.endsWith('**') && token.length >= 4) {
          return (
            <strong key={i} className="font-bold text-white">
              {token.slice(2, -2)}
            </strong>
          );
        }
        if (token.startsWith('*') && token.endsWith('*') && token.length >= 2) {
          return (
            <em key={i} className="italic text-white/90">
              {token.slice(1, -1)}
            </em>
          );
        }
        if (token.startsWith('`') && token.endsWith('`') && token.length >= 2) {
          return (
            <code
              key={i}
              className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-[11px] text-indigo-300"
            >
              {token.slice(1, -1)}
            </code>
          );
        }
        // Clean any stray unmatched **
        const clean = token.replace(/\*\*/g, '');
        return <span key={i}>{clean}</span>;
      })}
    </>
  );
};
