import { execSync } from 'child_process'
import { mkdirpSync, moveSync, removeSync } from 'fs-extra'

mkdirpSync('dist/vue/src/components/loading')
execSync('yarn vue-dts-gen src/components/**/*.vue --outDir dist')

moveSync('dist/vue/src/components', 'dist/components', {
  overwrite: true
})
removeSync('dist/vue')
