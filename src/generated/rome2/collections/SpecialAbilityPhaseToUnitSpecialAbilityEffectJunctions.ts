
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpecialAbilityPhaseToUnitSpecialAbilityEffectJunctions {
  export const KEY = new CollectionKey("special_ability_phase_to_unit_special_ability_effect_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _phase: any;
    readonly _specialAbilityEffect: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._phase = values["phase"];
      this._specialAbilityEffect = values["special_ability_effect"];
    }
    
  }
}

export default SpecialAbilityPhaseToUnitSpecialAbilityEffectJunctions;
