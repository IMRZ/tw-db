
import { CollectionCache, CollectionKey } from "../../../common";
import { KvFatigue } from "./KvFatigue";
import { UiUnitStats } from "./UiUnitStats";

export namespace UnitFatigueEffects {
  export const KEY = new CollectionKey("unit_fatigue_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _fatigueLevel: string;
    readonly _stat: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._fatigueLevel = values["fatigue_level"];
      this._stat = values["stat"];
      this.value = values["value"];
    }
    
    get fatigueLevel(): KvFatigue.Entry | undefined {
      const collection = <KvFatigue.Entry[]>this.collectionCache.getCollection(KvFatigue.KEY, KvFatigue.Entry);
      return collection.find(entry => entry.key === this._fatigueLevel);
    }
    
    get stat(): UiUnitStats.Entry | undefined {
      const collection = <UiUnitStats.Entry[]>this.collectionCache.getCollection(UiUnitStats.KEY, UiUnitStats.Entry);
      return collection.find(entry => entry.key === this._stat);
    }
  }
}

export default UnitFatigueEffects;
