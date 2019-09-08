import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace CampaignGroupMembers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _group: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly group: CampaignGroups.Entry | undefined;
    }
}
export default CampaignGroupMembers;
