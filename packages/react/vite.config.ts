import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
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
    reactRefresh(),
    WindiCSS({
      scan: {
        dirs: ['src', resolve(__dirname, '..', 'shared', 'src')],
        fileExtensions: ['tsx', 'ts']
      }
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: 'Xross'
    },
    rollupOptions: {
      external: ['react', '@tailwindui/react'],
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