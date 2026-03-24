/**
 * Script to stagger blog publication dates across a realistic schedule.
 * Start: 2025-10-15, End: ~2026-03-20
 * 160 articles total
 *
 * Strategy: Publish on Tue, Thu, Sat as base (3/week = ~68 in 23 weeks).
 * Add Mon and Wed in some weeks to reach 160 total.
 * We'll use a repeating 2-week cycle:
 *   Week A: Mon, Tue, Wed, Thu, Sat (5 articles)
 *   Week B: Tue, Thu, Sat (3 articles)
 * That's 8 articles per 2 weeks = 4/week average.
 * 160 / 4 = 40 weeks. Still too long.
 *
 * Alternative: just space evenly across the date range.
 * Oct 15 to Mar 19 = 155 days. 160 articles = ~1.03/day.
 * We'll do 1 article per day (Mon-Sun) to keep it simple and natural.
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function generateDates(numArticles) {
  const dates = []
  const startDate = new Date('2025-10-15T12:00:00Z')
  const endDate = new Date('2026-03-19T12:00:00Z')

  const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24))
  // 155 days, 160 articles. We need some days with 2 articles.
  // Spread evenly: every ~0.97 days
  const interval = totalDays / (numArticles - 1)

  for (let i = 0; i < numArticles; i++) {
    const daysOffset = Math.round(i * interval)
    const date = new Date(startDate.getTime() + daysOffset * 24 * 60 * 60 * 1000)
    const yyyy = date.getUTCFullYear()
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0')
    const dd = String(date.getUTCDate()).padStart(2, '0')
    dates.push(`${yyyy}-${mm}-${dd}`)
  }

  return dates
}

function updateFile(filePath, dates) {
  let content = readFileSync(filePath, 'utf-8')
  let dateIndex = 0
  content = content.replace(/date: '(\d{4}-\d{2}-\d{2})'/g, (match) => {
    if (dateIndex < dates.length) {
      const newDate = dates[dateIndex]
      dateIndex++
      return `date: '${newDate}'`
    }
    return match
  })
  writeFileSync(filePath, content, 'utf-8')
  console.log(`Updated ${dateIndex} dates in ${filePath}`)
  console.log(`  First date: ${dates[0]}`)
  console.log(`  Last date: ${dates[dateIndex - 1]}`)
}

const dates = generateDates(160)
console.log(`Generated ${dates.length} dates`)
console.log(`Date range: ${dates[0]} to ${dates[159]}`)

// Show date distribution
const uniqueDates = new Set(dates)
console.log(`Unique dates: ${uniqueDates.size} (some days may have 2 articles)`)
console.log()

const blogDataPath = join(__dirname, '..', 'src', 'lib', 'blog-data.ts')
const blogDataEnPath = join(__dirname, '..', 'src', 'lib', 'blog-data-en.ts')

updateFile(blogDataPath, dates)
updateFile(blogDataEnPath, dates)
