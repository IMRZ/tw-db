
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";

export namespace Banners {
  export const KEY = new CollectionKey("banners");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly banner: string;
    readonly _effectBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.banner = values["banner"];
      this._effectBundle = values["effect_bundle"];
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default Banners;
