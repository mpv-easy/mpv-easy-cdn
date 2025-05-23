import { readFileSync, writeFileSync } from 'fs'

const DATA = JSON.parse(readFileSync('meta.json', 'utf8'))

async function download(name: string, url: string) {
  const bin = await fetch(url).then(i => i.arrayBuffer())
  writeFileSync(name, new Uint8Array(bin))
}

for (let name in DATA) {
  const { downloadURL } = DATA[name] as Record<string, string>
  if (downloadURL.endsWith('master.zip') || downloadURL.endsWith('main.zip')) {
    name = DATA[name].name + '.zip'
  } else if (downloadURL.endsWith('.js') || downloadURL.endsWith('.lua')) {
    name = downloadURL.split('/').at(-1)!
  }

  if (!['.js', '.lua', '.zip'].some(i => downloadURL.endsWith(i))) {
    continue
  }
  try {
    await download(name, downloadURL)
  } catch (e) {
    console.log(DATA[name], e)
  }
}