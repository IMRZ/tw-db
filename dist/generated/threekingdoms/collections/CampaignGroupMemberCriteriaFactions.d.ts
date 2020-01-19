import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Factions } from "./Factions";
import { CampaignGroupMemberCriteriaFactionContexts } from "./CampaignGroupMemberCriteriaFactionContexts";
export declare namespace CampaignGroupMemberCriteriaFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _faction: string;
        readonly _context: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaFactionContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaFactions;
