
import { CollectionCache, CollectionKey } from "../../../common";
import { Tristates } from "./Tristates";
import { MinisterialPositions } from "./MinisterialPositions";

export namespace CaptiveOptionRequirements {
  export const KEY = new CollectionKey("captive_option_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly minLoyalty: number;
    readonly maxLoyalty: number;
    readonly _isSpy: string;
    readonly _hasMinisterialPosition: string;
    readonly _specificMinisterialPosition: string;
    readonly _factionWillDiePostCaptiveTransaction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.minLoyalty = values["min_loyalty"];
      this.maxLoyalty = values["max_loyalty"];
      this._isSpy = values["is_spy"];
      this._hasMinisterialPosition = values["has_ministerial_position"];
      this._specificMinisterialPosition = values["specific_ministerial_position"];
      this._factionWillDiePostCaptiveTransaction = values["faction_will_die_post_captive_transaction"];
    }
    
    get isSpy(): Tristates.Entry | undefined {
      const collection = <Tristates.Entry[]>this.collectionCache.getCollection(Tristates.KEY, Tristates.Entry);
      return collection.find(entry => entry.key === this._isSpy);
    }
    
    get hasMinisterialPosition(): Tristates.Entry | undefined {
      const collection = <Tristates.Entry[]>this.collectionCache.getCollection(Tristates.KEY, Tristates.Entry);
      return collection.find(entry => entry.key === this._hasMinisterialPosition);
    }
    
    get specificMinisterialPosition(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._specificMinisterialPosition);
    }
    
    get factionWillDiePostCaptiveTransaction(): Tristates.Entry | undefined {
      const collection = <Tristates.Entry[]>this.collectionCache.getCollection(Tristates.KEY, Tristates.Entry);
      return collection.find(entry => entry.key === this._factionWillDiePostCaptiveTransaction);
    }
  }
}

export default CaptiveOptionRequirements;
