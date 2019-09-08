import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { SlotSets } from "./SlotSets";
export declare namespace CampaignGroupSettlementOccupationOptionForeignSlots {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _foreignSlotSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly foreignSlotSet: SlotSets.Entry | undefined;
    }
}
export default CampaignGroupSettlementOccupationOptionForeignSlots;
