import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { CharacterRelationshipTriggerSets } from "./CharacterRelationshipTriggerSets";
export declare namespace StartPosCharacterRelationshipTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _source: number;
        readonly _target: number;
        readonly _triggers: string;
        constructor(collectionCache: CollectionCache, values: any);
        get source(): StartPosCharacters.Entry | undefined;
        get target(): StartPosCharacters.Entry | undefined;
        get triggers(): CharacterRelationshipTriggerSets.Entry | undefined;
    }
}
export default StartPosCharacterRelationshipTriggers;
