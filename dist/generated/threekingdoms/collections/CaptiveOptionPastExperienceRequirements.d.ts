import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionRequirements } from "./CaptiveOptionRequirements";
import { PastExperienceMemoryTypes } from "./PastExperienceMemoryTypes";
export declare namespace CaptiveOptionPastExperienceRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _captiveOptionRequirements: string;
        readonly _pastExperience: string;
        readonly invalidIfPresent: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get captiveOptionRequirements(): CaptiveOptionRequirements.Entry | undefined;
        get pastExperience(): PastExperienceMemoryTypes.Entry | undefined;
    }
}
export default CaptiveOptionPastExperienceRequirements;
