import { CollectEntity } from '../entities/CollectEntity'
import { BaseService } from './base/BaseService'
import { ICollectService } from './ICollectService'

export class CollectService extends BaseService<CollectEntity> implements ICollectService<CollectEntity | { error: boolean, message: string }> {}