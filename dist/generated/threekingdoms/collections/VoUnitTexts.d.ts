import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { Factions } from "./Factions";
export declare namespace VoUnitTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _culture: string;
        readonly _faction: string;
        readonly text: string;
        constructor(collectionCache: CollectionCache, values: any);
        get culture(): Cultures.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default VoUnitTexts;
