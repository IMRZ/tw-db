
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosRegions } from "./StartPosRegions";
import { Religions } from "./Religions";

export namespace StartPosRegionReligions {
  export const KEY = new CollectionKey("start_pos_region_religions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _region: number;
    readonly _religion: string;
    readonly percentage: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._region = values["region"];
      this._religion = values["religion"];
      this.percentage = values["percentage"];
    }
    
    get region(): StartPosRegions.Entry | undefined {
      const collection = <StartPosRegions.Entry[]>this.collectionCache.getCollection(StartPosRegions.KEY, StartPosRegions.Entry);
      return collection.find(entry => entry.id === this._region);
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
  }
}

export default StartPosRegionReligions;
