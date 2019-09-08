
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { EffectBundles } from "./EffectBundles";

export namespace CampaignPublicOrderPopulaceEffects {
  export const KEY = new CollectionKey("campaign_public_order_populace_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly populaceHappiness: string;
    readonly _culture: string;
    readonly _effectBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.populaceHappiness = values["populace_happiness"];
      this._culture = values["culture"];
      this._effectBundle = values["effect_bundle"];
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

export default CampaignPublicOrderPopulaceEffects;
