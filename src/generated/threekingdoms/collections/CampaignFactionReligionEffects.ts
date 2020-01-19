
import { CollectionCache, CollectionKey } from "../../../common";
import { Religions } from "./Religions";
import { EffectBundles } from "./EffectBundles";

export namespace CampaignFactionReligionEffects {
  export const KEY = new CollectionKey("campaign_faction_religion_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _religion: string;
    readonly percentageUpperThreshold: number;
    readonly _effectsBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._religion = values["religion"];
      this.percentageUpperThreshold = values["percentage_upper_threshold"];
      this._effectsBundle = values["effects_bundle"];
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
    
    get effectsBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectsBundle);
    }
  }
}

export default CampaignFactionReligionEffects;
