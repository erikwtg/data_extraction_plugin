export interface IBaseService<T> {
  create(item: T): Promise<T>
  getAll(): Promise<T[]>
}