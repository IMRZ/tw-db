
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";

export namespace CampaignGroupFactionEffectBundles {
  export const KEY = new CollectionKey("campaign_group_faction_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _effectBundle: string;
    readonly duration: number;
    readonly applyToHuman: boolean;
    readonly applyToAi: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._effectBundle = values["effect_bundle"];
      this.duration = values["duration"];
      this.applyToHuman = !!values["apply_to_human"];
      this.applyToAi = !!values["apply_to_ai"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default CampaignGroupFactionEffectBundles;
