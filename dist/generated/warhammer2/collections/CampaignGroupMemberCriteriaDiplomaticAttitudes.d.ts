import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { DiplomacyNegotiationAttitudes } from "./DiplomacyNegotiationAttitudes";
export declare namespace CampaignGroupMemberCriteriaDiplomaticAttitudes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _attitude: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly member: CampaignGroupMembers.Entry | undefined;
        readonly attitude: DiplomacyNegotiationAttitudes.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaDiplomaticAttitudes;
