
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPostBattleCaptiveOptionIds } from "./CampaignPostBattleCaptiveOptionIds";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";

export namespace CampaignPostBattleCaptiveOptions {
  export const KEY = new CollectionKey("campaign_post_battle_captive_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _captiveOption: string;
    readonly _campaignGroup: string;
    readonly _effectBundle: string;
    readonly onscreenName: string;
    readonly effectBundleTurns: number;
    readonly iconPath: string;
    readonly description: string;
    readonly soundEvent: string;
    readonly moralePenaltyPerArmy: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._captiveOption = values["captive_option"];
      this._campaignGroup = values["campaign_group"];
      this._effectBundle = values["effect_bundle"];
      this.onscreenName = values["onscreen_name"];
      this.effectBundleTurns = values["effect_bundle_turns"];
      this.iconPath = values["icon_path"];
      this.description = values["description"];
      this.soundEvent = values["sound_event"];
      this.moralePenaltyPerArmy = values["morale_penalty_per_army"];
    }
    
    get captiveOption(): CampaignPostBattleCaptiveOptionIds.Entry | undefined {
      const collection = <CampaignPostBattleCaptiveOptionIds.Entry[]>this.collectionCache.getCollection(CampaignPostBattleCaptiveOptionIds.KEY, CampaignPostBattleCaptiveOptionIds.Entry);
      return collection.find(entry => entry.captiveOption === this._captiveOption);
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

export default CampaignPostBattleCaptiveOptions;
