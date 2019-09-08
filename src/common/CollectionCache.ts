import * as fs from "fs";
import * as path from "path";
import * as xmlParser from "fast-xml-parser";
import { CollectionKey } from "./CollectionKey";

export class CollectionCache {
  private readonly pathToDb: string;
  private readonly cache = new WeakMap<CollectionKey, any[]>();

  constructor(pathToDb: string) {
    this.pathToDb = pathToDb;
  }

  public loadCollection<T>(
    name: string,
    ctor: { new (collectionCache: CollectionCache, values: any): T }
  ): T[] {
    const filePath = path.resolve(this.pathToDb, `${name}.xml`);
    const file = fs.readFileSync(filePath, "utf8");
    const result = xmlParser.parse(file);

    const collection = result.dataroot[name].map((values: any) => {
      return new ctor(this, values);
    });

    return collection;
  }

  public getCollection<T>(
    key: CollectionKey,
    ctor: { new (collectionCache: CollectionCache, values: any): T }
  ): T[] {
    const collection = this.cache.get(key);

    if (collection) {
      return collection;
    } else {
      const loaded = this.loadCollection(key.name, ctor);
      this.cache.set(key, loaded);
      return loaded;
    }
  }
}
