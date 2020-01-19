
import { CollectionCache, CollectionKey } from "../../../common";
import { KvFatigue } from "./KvFatigue";
import { ModifiableUnitStats } from "./ModifiableUnitStats";

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
    
    get stat(): ModifiableUnitStats.Entry | undefined {
      const collection = <ModifiableUnitStats.Entry[]>this.collectionCache.getCollection(ModifiableUnitStats.KEY, ModifiableUnitStats.Entry);
      return collection.find(entry => entry.statKey === this._stat);
    }
  }
}

export default UnitFatigueEffects;
