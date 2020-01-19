
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiEffectBundleTypeEnums {
  export const KEY = new CollectionKey("ui_effect_bundle_type_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default UiEffectBundleTypeEnums;
