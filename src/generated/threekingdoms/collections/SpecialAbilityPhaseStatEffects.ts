
import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { ModifiableUnitStats } from "./ModifiableUnitStats";
import { UnitStatModifiersHowEnums } from "./UnitStatModifiersHowEnums";

export namespace SpecialAbilityPhaseStatEffects {
  export const KEY = new CollectionKey("special_ability_phase_stat_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _phase: string;
    readonly value: string;
    readonly _stat: string;
    readonly _how: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._phase = values["phase"];
      this.value = values["value"];
      this._stat = values["stat"];
      this._how = values["how"];
    }
    
    get phase(): SpecialAbilityPhases.Entry | undefined {
      const collection = <SpecialAbilityPhases.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhases.KEY, SpecialAbilityPhases.Entry);
      return collection.find(entry => entry.id === this._phase);
    }
    
    get stat(): ModifiableUnitStats.Entry | undefined {
      const collection = <ModifiableUnitStats.Entry[]>this.collectionCache.getCollection(ModifiableUnitStats.KEY, ModifiableUnitStats.Entry);
      return collection.find(entry => entry.statKey === this._stat);
    }
    
    get how(): UnitStatModifiersHowEnums.Entry | undefined {
      const collection = <UnitStatModifiersHowEnums.Entry[]>this.collectionCache.getCollection(UnitStatModifiersHowEnums.KEY, UnitStatModifiersHowEnums.Entry);
      return collection.find(entry => entry.key === this._how);
    }
  }
}

export default SpecialAbilityPhaseStatEffects;
