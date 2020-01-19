
import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";
import { Effects } from "./Effects";

export namespace ResourceEffects {
  export const KEY = new CollectionKey("resource_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _resourceKey: string;
    readonly _effectKey: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._resourceKey = values["resource_key"];
      this._effectKey = values["effect_key"];
      this.value = values["value"];
    }
    
    get resourceKey(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resourceKey);
    }
    
    get effectKey(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effectKey);
    }
  }
}

export default ResourceEffects;
