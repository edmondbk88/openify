import { test as setup, expect } from '@playwright/test'
import path from 'path'

const AUTH_FILE = path.join(__dirname, '../.auth/test-user.json')

setup('authenticate test user', async ({ page }) => {
  await page.goto('/login')
  await page.fill('input[type="email"]', 'test-e2e@opinafy.com')
  await page.fill('input[type="password"]', 'TestE2E-Opinafy-2026!')
  await page.click('button[type="submit"]')

  // Wait for redirect to dashboard — this confirms login succeeded
  await page.waitForURL('**/dashboard**', { timeout: 15000 })
  // Give the page a moment to fully render
  await page.waitForTimeout(2000)

  // Save auth state
  await page.context().storageState({ path: AUTH_FILE })
})
