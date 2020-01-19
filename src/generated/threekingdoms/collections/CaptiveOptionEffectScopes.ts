
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaptiveOptionEffectScopes {
  export const KEY = new CollectionKey("captive_option_effect_scopes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaptiveOptionEffectScopes;
