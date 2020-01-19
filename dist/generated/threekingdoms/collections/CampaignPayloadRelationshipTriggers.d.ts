import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
export declare namespace CampaignPayloadRelationshipTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _payload: string;
        readonly _triggerSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): CampaignPayloads.Entry | undefined;
        get triggerSet(): CharacterRelationshipTriggerSets.Entry | undefined;
    }
}
export default CampaignPayloadRelationshipTriggers;
