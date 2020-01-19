import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterTraits } from "./CharacterTraits";
import { Technologies } from "./Technologies";
export declare namespace CharacterTraitLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly _trait: string;
        readonly level: number;
        readonly thresholdPoints: number;
        readonly epithetText: string;
        readonly gainText: string;
        readonly effectText: string;
        readonly colourText: string;
        readonly explanationText: string;
        readonly removalText: string;
        readonly _enabledByTech: string;
        constructor(collectionCache: CollectionCache, values: any);
        get trait(): CharacterTraits.Entry | undefined;
        get enabledByTech(): Technologies.Entry | undefined;
    }
}
export default CharacterTraitLevels;
