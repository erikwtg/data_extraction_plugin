import { PluginBox } from './components/PluginBox'

export function DataScrapperPlugin() {
  const pluginBox = PluginBox()
  console.log('DATA SCRAPPER PLUGIN')
  document.body.appendChild(pluginBox)
}

DataScrapperPlugin()
