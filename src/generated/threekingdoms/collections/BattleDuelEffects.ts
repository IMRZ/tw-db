
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleDuelOutcomes } from "./BattleDuelOutcomes";
import { BattleDuelScopes } from "./BattleDuelScopes";
import { BattleDuelStrengthEnums } from "./BattleDuelStrengthEnums";
import { ModifiableUnitStats } from "./ModifiableUnitStats";
import { BattleDuelTimeEnums } from "./BattleDuelTimeEnums";
import { UnitStatModifiersHowEnums } from "./UnitStatModifiersHowEnums";

export namespace BattleDuelEffects {
  export const KEY = new CollectionKey("battle_duel_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _outcome: string;
    readonly _scope: string;
    readonly _strength: string;
    readonly _stats: string;
    readonly _finishedWithinTime: string;
    readonly value: number;
    readonly _how: string;
    readonly expireTime: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._outcome = values["outcome"];
      this._scope = values["scope"];
      this._strength = values["strength"];
      this._stats = values["stats"];
      this._finishedWithinTime = values["finished_within_time"];
      this.value = values["value"];
      this._how = values["how"];
      this.expireTime = values["expire_time"];
    }
    
    get outcome(): BattleDuelOutcomes.Entry | undefined {
      const collection = <BattleDuelOutcomes.Entry[]>this.collectionCache.getCollection(BattleDuelOutcomes.KEY, BattleDuelOutcomes.Entry);
      return collection.find(entry => entry.outcomeType === this._outcome);
    }
    
    get scope(): BattleDuelScopes.Entry | undefined {
      const collection = <BattleDuelScopes.Entry[]>this.collectionCache.getCollection(BattleDuelScopes.KEY, BattleDuelScopes.Entry);
      return collection.find(entry => entry.scope === this._scope);
    }
    
    get strength(): BattleDuelStrengthEnums.Entry | undefined {
      const collection = <BattleDuelStrengthEnums.Entry[]>this.collectionCache.getCollection(BattleDuelStrengthEnums.KEY, BattleDuelStrengthEnums.Entry);
      return collection.find(entry => entry.key === this._strength);
    }
    
    get stats(): ModifiableUnitStats.Entry | undefined {
      const collection = <ModifiableUnitStats.Entry[]>this.collectionCache.getCollection(ModifiableUnitStats.KEY, ModifiableUnitStats.Entry);
      return collection.find(entry => entry.statKey === this._stats);
    }
    
    get finishedWithinTime(): BattleDuelTimeEnums.Entry | undefined {
      const collection = <BattleDuelTimeEnums.Entry[]>this.collectionCache.getCollection(BattleDuelTimeEnums.KEY, BattleDuelTimeEnums.Entry);
      return collection.find(entry => entry.key === this._finishedWithinTime);
    }
    
    get how(): UnitStatModifiersHowEnums.Entry | undefined {
      const collection = <UnitStatModifiersHowEnums.Entry[]>this.collectionCache.getCollection(UnitStatModifiersHowEnums.KEY, UnitStatModifiersHowEnums.Entry);
      return collection.find(entry => entry.key === this._how);
    }
  }
}

export default BattleDuelEffects;
