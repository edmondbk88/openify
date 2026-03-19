'use client'

import { cn } from '@/lib/utils'

export interface ColorPickerProps {
  value: string
  onChange: (color: string) => void
  label?: string
  className?: string
}

export function ColorPicker({
  value,
  onChange,
  label,
  className,
}: ColorPickerProps) {
  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="flex items-center gap-3">
        <div
          className="h-10 w-10 shrink-0 rounded-lg border border-gray-300 shadow-sm"
          style={{ backgroundColor: value }}
        />
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-10 cursor-pointer rounded border-0 bg-transparent p-0"
        />
        <span className="text-sm font-mono text-gray-600">{value}</span>
      </div>
    </div>
  )
}
