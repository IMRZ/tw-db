
import { CollectionCache, CollectionKey } from "../../../common";
import { VictoryTypes } from "./VictoryTypes";

export namespace VictoryTypeLinks {
  export const KEY = new CollectionKey("victory_type_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _from: string;
    readonly _to: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._from = values["from"];
      this._to = values["to"];
    }
    
    get from(): VictoryTypes.Entry | undefined {
      const collection = <VictoryTypes.Entry[]>this.collectionCache.getCollection(VictoryTypes.KEY, VictoryTypes.Entry);
      return collection.find(entry => entry.victoryType === this._from);
    }
    
    get to(): VictoryTypes.Entry | undefined {
      const collection = <VictoryTypes.Entry[]>this.collectionCache.getCollection(VictoryTypes.KEY, VictoryTypes.Entry);
      return collection.find(entry => entry.victoryType === this._to);
    }
  }
}

export default VictoryTypeLinks;
