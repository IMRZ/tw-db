import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { Factions } from "./Factions";
import { PastExperienceReasons } from "./PastExperienceReasons";
export declare namespace CharacterCreatedPastExperiences {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _sourceTemplate: string;
        readonly _targetFaction: string;
        readonly _memory: string;
        constructor(collectionCache: CollectionCache, values: any);
        get sourceTemplate(): CharacterGenerationTemplates.Entry | undefined;
        get targetFaction(): Factions.Entry | undefined;
        get memory(): PastExperienceReasons.Entry | undefined;
    }
}
export default CharacterCreatedPastExperiences;
