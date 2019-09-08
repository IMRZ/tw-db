
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitSpecialAbilityEffects {
  export const KEY = new CollectionKey("unit_special_ability_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _id: any;
    readonly _unitStatModifier: any;
    readonly value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._id = values["id"];
      this._unitStatModifier = values["unit_stat_modifier"];
      this.value = values["value"];
    }
    
  }
}

export default UnitSpecialAbilityEffects;
