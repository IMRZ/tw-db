
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";

export namespace MinisterialPositionsSwitchingLoyaltyEffects {
  export const KEY = new CollectionKey("ministerial_positions_switching_loyalty_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _positionFrom: string;
    readonly _positionTo: string;
    readonly loyaltyGained: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._positionFrom = values["position_from"];
      this._positionTo = values["position_to"];
      this.loyaltyGained = values["loyalty_gained"];
    }
    
    get positionFrom(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._positionFrom);
    }
    
    get positionTo(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._positionTo);
    }
  }
}

export default MinisterialPositionsSwitchingLoyaltyEffects;
