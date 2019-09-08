
import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";

export namespace EffectBonusValueResourceJunction {
  export const KEY = new CollectionKey("effect_bonus_value_resource_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: any;
    readonly _bonusValueId: any;
    readonly _resource: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._resource = values["resource"];
    }
    
    get resource(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resource);
    }
  }
}

export default EffectBonusValueResourceJunction;
