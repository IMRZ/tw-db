
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignLocalisedStrings } from "./CampaignLocalisedStrings";
import { EffectBundles } from "./EffectBundles";

export namespace CampaignProgressionLevelDetails {
  export const KEY = new CollectionKey("campaign_progression_level_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _title: string;
    readonly _description: string;
    readonly _tooltip: string;
    readonly _effectBundle: string;
    readonly armyCapProvided: number;
    readonly maximumArmyCap: number;
    readonly navyCapProvided: number;
    readonly maximumNavyCap: number;
    readonly retinueCapProvided: number;
    readonly maximumRetinueCap: number;
    readonly governorCapProvided: number;
    readonly maximumGovernorCap: number;
    readonly totalAgentCapProvided: number;
    readonly maximumTotalAgentCap: number;
    readonly totalAssignmentCapProvided: number;
    readonly maximumTotalAssignmentCap: number;
    readonly levelIcon: string;
    readonly levelImage: string;
    readonly capitalChangeCooldown: number;
    readonly capitalChangeTreasuryCost: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._title = values["title"];
      this._description = values["description"];
      this._tooltip = values["tooltip"];
      this._effectBundle = values["effect_bundle"];
      this.armyCapProvided = values["army_cap_provided"];
      this.maximumArmyCap = values["maximum_army_cap"];
      this.navyCapProvided = values["navy_cap_provided"];
      this.maximumNavyCap = values["maximum_navy_cap"];
      this.retinueCapProvided = values["retinue_cap_provided"];
      this.maximumRetinueCap = values["maximum_retinue_cap"];
      this.governorCapProvided = values["governor_cap_provided"];
      this.maximumGovernorCap = values["maximum_governor_cap"];
      this.totalAgentCapProvided = values["total_agent_cap_provided"];
      this.maximumTotalAgentCap = values["maximum_total_agent_cap"];
      this.totalAssignmentCapProvided = values["total_assignment_cap_provided"];
      this.maximumTotalAssignmentCap = values["maximum_total_assignment_cap"];
      this.levelIcon = values["level_icon"];
      this.levelImage = values["level_image"];
      this.capitalChangeCooldown = values["capital_change_cooldown"];
      this.capitalChangeTreasuryCost = values["capital_change_treasury_cost"];
    }
    
    get title(): CampaignLocalisedStrings.Entry | undefined {
      const collection = <CampaignLocalisedStrings.Entry[]>this.collectionCache.getCollection(CampaignLocalisedStrings.KEY, CampaignLocalisedStrings.Entry);
      return collection.find(entry => entry.key === this._title);
    }
    
    get description(): CampaignLocalisedStrings.Entry | undefined {
      const collection = <CampaignLocalisedStrings.Entry[]>this.collectionCache.getCollection(CampaignLocalisedStrings.KEY, CampaignLocalisedStrings.Entry);
      return collection.find(entry => entry.key === this._description);
    }
    
    get tooltip(): CampaignLocalisedStrings.Entry | undefined {
      const collection = <CampaignLocalisedStrings.Entry[]>this.collectionCache.getCollection(CampaignLocalisedStrings.KEY, CampaignLocalisedStrings.Entry);
      return collection.find(entry => entry.key === this._tooltip);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default CampaignProgressionLevelDetails;
