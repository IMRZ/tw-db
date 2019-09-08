
import { CollectionCache, CollectionKey } from "../../../common";
import { TaxesKeys } from "./TaxesKeys";
import { Effects } from "./Effects";
import { Campaigns } from "./Campaigns";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace TaxesEffectsJct {
  export const KEY = new CollectionKey("taxes_effects_jct");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _taxName: string;
    readonly _effect: string;
    readonly value: number;
    readonly _optionalCampaignKey: string;
    readonly optionalDifficultyLevel: string;
    readonly aiOnly: boolean;
    readonly _effectScope: string;
    readonly _specificFeatureSet: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._taxName = values["tax_name"];
      this._effect = values["effect"];
      this.value = values["value"];
      this._optionalCampaignKey = values["optional_campaign_key"];
      this.optionalDifficultyLevel = values["optional_difficulty_level"];
      this.aiOnly = !!values["ai_only"];
      this._effectScope = values["effect_scope"];
      this._specificFeatureSet = values["specific_feature_set"];
    }
    
    get taxName(): TaxesKeys.Entry | undefined {
      const collection = <TaxesKeys.Entry[]>this.collectionCache.getCollection(TaxesKeys.KEY, TaxesKeys.Entry);
      return collection.find(entry => entry.taxLookup === this._taxName);
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get optionalCampaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._optionalCampaignKey);
    }
    
    get effectScope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScope);
    }
  }
}

export default TaxesEffectsJct;
