import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Layouts from 'vite-plugin-vue-layouts'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    vue(),
    WindiCSS(),
    Layouts(),
    Components({
      customComponentResolvers: ViteIconsResolver({
        componentPrefix: '',
        enabledCollections: ['mdi', 'logos']
      })
    }),
    ViteIcons()
  ]
})
