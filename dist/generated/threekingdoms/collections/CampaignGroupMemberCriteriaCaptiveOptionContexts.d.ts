import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CaptiveOptionContexts } from "./CaptiveOptionContexts";
export declare namespace CampaignGroupMemberCriteriaCaptiveOptionContexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get value(): CaptiveOptionContexts.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaCaptiveOptionContexts;
