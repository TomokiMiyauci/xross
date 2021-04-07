import { execSync } from 'child_process'
import { mkdirpSync, moveSync, readdirSync, removeSync } from 'fs-extra'
import { join } from 'path'
const components = readdirSync('src/components', {
  encoding: 'utf-8'
})

components.forEach((component) => {
  mkdirpSync(join('dist', 'vue', 'src', 'components', component))
})

execSync('yarn vue-dts-gen src/components/**/*.vue --outDir dist')

moveSync('dist/vue/src/components', 'dist/components', {
  overwrite: true
})
removeSync('dist/vue')
