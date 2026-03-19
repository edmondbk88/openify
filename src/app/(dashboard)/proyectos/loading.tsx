export default function ProyectosLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-100" />
        <div className="h-10 w-36 animate-pulse rounded-lg bg-gray-100" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3].map(i => (
          <div key={i} className="h-48 animate-pulse rounded-xl bg-gray-100" />
        ))}
      </div>
    </div>
  )
}
