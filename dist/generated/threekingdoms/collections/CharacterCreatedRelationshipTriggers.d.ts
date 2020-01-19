import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
export declare namespace CharacterCreatedRelationshipTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _sourceTemplate: string;
        readonly _targetTemplate: string;
        readonly _triggers: string;
        constructor(collectionCache: CollectionCache, values: any);
        get sourceTemplate(): CharacterGenerationTemplates.Entry | undefined;
        get targetTemplate(): CharacterGenerationTemplates.Entry | undefined;
        get triggers(): CharacterRelationshipTriggerSets.Entry | undefined;
    }
}
export default CharacterCreatedRelationshipTriggers;
