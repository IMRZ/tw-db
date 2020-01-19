import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
export declare namespace StartPosNonCommandingGenerals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _nonCommandingGeneral: number;
        readonly _generalCommandingForce: number;
        constructor(collectionCache: CollectionCache, values: any);
        get nonCommandingGeneral(): StartPosCharacters.Entry | undefined;
        get generalCommandingForce(): StartPosCharacters.Entry | undefined;
    }
}
export default StartPosNonCommandingGenerals;
