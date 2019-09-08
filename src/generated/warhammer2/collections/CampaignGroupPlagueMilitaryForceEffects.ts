
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Plagues } from "./Plagues";
import { EffectBundles } from "./EffectBundles";

export namespace CampaignGroupPlagueMilitaryForceEffects {
  export const KEY = new CollectionKey("campaign_group_plague_military_force_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _plague: string;
    readonly _effectBundle: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._plague = values["plague"];
      this._effectBundle = values["effect_bundle"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get plague(): Plagues.Entry | undefined {
      const collection = <Plagues.Entry[]>this.collectionCache.getCollection(Plagues.KEY, Plagues.Entry);
      return collection.find(entry => entry.name === this._plague);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default CampaignGroupPlagueMilitaryForceEffects;
