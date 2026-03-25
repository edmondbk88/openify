import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false, // App tests must run sequentially (create before edit/delete)
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, // Sequential for stateful app tests
  reporter: process.env.CI ? 'github' : 'html',
  timeout: 30000,
  use: {
    baseURL: process.env.E2E_BASE_URL || 'https://opinafy.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    // Marketing/SEO tests — no auth needed
    {
      name: 'public',
      testMatch: 'critical-paths.spec.ts',
      use: { browserName: 'chromium' },
    },
    // Auth setup — runs first, saves session
    {
      name: 'auth-setup',
      testMatch: 'auth.setup.ts',
      use: { browserName: 'chromium' },
    },
    // Full app tests — uses saved auth
    {
      name: 'app',
      testMatch: 'full-app.spec.ts',
      dependencies: ['auth-setup'],
      use: { browserName: 'chromium' },
    },
  ],
})
