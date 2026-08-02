import { Bot, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";

const AIResponse = ({ response }) => {
  if (!response) {
    return (
      <section className="rounded-3xl border border-dashed border-gray-300 bg-gradient-to-br from-blue-50 to-white p-8 sm:p-10">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <Bot size={38} className="text-blue-600" />
          </div>

          <h3 className="mt-6 text-xl font-bold text-gray-900">
            AI Hiring Assistant
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
            Select one of the AI actions above to analyze applicants and receive
            intelligent hiring recommendations.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}

      <div className="flex items-start gap-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white px-5 py-5 sm:px-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
          <Bot size={26} className="text-blue-600" />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">
              AI Recommendation
            </h2>

            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              <Sparkles size={12} />
              Generated
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Based only on the available applicant and job data.
          </p>
        </div>
      </div>

      {/* Content */}

      <div className="overflow-x-auto px-5 py-6 sm:px-8 sm:py-8">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <div className="my-8">
                <h1 className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-3xl font-bold text-blue-700 shadow-sm">
                  {children}
                </h1>
              </div>
            ),

            h2: ({ children }) => (
              <div className="my-7">
                <h2 className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-2xl font-bold text-indigo-700 shadow-sm">
                  {children}
                </h2>
              </div>
            ),

            h3: ({ children }) => (
              <div className="my-6">
                <h3 className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-xl font-bold text-emerald-700 shadow-sm">
                  {children}
                </h3>
              </div>
            ),

            p: ({ children }) => (
              <p className="my-3 leading-8 text-gray-700">{children}</p>
            ),

            ul: ({ children }) => (
              <ul className="my-4 list-disc space-y-2 pl-6 text-gray-700">
                {children}
              </ul>
            ),

            ol: ({ children }) => (
              <ol className="my-4 list-decimal space-y-2 pl-6 text-gray-700">
                {children}
              </ol>
            ),

            li: ({ children }) => (
              <li className="leading-7 marker:text-blue-600">{children}</li>
            ),

            strong: ({ children }) => (
              <strong className="font-bold text-gray-900">{children}</strong>
            ),

            hr: () => (
              <div className="my-8 border-t-2 border-dashed border-gray-200" />
            ),

            blockquote: ({ children }) => (
              <blockquote className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 px-5 py-4 italic text-gray-700">
                {children}
              </blockquote>
            ),

            code: ({ children }) => (
              <code className="rounded bg-gray-100 px-1.5 py-1 font-mono text-sm text-blue-700">
                {children}
              </code>
            ),

            table: ({ children }) => (
              <div className="my-6 overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  {children}
                </table>
              </div>
            ),

            th: ({ children }) => (
              <th className="border bg-gray-100 px-4 py-2 text-left font-semibold">
                {children}
              </th>
            ),

            td: ({ children }) => (
              <td className="border px-4 py-2">{children}</td>
            ),
          }}
        >
          {response}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default AIResponse;
