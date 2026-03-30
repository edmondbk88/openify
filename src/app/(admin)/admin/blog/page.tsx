'use client'

import { blogArticles } from '@/lib/blog-data'

export default function AdminBlogPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Gestion de Blog</h1>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-yellow-800">
          Los artículos del blog están definidos en <code className="bg-yellow-100 px-1 rounded">src/lib/blog-data.ts</code>.
          Para editar, añadir o eliminar artículos es necesario modificar el código fuente y redesplegar.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">#</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Título</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Categoria</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Fecha</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Lectura</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Palabras</th>
              </tr>
            </thead>
            <tbody>
              {blogArticles.map((article, index) => {
                const wordCount = article.content.split(/\s+/).length
                return (
                  <tr key={article.slug} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-400">{index + 1}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`/blog/${article.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 font-medium hover:text-indigo-600 transition-colors"
                      >
                        {article.title}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{article.date}</td>
                    <td className="px-4 py-3 text-gray-500">{article.readTime}</td>
                    <td className="px-4 py-3 text-gray-500">{wordCount.toLocaleString('es-ES')}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-sm text-gray-400 mt-3">Total: {blogArticles.length} artículos</p>
    </div>
  )
}
