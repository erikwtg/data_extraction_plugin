import { CollectEntity } from '../entities/CollectEntity'
import { CollectRepository } from '../repositories/CollectRepository'
import { BaseService } from './base/BaseService'
import { ICollectService } from './ICollectService'

export class CollectService extends BaseService<CollectEntity> implements ICollectService<CollectEntity | { error: boolean, message: string }> {
  private collectRepository: CollectRepository

  constructor(collectRepository: CollectRepository) {
    super(collectRepository)
    this.collectRepository = collectRepository
  }

  async createCollect(collect: CollectEntity, token: string): Promise<CollectEntity | { error: boolean, message: string }> {
    try {
      return await this.collectRepository.createCollect(collect, token)
    } catch (error) {
      console.log("Erro ao salvar coleta: ", error)
      return { error: true, message: "Falha ao salvar coleta" }
    }
  }
}