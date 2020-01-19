import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CharacterRelationshipSituationEffectSets } from "./CharacterRelationshipSituationEffectSets";
export declare namespace CampaignGroupCharacterRelationshipDiplomaticSituationEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _effectSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get effectSet(): CharacterRelationshipSituationEffectSets.Entry | undefined;
    }
}
export default CampaignGroupCharacterRelationshipDiplomaticSituationEffects;
