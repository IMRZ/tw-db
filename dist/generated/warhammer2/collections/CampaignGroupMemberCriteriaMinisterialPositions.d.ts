import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { MinisterialPositions } from "./MinisterialPositions";
export declare namespace CampaignGroupMemberCriteriaMinisterialPositions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _ministerialPosition: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get ministerialPosition(): MinisterialPositions.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaMinisterialPositions;
