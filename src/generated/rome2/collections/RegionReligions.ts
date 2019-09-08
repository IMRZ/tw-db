
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Religions } from "./Religions";

export namespace RegionReligions {
  export const KEY = new CollectionKey("region_religions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _region: string;
    readonly _religion: string;
    readonly religionZeal: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._region = values["region"];
      this._religion = values["religion"];
      this.religionZeal = values["religion_zeal"];
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
  }
}

export default RegionReligions;
