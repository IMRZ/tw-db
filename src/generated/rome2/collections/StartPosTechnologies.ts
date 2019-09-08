
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { Technologies } from "./Technologies";

export namespace StartPosTechnologies {
  export const KEY = new CollectionKey("start_pos_technologies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: number;
    readonly _technology: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._technology = values["technology"];
    }
    
    get faction(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._faction);
    }
    
    get technology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technology);
    }
  }
}

export default StartPosTechnologies;
