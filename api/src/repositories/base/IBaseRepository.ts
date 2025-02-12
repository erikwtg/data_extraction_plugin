export interface IBaseRepository<T> {
  create(item: T): Promise<T | { error: boolean, message: string }>
  getAll(): Promise<T[]>
}