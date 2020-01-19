
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilities } from "./UnitAbilities";
import { UnitAbilitiesAdditionalUiEffects } from "./UnitAbilitiesAdditionalUiEffects";

export namespace UnitAbilitiesToAdditionalUiEffectsJuncs {
  export const KEY = new CollectionKey("unit_abilities_to_additional_ui_effects_juncs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ability: string;
    readonly _effect: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ability = values["ability"];
      this._effect = values["effect"];
    }
    
    get ability(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._ability);
    }
    
    get effect(): UnitAbilitiesAdditionalUiEffects.Entry | undefined {
      const collection = <UnitAbilitiesAdditionalUiEffects.Entry[]>this.collectionCache.getCollection(UnitAbilitiesAdditionalUiEffects.KEY, UnitAbilitiesAdditionalUiEffects.Entry);
      return collection.find(entry => entry.key === this._effect);
    }
  }
}

export default UnitAbilitiesToAdditionalUiEffectsJuncs;
