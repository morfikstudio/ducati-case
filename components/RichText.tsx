import { PortableText, PortableTextComponents } from "@portabletext/react"

const components: Partial<PortableTextComponents> = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold">{children}</h2>
    ),
    h5: ({ children }) => (
      <h5 className="text-2xl font-semibold">{children}</h5>
    ),
    normal: ({ children }) => <p className="mb-4">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href || "#"
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {children}
        </a>
      )
    },
  },
}

function RichText({ text }: { text: any }) {
  return <PortableText value={text} components={components} />
}

export default RichText
