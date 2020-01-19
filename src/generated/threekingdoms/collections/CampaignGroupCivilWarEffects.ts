
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";

export namespace CampaignGroupCivilWarEffects {
  export const KEY = new CollectionKey("campaign_group_civil_war_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _startEffects: string;
    readonly startEffectDuration: number;
    readonly _persistentEffects: string;
    readonly _winEffects: string;
    readonly winEffectDuration: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._startEffects = values["start_effects"];
      this.startEffectDuration = values["start_effect_duration"];
      this._persistentEffects = values["persistent_effects"];
      this._winEffects = values["win_effects"];
      this.winEffectDuration = values["win_effect_duration"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get startEffects(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._startEffects);
    }
    
    get persistentEffects(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._persistentEffects);
    }
    
    get winEffects(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._winEffects);
    }
  }
}

export default CampaignGroupCivilWarEffects;
