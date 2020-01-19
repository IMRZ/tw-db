import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { BattleResultTypes } from "./BattleResultTypes";
export declare namespace CampaignGroupMemberCriteriaBattleResultTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _battleResultType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get battleResultType(): BattleResultTypes.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaBattleResultTypes;
