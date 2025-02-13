export class CollectEntity {
  id?: number
  device: string
  system: string
  origin: string
  exchangedThemes?: string
  createdAt?: number
  updatedAt?: number

  constructor({
    id,
    device,
    system,
    origin,
    exchangedThemes,
    createdAt,
    updatedAt
  }: {
    id?: number
    device: string
    system: string
    origin: string
    exchangedThemes: string
    createdAt?: number
    updatedAt?: number
  }) {
    this.id = id
    this.device = device
    this.system = system
    this.origin = origin
    this.exchangedThemes = exchangedThemes
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
  }
}
