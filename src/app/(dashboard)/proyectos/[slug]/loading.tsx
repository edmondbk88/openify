export default function ProyectoDetailLoading() {
  return (
    <div className="space-y-6">
      <div className="h-6 w-32 animate-pulse rounded-lg bg-gray-100" />
      <div className="flex items-center justify-between">
        <div className="h-8 w-64 animate-pulse rounded-lg bg-gray-100" />
        <div className="flex gap-2">
          {[1,2,3].map(i => (
            <div key={i} className="h-10 w-28 animate-pulse rounded-lg bg-gray-100" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="h-20 animate-pulse rounded-lg bg-gray-100" />
        ))}
      </div>
      <div className="h-96 animate-pulse rounded-xl bg-gray-100" />
    </div>
  )
}
