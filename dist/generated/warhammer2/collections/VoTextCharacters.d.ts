import { CollectionCache, CollectionKey } from "../../../common";
import { VoTexts } from "./VoTexts";
import { VoCharacters } from "./VoCharacters";
export declare namespace VoTextCharacters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _voText: number;
        readonly _voCharacter: number;
        constructor(collectionCache: CollectionCache, values: any);
        get voText(): VoTexts.Entry | undefined;
        get voCharacter(): VoCharacters.Entry | undefined;
    }
}
export default VoTextCharacters;
