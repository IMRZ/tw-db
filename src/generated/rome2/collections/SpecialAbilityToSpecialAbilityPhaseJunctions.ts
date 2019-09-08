
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";

export namespace SpecialAbilityToSpecialAbilityPhaseJunctions {
  export const KEY = new CollectionKey("special_ability_to_special_ability_phase_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _specialAbility: string;
    readonly _phase: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._specialAbility = values["special_ability"];
      this._phase = values["phase"];
      this.order = values["order"];
    }
    
    get specialAbility(): UnitSpecialAbilities.Entry | undefined {
      const collection = <UnitSpecialAbilities.Entry[]>this.collectionCache.getCollection(UnitSpecialAbilities.KEY, UnitSpecialAbilities.Entry);
      return collection.find(entry => entry._key === this._specialAbility);
    }
    
    get phase(): SpecialAbilityPhases.Entry | undefined {
      const collection = <SpecialAbilityPhases.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhases.KEY, SpecialAbilityPhases.Entry);
      return collection.find(entry => entry.id === this._phase);
    }
  }
}

export default SpecialAbilityToSpecialAbilityPhaseJunctions;
