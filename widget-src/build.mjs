import * as esbuild from 'esbuild'

esbuild.build({
  entryPoints: ['widget-src/widget.ts'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  outfile: 'public/widget.js',
}).then(() => {
  console.log('Widget built successfully -> public/widget.js')
}).catch((err) => {
  console.error('Widget build failed:', err)
  process.exit(1)
})
