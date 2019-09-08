
import { CollectionCache, CollectionKey } from "../../../common";
import { Mounts } from "./Mounts";

export namespace MountVariants {
  export const KEY = new CollectionKey("mount_variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _mountKey: string;
    readonly displayKey: string;
    readonly weight: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._mountKey = values["mount_key"];
      this.displayKey = values["display_key"];
      this.weight = values["weight"];
    }
    
    get mountKey(): Mounts.Entry | undefined {
      const collection = <Mounts.Entry[]>this.collectionCache.getCollection(Mounts.KEY, Mounts.Entry);
      return collection.find(entry => entry.key === this._mountKey);
    }
  }
}

export default MountVariants;
