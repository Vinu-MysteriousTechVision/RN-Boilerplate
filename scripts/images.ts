const fs = require('fs')

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/res/assets')
    .filter(file => {
      return file.endsWith('.png')
    })
    .map(file => {
      return file
        .replace('@1x.png', '')
        .replace('@2x.png', '')
        .replace('@3x.png', '')
    })
  return Array.from(new Set(array))
}

const generate = () => {
  const properties = imageFileNames()
    .map(name => {
      return `${name}: require('./assets/${name}.png')`
    })
    .join(',\n  ')
  const fileContentString = `export const Images = {
  ${properties}
}

export default Images
`

  fs.writeFileSync('src/res/images.ts', fileContentString, 'utf8')
}
generate()
