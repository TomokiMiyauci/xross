import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: '@share',
        replacement: resolve(__dirname, '..', 'shared', 'src')
      }
    ]
  },
  plugins: [
    vue(),
    WindiCSS({
      preflight: false
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Xross'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        sourcemap: true,
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
