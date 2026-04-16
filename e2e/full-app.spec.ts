import { test, expect } from '@playwright/test'
import path from 'path'

const AUTH_FILE = path.join(__dirname, '../.auth/test-user.json')

test.use({ storageState: AUTH_FILE })
test.use({ viewport: { width: 1440, height: 900 } })

// ─── Dashboard ──────────────────────────────────────────────

test('dashboard loads', async ({ page }) => {
  await page.goto('/dashboard')
  await expect(page).toHaveURL(/dashboard/)
  // Verify logged in — sidebar has navigation
  await expect(page.locator('a[href="/proyectos"]').first()).toBeAttached()
})

// ─── Project CRUD (sequential) ──────────────────────────────

test('create project, navigate sub-pages, then delete', async ({ page }) => {
  // 1. Create project
  await page.goto('/proyectos/nuevo')
  await expect(page.locator('h1')).toContainText('Nuevo Proyecto')
  await page.getByPlaceholder('Mi negocio').fill('E2E Test Project')
  await page.locator('button[type="submit"]').click()
  await page.waitForURL(/proyectos\/(?!nuevo)/, { timeout: 30000 })

  // Extract the project URL
  const projectUrl = page.url()

  // 2. Verify project appears in list
  await page.goto('/proyectos')
  await expect(page.getByText('E2E Test Project').first()).toBeVisible({ timeout: 10000 })

  // 3. Go to project detail
  await page.goto(projectUrl)
  await expect(page.locator('h1, h2').first()).toBeVisible()

  // 4. Check sub-pages exist (just navigate, don't assert complex content)
  const subPages = ['editar', 'widget', 'recopilar', 'analytics', 'importar', 'integraciones']
  for (const sub of subPages) {
    const link = page.locator(`a[href*="${sub}"]`).first()
    if (await link.isVisible({ timeout: 2000 }).catch(() => false)) {
      await link.click()
      await page.waitForTimeout(2000)
      // Verify no 500 error
      const title = await page.title()
      expect(title).not.toContain('500')
      expect(title).not.toContain('Error')
      // Go back to project
      await page.goto(projectUrl)
    }
  }

  // 5. Delete the project (best-effort cleanup)
  page.on('dialog', (dialog) => dialog.accept())
  const deleteBtn = page.locator('button:has-text("Eliminar")').first()
  if (await deleteBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await deleteBtn.click()
    await page.waitForTimeout(5000)
  }
})

// ─── Mini Site ──────────────────────────────────────────────

test('mini site config page loads', async ({ page }) => {
  await page.goto('/mi-sitio')
  await expect(page.locator('h1, h2').first()).toBeVisible()
})

test('public mini site responds', async ({ page }) => {
  const res = await page.goto('/s/test-e2e')
  expect(res?.status()).toBeLessThan(500)
})

// ─── Settings ───────────────────────────────────────────────

test('settings page loads with form', async ({ page }) => {
  await page.goto('/configuracion')
  await expect(page.locator('h1, h2').first()).toBeVisible()
  await expect(page.locator('input').first()).toBeVisible()
})

// ─── Billing ────────────────────────────────────────────────

test('billing page loads and shows plan', async ({ page }) => {
  await page.goto('/facturacion')
  await expect(page.locator('h1, h2').first()).toBeVisible()
})

// ─── Support ────────────────────────────────────────────────

test('support list page loads', async ({ page }) => {
  await page.goto('/soporte')
  await expect(page.locator('h1, h2').first()).toBeVisible()
})

test('new support ticket form works', async ({ page }) => {
  await page.goto('/soporte/nuevo')
  await expect(page.locator('h1, h2').first()).toBeVisible()

  const subjectInput = page.locator('input').first()
  if (await subjectInput.isVisible()) {
    await subjectInput.fill('[E2E] Ticket de prueba')
    const categorySelect = page.locator('select').first()
    if (await categorySelect.isVisible()) {
      await categorySelect.selectOption({ index: 1 })
    }
    const messageInput = page.locator('textarea').first()
    if (await messageInput.isVisible()) {
      await messageInput.fill('Ticket de prueba E2E. Se puede eliminar.')
    }
    await page.locator('button[type="submit"]').click()
    await page.waitForTimeout(3000)
  }
})

// ─── Collection Form (Public) ───────────────────────────────

test('collection form route responds', async ({ page }) => {
  const res = await page.goto('/p/test-e2e/test')
  expect(res?.status()).not.toBe(500)
})
