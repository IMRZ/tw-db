import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CharacterRelationships } from "./CharacterRelationships";
export declare namespace CampaignGroupMemberCriteriaCharacterRelationships {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _relationship: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get relationship(): CharacterRelationships.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaCharacterRelationships;
