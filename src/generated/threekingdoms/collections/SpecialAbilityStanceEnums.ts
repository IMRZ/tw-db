
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpecialAbilityStanceEnums {
  export const KEY = new CollectionKey("special_ability_stance_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default SpecialAbilityStanceEnums;
