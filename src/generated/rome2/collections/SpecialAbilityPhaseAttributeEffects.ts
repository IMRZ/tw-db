
import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { UnitAttributes } from "./UnitAttributes";

export namespace SpecialAbilityPhaseAttributeEffects {
  export const KEY = new CollectionKey("special_ability_phase_attribute_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _phase: string;
    readonly _attribute: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._phase = values["phase"];
      this._attribute = values["attribute"];
    }
    
    get phase(): SpecialAbilityPhases.Entry | undefined {
      const collection = <SpecialAbilityPhases.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhases.KEY, SpecialAbilityPhases.Entry);
      return collection.find(entry => entry.id === this._phase);
    }
    
    get attribute(): UnitAttributes.Entry | undefined {
      const collection = <UnitAttributes.Entry[]>this.collectionCache.getCollection(UnitAttributes.KEY, UnitAttributes.Entry);
      return collection.find(entry => entry.key === this._attribute);
    }
  }
}

export default SpecialAbilityPhaseAttributeEffects;
