import { db } from "../../database/config"
import { type IBaseRepository } from './IBaseRepository'

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  protected table: string

  constructor(tableName: string) {
    this.table = tableName
  }

  async create(item: T): Promise<T | { error: boolean, message: string }> {
    const tokenRefId = db.ref(`${this.table}`).push()
    const tokenId = tokenRefId.key ?? undefined

    Object.assign(item, {
      id: tokenId,
    })

    try {
      const result = await db.ref(`${this.table}/${tokenId}`).set(item)
      return result as T
    } catch(error) {
      console.log("Falha ao criar no banco de dados: ", error)
      throw new Error("Falha ao criar no banco de dados.")
    }
  }

  async getAll(): Promise<T[]> {
    try {
      const response = await db.ref(this.table)

      const snapshot = await response.get()

      if (!snapshot.exists()) {
        return []
      }

      const docs = snapshot.val() as T[]

      return docs
    } catch(error) {
      console.log("Falha ao listar do banco de dados: ", error)
      throw new Error("Falha ao listar do banco de dados.")
    }
  }
}