
import { CollectionCache, CollectionKey } from "../../../common";
import { GovernmentTypes } from "./GovernmentTypes";
import { MinisterialPositions } from "./MinisterialPositions";

export namespace GovernmentTransitionMappings {
  export const KEY = new CollectionKey("government_transition_mappings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _governmentA: string;
    readonly _governmentB: string;
    readonly _positionA: string;
    readonly _positionB: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._governmentA = values["government_a"];
      this._governmentB = values["government_b"];
      this._positionA = values["position_a"];
      this._positionB = values["position_b"];
    }
    
    get governmentA(): GovernmentTypes.Entry | undefined {
      const collection = <GovernmentTypes.Entry[]>this.collectionCache.getCollection(GovernmentTypes.KEY, GovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._governmentA);
    }
    
    get governmentB(): GovernmentTypes.Entry | undefined {
      const collection = <GovernmentTypes.Entry[]>this.collectionCache.getCollection(GovernmentTypes.KEY, GovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._governmentB);
    }
    
    get positionA(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._positionA);
    }
    
    get positionB(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._positionB);
    }
  }
}

export default GovernmentTransitionMappings;
