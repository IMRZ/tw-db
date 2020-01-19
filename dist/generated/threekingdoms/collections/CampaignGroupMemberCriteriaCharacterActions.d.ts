import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignCharacterActions } from "./CampaignCharacterActions";
export declare namespace CampaignGroupMemberCriteriaCharacterActions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _action: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get action(): CampaignCharacterActions.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaCharacterActions;
