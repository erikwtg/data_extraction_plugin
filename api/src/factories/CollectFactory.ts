import { CollectRepository } from '../repositories/CollectRepository'
import { CollectService } from '../services/CollectService'

export class CollectFactory {
  constructor() {}

  static getInstance() {
    const collectRepository = new CollectRepository('collects')
    const collectService = new CollectService(collectRepository)
    return collectService
  }
}