import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { UnitSets } from "./UnitSets";
export declare namespace CampaignGroupMemberCriteriaUnitSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _unitSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get unitSet(): UnitSets.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaUnitSets;
