import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { AudioVoActors } from "./AudioVoActors";
export declare namespace CampaignGroupMemberCriteriaVoActors {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _voActor: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get voActor(): AudioVoActors.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaVoActors;
