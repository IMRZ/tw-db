
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { Technologies } from "./Technologies";

export namespace MinisterialPositionRequiredTechnologyJunctions {
  export const KEY = new CollectionKey("ministerial_position_required_technology_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ministerialPositionRecord: string;
    readonly _technologyRecord: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ministerialPositionRecord = values["ministerial_position_record"];
      this._technologyRecord = values["technology_record"];
    }
    
    get ministerialPositionRecord(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPositionRecord);
    }
    
    get technologyRecord(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technologyRecord);
    }
  }
}

export default MinisterialPositionRequiredTechnologyJunctions;
