
import { CollectionCache, CollectionKey } from "../../../common";
import { ProvincialInitiativeRecords } from "./ProvincialInitiativeRecords";
import { EffectBundles } from "./EffectBundles";

export namespace ProvincialInitiativeStrengthLevels {
  export const KEY = new CollectionKey("provincial_initiative_strength_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _initiativeRecord: string;
    readonly strength: number;
    readonly _effectBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._initiativeRecord = values["initiative_record"];
      this.strength = values["strength"];
      this._effectBundle = values["effect_bundle"];
    }
    
    get initiativeRecord(): ProvincialInitiativeRecords.Entry | undefined {
      const collection = <ProvincialInitiativeRecords.Entry[]>this.collectionCache.getCollection(ProvincialInitiativeRecords.KEY, ProvincialInitiativeRecords.Entry);
      return collection.find(entry => entry.key === this._initiativeRecord);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default ProvincialInitiativeStrengthLevels;
