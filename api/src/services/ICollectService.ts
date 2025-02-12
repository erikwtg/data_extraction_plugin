export interface ICollectService<T> {
  createCollect(collect: T, token: string): Promise<T | { error: boolean, message: string }>
}