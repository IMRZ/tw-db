
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AutoresolverModifierMultiplierMechanicEnums {
  export const KEY = new CollectionKey("autoresolver_modifier_multiplier_mechanic_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AutoresolverModifierMultiplierMechanicEnums;
