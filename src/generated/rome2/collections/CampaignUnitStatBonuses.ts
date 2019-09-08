
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignUnitStatBonuses {
  export const KEY = new CollectionKey("campaign_unit_stat_bonuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly bonus: string;
    readonly level: number;
    readonly threshold: number;
    readonly description: string;
    readonly iconPath: string;
    readonly upgradeCostNew: number;
    readonly upgradeCostFromPreviousLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.bonus = values["bonus"];
      this.level = values["level"];
      this.threshold = values["threshold"];
      this.description = values["description"];
      this.iconPath = values["icon_path"];
      this.upgradeCostNew = values["upgrade_cost_new"];
      this.upgradeCostFromPreviousLevel = values["upgrade_cost_from_previous_level"];
    }
    
  }
}

export default CampaignUnitStatBonuses;
