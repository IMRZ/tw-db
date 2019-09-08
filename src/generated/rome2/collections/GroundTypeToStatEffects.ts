
import { CollectionCache, CollectionKey } from "../../../common";
import { GroundTypes } from "./GroundTypes";
import { UiUnitStats } from "./UiUnitStats";

export namespace GroundTypeToStatEffects {
  export const KEY = new CollectionKey("ground_type_to_stat_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _groundType: string;
    readonly _affectedStat: string;
    readonly multiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._groundType = values["ground_type"];
      this._affectedStat = values["affected_stat"];
      this.multiplier = values["multiplier"];
    }
    
    get groundType(): GroundTypes.Entry | undefined {
      const collection = <GroundTypes.Entry[]>this.collectionCache.getCollection(GroundTypes.KEY, GroundTypes.Entry);
      return collection.find(entry => entry.type === this._groundType);
    }
    
    get affectedStat(): UiUnitStats.Entry | undefined {
      const collection = <UiUnitStats.Entry[]>this.collectionCache.getCollection(UiUnitStats.KEY, UiUnitStats.Entry);
      return collection.find(entry => entry.key === this._affectedStat);
    }
  }
}

export default GroundTypeToStatEffects;
