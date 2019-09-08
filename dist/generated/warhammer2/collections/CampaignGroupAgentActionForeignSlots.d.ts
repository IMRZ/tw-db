import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { SlotSets } from "./SlotSets";
export declare namespace CampaignGroupAgentActionForeignSlots {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _slotSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly slotSet: SlotSets.Entry | undefined;
    }
}
export default CampaignGroupAgentActionForeignSlots;
