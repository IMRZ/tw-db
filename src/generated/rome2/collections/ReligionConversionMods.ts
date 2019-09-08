
import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";

export namespace ReligionConversionMods {
  export const KEY = new CollectionKey("religion_conversion_mods");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _relFrom: string;
    readonly _relTo: any;
    readonly modifier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._relFrom = values["rel_from"];
      this._relTo = values["rel_to"];
      this.modifier = values["modifier"];
    }
    
    get relFrom(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._relFrom);
    }
  }
}

export default ReligionConversionMods;
