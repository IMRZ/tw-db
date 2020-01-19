
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { EffectBundles } from "./EffectBundles";

export namespace ConfederationEffectBundles {
  export const KEY = new CollectionKey("confederation_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _culture: string;
    readonly _effectBundle: string;
    readonly turns: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._culture = values["culture"];
      this._effectBundle = values["effect_bundle"];
      this.turns = values["turns"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default ConfederationEffectBundles;
