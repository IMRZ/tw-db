
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignMapTooltipStatuses } from "./CampaignMapTooltipStatuses";

export namespace CampaignSeaRegionControlStatuses {
  export const KEY = new CollectionKey("campaign_sea_region_control_statuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly controlStatus: string;
    readonly _campaignGroup: string;
    readonly gdpTradePiracyPercentageModifier: number;
    readonly baseReplenishmentPercentageModifier: number;
    readonly additionalGarrisonedReplenishmentPercentageModifier: number;
    readonly additionalRecruitableReplenishmentPercentageModifier: number;
    readonly recruitmentCostPercentageModifier: number;
    readonly tooltip: string;
    readonly receivesFactionalReplenishmentBonusValues: boolean;
    readonly foreignSoilMoraleEffect: number;
    readonly _tooltipStatus: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.controlStatus = values["control_status"];
      this._campaignGroup = values["campaign_group"];
      this.gdpTradePiracyPercentageModifier = values["gdp_trade_piracy_percentage_modifier"];
      this.baseReplenishmentPercentageModifier = values["base_replenishment_percentage_modifier"];
      this.additionalGarrisonedReplenishmentPercentageModifier = values["additional_garrisoned_replenishment_percentage_modifier"];
      this.additionalRecruitableReplenishmentPercentageModifier = values["additional_recruitable_replenishment_percentage_modifier"];
      this.recruitmentCostPercentageModifier = values["recruitment_cost_percentage_modifier"];
      this.tooltip = values["tooltip"];
      this.receivesFactionalReplenishmentBonusValues = !!values["receives_factional_replenishment_bonus_values"];
      this.foreignSoilMoraleEffect = values["foreign_soil_morale_effect"];
      this._tooltipStatus = values["tooltip_status"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get tooltipStatus(): CampaignMapTooltipStatuses.Entry | undefined {
      const collection = <CampaignMapTooltipStatuses.Entry[]>this.collectionCache.getCollection(CampaignMapTooltipStatuses.KEY, CampaignMapTooltipStatuses.Entry);
      return collection.find(entry => entry.status === this._tooltipStatus);
    }
  }
}

export default CampaignSeaRegionControlStatuses;
