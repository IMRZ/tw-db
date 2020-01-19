import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CeoRarities } from "./CeoRarities";
export declare namespace CampaignGroupMemberCriteriaCeoRarities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _ceoRarity: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get ceoRarity(): CeoRarities.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaCeoRarities;
