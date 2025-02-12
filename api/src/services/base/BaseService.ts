import { type IBaseService } from "./IBaseService"
import { type IBaseRepository } from "../../repositories/base/IBaseRepository"

export abstract class BaseService<T> implements IBaseService<T> {
  private repository: IBaseRepository<T>

  constructor(repository: IBaseRepository<T>) {
    this.repository = repository
  }

  async create(item: T): Promise<T> {
    try {
      return await this.repository.create(item)
    } catch (error) {
      console.log("Erro ao criar transação: ", error)
      throw new Error("Falha ao criar transação")
    }
  }

  async getAll(): Promise<T[]> {
    try {
      return await this.repository.getAll()
    } catch (error) {
      console.log("Erro ao listar transações: ", error)
      throw new Error("Falha ao listar transações")
    }
  }
}