import { ICollectRepository } from "./ICollectRepositry"
import { BaseRepository } from "./base/BaseRepository"
import { CollectEntity } from "../entities/CollectEntity"

export class CollectRepository extends BaseRepository<CollectEntity> implements ICollectRepository<CollectEntity> {
  constructor(tableName: string) {
    super(tableName)
  }
}