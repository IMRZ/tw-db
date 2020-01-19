
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AutoresolverModifierBonusTypes {
  export const KEY = new CollectionKey("autoresolver_modifier_bonus_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.description = values["description"];
    }
    
  }
}

export default AutoresolverModifierBonusTypes;
