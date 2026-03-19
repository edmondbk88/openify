'use client'

interface TemplateFilterProps {
  categories: string[]
  activeCategory: string
  onChange: (category: string) => void
}

export function TemplateFilter({ categories, activeCategory, onChange }: TemplateFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onChange('Todas')}
        className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
          activeCategory === 'Todas'
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Todas
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
            activeCategory === cat
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
