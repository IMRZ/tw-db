
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignUnitStatBonusTypes } from "./CampaignUnitStatBonusTypes";

export namespace CampaignUnitStatBonuses {
  export const KEY = new CollectionKey("campaign_unit_stat_bonuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _bonus: string;
    readonly level: number;
    readonly threshold: number;
    readonly description: string;
    readonly iconPath: string;
    readonly upgradeCostNew: number;
    readonly upgradeCostFromPreviousLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._bonus = values["bonus"];
      this.level = values["level"];
      this.threshold = values["threshold"];
      this.description = values["description"];
      this.iconPath = values["icon_path"];
      this.upgradeCostNew = values["upgrade_cost_new"];
      this.upgradeCostFromPreviousLevel = values["upgrade_cost_from_previous_level"];
    }
    
    get bonus(): CampaignUnitStatBonusTypes.Entry | undefined {
      const collection = <CampaignUnitStatBonusTypes.Entry[]>this.collectionCache.getCollection(CampaignUnitStatBonusTypes.KEY, CampaignUnitStatBonusTypes.Entry);
      return collection.find(entry => entry.key === this._bonus);
    }
  }
}

export default CampaignUnitStatBonuses;
