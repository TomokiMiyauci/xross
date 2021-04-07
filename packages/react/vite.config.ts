import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'

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
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'Xross'
    },
    rollupOptions: {
      external: ['react'],
      output: {
        exports: 'named',
        sourcemap: true,
        globals: {
          react: 'React'
        }
      }
    }
  }
})
