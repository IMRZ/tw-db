
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { CampaignLocalisedStrings } from "./CampaignLocalisedStrings";
import { EffectBundles } from "./EffectBundles";

export namespace FameLevels {
  export const KEY = new CollectionKey("fame_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly level: number;
    readonly playerPrestige: number;
    readonly aiPrestige: number;
    readonly armyCap: number;
    readonly navyCap: number;
    readonly provinceInitiativeCap: number;
    readonly _campaign: string;
    readonly _descriptionLookup: string;
    readonly _effectBundle: string;
    readonly _titleLookup: string;
    readonly _tooltipLookup: string;
    readonly key: number;
    readonly allAgentsCap: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.level = values["level"];
      this.playerPrestige = values["player_prestige"];
      this.aiPrestige = values["ai_prestige"];
      this.armyCap = values["army_cap"];
      this.navyCap = values["navy_cap"];
      this.provinceInitiativeCap = values["province_initiative_cap"];
      this._campaign = values["campaign"];
      this._descriptionLookup = values["description_lookup"];
      this._effectBundle = values["effect_bundle"];
      this._titleLookup = values["title_lookup"];
      this._tooltipLookup = values["tooltip_lookup"];
      this.key = values["key"];
      this.allAgentsCap = values["all_agents_cap"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get descriptionLookup(): CampaignLocalisedStrings.Entry | undefined {
      const collection = <CampaignLocalisedStrings.Entry[]>this.collectionCache.getCollection(CampaignLocalisedStrings.KEY, CampaignLocalisedStrings.Entry);
      return collection.find(entry => entry.key === this._descriptionLookup);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get titleLookup(): CampaignLocalisedStrings.Entry | undefined {
      const collection = <CampaignLocalisedStrings.Entry[]>this.collectionCache.getCollection(CampaignLocalisedStrings.KEY, CampaignLocalisedStrings.Entry);
      return collection.find(entry => entry.key === this._titleLookup);
    }
    
    get tooltipLookup(): CampaignLocalisedStrings.Entry | undefined {
      const collection = <CampaignLocalisedStrings.Entry[]>this.collectionCache.getCollection(CampaignLocalisedStrings.KEY, CampaignLocalisedStrings.Entry);
      return collection.find(entry => entry.key === this._tooltipLookup);
    }
  }
}

export default FameLevels;
