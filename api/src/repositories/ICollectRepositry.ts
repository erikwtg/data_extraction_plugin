export interface ICollectRepository<T> {
  createCollect(item: T, token: string): Promise<T | { error: boolean, message: string }>
  getByToken(token: string): Promise<T[]>
}
