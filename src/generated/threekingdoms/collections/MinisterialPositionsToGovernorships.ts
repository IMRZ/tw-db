
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { Governorships } from "./Governorships";

export namespace MinisterialPositionsToGovernorships {
  export const KEY = new CollectionKey("ministerial_positions_to_governorships");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ministerialPosition: string;
    readonly _governorship: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ministerialPosition = values["ministerial_position"];
      this._governorship = values["governorship"];
    }
    
    get ministerialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._ministerialPosition);
    }
    
    get governorship(): Governorships.Entry | undefined {
      const collection = <Governorships.Entry[]>this.collectionCache.getCollection(Governorships.KEY, Governorships.Entry);
      return collection.find(entry => entry.governorship === this._governorship);
    }
  }
}

export default MinisterialPositionsToGovernorships;
