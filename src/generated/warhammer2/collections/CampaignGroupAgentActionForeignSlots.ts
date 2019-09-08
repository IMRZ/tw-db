
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { SlotSets } from "./SlotSets";

export namespace CampaignGroupAgentActionForeignSlots {
  export const KEY = new CollectionKey("campaign_group_agent_action_foreign_slots");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _slotSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._slotSet = values["slot_set"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get slotSet(): SlotSets.Entry | undefined {
      const collection = <SlotSets.Entry[]>this.collectionCache.getCollection(SlotSets.KEY, SlotSets.Entry);
      return collection.find(entry => entry.key === this._slotSet);
    }
  }
}

export default CampaignGroupAgentActionForeignSlots;
