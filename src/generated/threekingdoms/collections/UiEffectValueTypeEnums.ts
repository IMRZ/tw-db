
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UiEffectValueTypeEnums {
  export const KEY = new CollectionKey("ui_effect_value_type_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default UiEffectValueTypeEnums;
