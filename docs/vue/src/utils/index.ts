const detectFramework = (path: string): 'vue' | 'react' | undefined => {
  if (path.startsWith('/vue')) return 'vue'
  if (path.startsWith('/react')) return 'react'
  return
}
export { detectFramework }
