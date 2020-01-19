
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { MercenaryRetinueFactionGroups } from "./MercenaryRetinueFactionGroups";

export namespace MercenaryRetinueCampaignGroupsToFactionGroupJunctions {
  export const KEY = new CollectionKey("mercenary_retinue_campaign_groups_to_faction_group_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly autoId: number;
    readonly _campaignGroup: string;
    readonly _factionGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.autoId = values["auto_id"];
      this._campaignGroup = values["campaign_group"];
      this._factionGroup = values["faction_group"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get factionGroup(): MercenaryRetinueFactionGroups.Entry | undefined {
      const collection = <MercenaryRetinueFactionGroups.Entry[]>this.collectionCache.getCollection(MercenaryRetinueFactionGroups.KEY, MercenaryRetinueFactionGroups.Entry);
      return collection.find(entry => entry.key === this._factionGroup);
    }
  }
}

export default MercenaryRetinueCampaignGroupsToFactionGroupJunctions;
