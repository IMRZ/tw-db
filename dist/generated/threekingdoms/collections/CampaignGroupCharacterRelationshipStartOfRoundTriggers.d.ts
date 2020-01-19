import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
export declare namespace CampaignGroupCharacterRelationshipStartOfRoundTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _characterRelationshipTriggers: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get characterRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined;
    }
}
export default CampaignGroupCharacterRelationshipStartOfRoundTriggers;
