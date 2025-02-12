export function DataScrapperPlugin() {
  const pluginBox = document.createElement('div')
  pluginBox.innerHTML = `
    <h1>Data Scrapper Plugin</h1>
  `
  document.body.appendChild(pluginBox)
}

DataScrapperPlugin()
