
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";

export namespace PrefabTypes {
  export const KEY = new CollectionKey("prefab_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly prefabType: string;
    readonly _culture: string;
    readonly value: number;
    readonly primary: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.prefabType = values["prefab_type"];
      this._culture = values["culture"];
      this.value = values["value"];
      this.primary = !!values["primary"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
  }
}

export default PrefabTypes;
