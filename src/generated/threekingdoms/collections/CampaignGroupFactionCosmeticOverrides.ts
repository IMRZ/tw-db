
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignGroupFactionCosmeticOverrides {
  export const KEY = new CollectionKey("campaign_group_faction_cosmetic_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly name: string;
    readonly useFactionLeaderName: boolean;
    readonly campaignFlagPath: string;
    readonly battleFlagPath: string;
    readonly battleFlagPathHistorical: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this.name = values["name"];
      this.useFactionLeaderName = !!values["use_faction_leader_name"];
      this.campaignFlagPath = values["campaign_flag_path"];
      this.battleFlagPath = values["battle_flag_path"];
      this.battleFlagPathHistorical = values["battle_flag_path_historical"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
  }
}

export default CampaignGroupFactionCosmeticOverrides;
