import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { GameModes } from "./GameModes";
export declare namespace CampaignGroupMemberCriteriaGameModes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _gameMode: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get gameMode(): GameModes.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaGameModes;
