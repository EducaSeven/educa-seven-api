export abstract class AbstractService<T> {
  abstract findAll(): Promise<T[] | null>;

  abstract findOne(id: string): Promise<T | null>;

  abstract create(data: any): Promise<T>;

  abstract update(id: string, data: any): Promise<T>;

  abstract delete(id: string): Promise<void>;
}
