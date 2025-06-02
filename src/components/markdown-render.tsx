import { Copy } from 'lucide-react'
import { memo, useState } from 'react'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

type MarkdownRenderProps = {
  content: string
}

function MarkdownRenderComp({ content }: MarkdownRenderProps) {
  return (
    <div className="prose prose-neutral max-w-none dark:prose-invert text-base">
      <Markdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-6 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-5 mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="leading-relaxed my-2 text-zinc-800 dark:text-zinc-200">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc ml-6 space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal ml-6 space-y-1">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-zinc-800 dark:text-zinc-300">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-zinc-400 pl-4 italic text-zinc-600 dark:text-zinc-400 my-4">
              {children}
            </blockquote>
          ),
          // @ts-expect-error [ignore]
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || '')
            const code = String(children).replace(/\n$/, '')

            if (!inline && match) {
              const language = match[1]
              return (
                <div className="relative group my-4 rounded-md overflow-hidden">
                  <CopyButton content={code} />
                  <SyntaxHighlighter
                    language={language}
                    style={oneDark}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      overflowX: 'auto',
                      fontSize: '0.875rem',
                    }}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              )
            }

            return (
              <code className="bg-zinc-100 dark:bg-zinc-800 text-pink-600 px-1 py-0.5 rounded font-mono text-sm">
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  )
}

function CopyButton({ content }: { content: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={handleCopy}
      className="cursor-pointer absolute top-2 right-2 p-1.5 text-xs text-white bg-zinc-700 hover:bg-zinc-600 rounded transition opacity-0 group-hover:opacity-100"
      aria-label="Copiar código"
    >
      {copied ? 'Copiado!' : <Copy size={16} />}
    </button>
  )
}

export const MarkdownRender = memo(MarkdownRenderComp)
