import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { Factions } from "./Factions";
export declare namespace VoSpeechTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _culture: string;
        readonly _faction: string;
        readonly text: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly culture: Cultures.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
    }
}
export default VoSpeechTexts;