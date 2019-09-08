
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitAttributes {
  export const KEY = new CollectionKey("unit_attributes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly bulletText: string;
    readonly imuedEffectText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.bulletText = values["bullet_text"];
      this.imuedEffectText = values["imued_effect_text"];
    }
    
  }
}

export default UnitAttributes;
