
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { GovernmentTypes } from "./GovernmentTypes";

export namespace MinisterialPositionsToGovernmentTypes {
  export const KEY = new CollectionKey("ministerial_positions_to_government_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ministerialPosition: string;
    readonly _governmentType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ministerialPosition = values["ministerial_position"];
      this._governmentType = values["government_type"];
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
    
    get governmentType(): GovernmentTypes.Entry | undefined {
      const collection = <GovernmentTypes.Entry[]>this.collectionCache.getCollection(GovernmentTypes.KEY, GovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._governmentType);
    }
  }
}

export default MinisterialPositionsToGovernmentTypes;
