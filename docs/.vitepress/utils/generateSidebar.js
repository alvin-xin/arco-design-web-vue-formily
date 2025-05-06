import fs from 'fs'
import path from 'path'

export function generateSidebar(dir = '../../guide') {
  const docsPath = path.join(__dirname, dir)
  
  const getItems = (currentPath) => {
    return fs.readdirSync(currentPath)
      .filter(item => !item.startsWith('.') && (item.endsWith('.md') || fs.statSync(path.join(currentPath, item)).isDirectory()))
      .map(item => {
        const itemPath = path.join(currentPath, item)
        if (fs.statSync(itemPath).isDirectory()) {
          return {
            text: item.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()),
            items: getItems(itemPath)
          }
        }
        return {
          text: item === 'README.md' 
            ? 'Overview' 
            : item.replace('.md', '').replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()),
          link: `/guide/${path.relative(docsPath, currentPath)}/${item.replace('.md', '')}`
        }
      })
  }

  const sidebar = getItems(docsPath)

  console.log("sidebar: ", sidebar);

  return [{
    text: '指南',
    items: sidebar
  }]
}