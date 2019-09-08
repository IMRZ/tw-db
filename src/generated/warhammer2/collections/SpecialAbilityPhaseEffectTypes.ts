
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpecialAbilityPhaseEffectTypes {
  export const KEY = new CollectionKey("special_ability_phase_effect_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly effectType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.effectType = values["effect_type"];
    }
    
  }
}

export default SpecialAbilityPhaseEffectTypes;
