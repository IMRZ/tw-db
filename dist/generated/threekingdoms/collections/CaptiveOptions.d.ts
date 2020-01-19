import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionOutcomes } from "./CaptiveOptionOutcomes";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
import { CaptiveOptionEffectSets } from "./CaptiveOptionEffectSets";
import { AudioUiCategories } from "./AudioUiCategories";
export declare namespace CaptiveOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _outcome: string;
        readonly _diplomacyEvent: string;
        readonly _relationshipTriggers: string;
        readonly _postOutcomeRelationshipTriggers: string;
        readonly _effectSet: string;
        readonly localisedOptionText: string;
        readonly stealCeo: boolean;
        readonly stealthWealth: boolean;
        readonly _soundCategoryKey: string;
        readonly voSoundEvent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get outcome(): CaptiveOptionOutcomes.Entry | undefined;
        get diplomacyEvent(): CaiDiplomacyEvents.Entry | undefined;
        get relationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined;
        get postOutcomeRelationshipTriggers(): CharacterRelationshipTriggerSets.Entry | undefined;
        get effectSet(): CaptiveOptionEffectSets.Entry | undefined;
        get soundCategoryKey(): AudioUiCategories.Entry | undefined;
    }
}
export default CaptiveOptions;
