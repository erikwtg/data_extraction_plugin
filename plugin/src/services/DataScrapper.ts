import { UAParser } from 'ua-parser-js'

type DataScrapperProps = {
  origin: string
  device: string
  system: string
  exchangedThemes: string
}

export interface IDataScrapper {
  scrap: () => DataScrapperProps
}

export class DataScrapper implements IDataScrapper {
  private parser: UAParser

  constructor() {
    this.parser = new UAParser()
  }

  private getOperatingSystem(): string {
    const os = this.parser.getOS()
    return os.name || 'Sistema operacional não identificado'
  }

  private getDevice(): string {
    const device = this.parser.getDevice()
    return device.type || 'Dispositivo não identificado'
  }

  private getDomain(): string {
    console.log('RECUPERA DOMINIO DA PAGINA: ', window.location.host)
    return window.location.host
  }

  private getLocalData(): string {
    const themeClicks = localStorage.getItem('storedNumberOfClicksInThemeButton')

    return themeClicks || 'Nenhum dado local encontrado'
  }

  public scrap() {
    const data = {
      origin: this.getDomain(),
      device: this.getDevice(),
      system: this.getOperatingSystem(),
      exchangedThemes: this.getLocalData(),
    }

    return data
  }
}