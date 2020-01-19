import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
export declare namespace CampaignDiplomacyTreatyComponentCharacterRelationshipTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _diplomacyTreatyComponent: string;
        readonly _characterRelationshipTriggers: string;
        constructor(collectionCache: CollectionCache, values: any);
        get diplomacyTreatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get characterRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentCharacterRelationshipTriggers;
