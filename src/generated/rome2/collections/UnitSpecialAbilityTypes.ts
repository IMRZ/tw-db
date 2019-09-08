
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitSpecialAbilityTypes {
  export const KEY = new CollectionKey("unit_special_ability_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly specialAbilityType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.specialAbilityType = values["special_ability_type"];
    }
    
  }
}

export default UnitSpecialAbilityTypes;
