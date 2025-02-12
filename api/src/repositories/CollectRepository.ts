import { ICollectRepository } from "./ICollectRepositry"
import { BaseRepository } from "./base/BaseRepository"
import { CollectEntity } from "../entities/CollectEntity"

import { db } from "../database/config"

export class CollectRepository extends BaseRepository<CollectEntity> implements ICollectRepository<CollectEntity> {
  constructor(tableName: string) {
    super(tableName)
  }

  async createCollect(item: CollectEntity, token: string): Promise<CollectEntity | { error: boolean, message: string }> {
    try {
      const now = Date.now()
      const tenMinutesAgo = now - 10 * 60 * 1000

      const lastFiveRegisters = await db.ref(`${this.table}/${token}`)
      .orderByChild("createdAt")
      .startAt(tenMinutesAgo)
      .endAt(now)
      .once("value")

      const totalRegisters = lastFiveRegisters.exists() ? lastFiveRegisters.numChildren() : 0

      if (totalRegisters >= 5) {
        return { error: true, message: 'Limite de 5 extrações atingido.'}
      }

      const collectRefId = db.ref(`${this.table}/${token}`).push()
      const collectId = collectRefId.key ?? undefined

      Object.assign(item, {
        id: collectId,
      })

      const result = await collectRefId.set(item)

      return item
    } catch(error) {
      console.log("Falha ao criar no banco de dados: ", error)
      return { error: true, message: "Falha ao criar no banco de dados." }
    }
  }

  async getByToken(token: string): Promise<CollectEntity[]> {
    const response = await db.ref(`${this.table}/${token}`)
      .orderByChild('createdAt')
      .limitToLast(20)
      .get()

    if (!response.exists()) {
      console.log('Nao a resgistros')
      return []
    }

    return response.val()
  }
}