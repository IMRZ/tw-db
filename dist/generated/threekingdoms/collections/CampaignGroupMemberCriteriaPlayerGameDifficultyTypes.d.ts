import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { PlayerGameDifficultyTypes } from "./PlayerGameDifficultyTypes";
export declare namespace CampaignGroupMemberCriteriaPlayerGameDifficultyTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _playerGameDifficultyType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get playerGameDifficultyType(): PlayerGameDifficultyTypes.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaPlayerGameDifficultyTypes;
