import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { AgentWeightedSelectionSets } from "./AgentWeightedSelectionSets";
export declare namespace AgentWeightedSelectionSetGroupLookups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _selectionSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get selectionSet(): AgentWeightedSelectionSets.Entry | undefined;
    }
}
export default AgentWeightedSelectionSetGroupLookups;
