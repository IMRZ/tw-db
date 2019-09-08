
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { SlotSets } from "./SlotSets";

export namespace CampaignGroupSettlementOccupationOptionForeignSlots {
  export const KEY = new CollectionKey("campaign_group_settlement_occupation_option_foreign_slots");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _foreignSlotSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._foreignSlotSet = values["foreign_slot_set"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get foreignSlotSet(): SlotSets.Entry | undefined {
      const collection = <SlotSets.Entry[]>this.collectionCache.getCollection(SlotSets.KEY, SlotSets.Entry);
      return collection.find(entry => entry.key === this._foreignSlotSet);
    }
  }
}

export default CampaignGroupSettlementOccupationOptionForeignSlots;
