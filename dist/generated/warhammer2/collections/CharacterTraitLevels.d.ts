import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterTraits } from "./CharacterTraits";
export declare namespace CharacterTraitLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onscreenName: string;
        readonly _trait: string;
        readonly level: number;
        readonly thresholdPoints: number;
        readonly colourText: string;
        readonly explanationText: string;
        readonly removalText: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly trait: CharacterTraits.Entry | undefined;
    }
}
export default CharacterTraitLevels;
