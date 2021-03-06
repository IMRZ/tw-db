import { CollectionCache, CollectionKey } from "../../../common";
import { PortraitTypes } from "./PortraitTypes";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
export declare namespace CultureSubcultureCharacterPortraits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _portraitType: string;
        readonly _culture: string;
        readonly _subculture: string;
        readonly _faction: string;
        readonly path: string;
        constructor(collectionCache: CollectionCache, values: any);
        get portraitType(): PortraitTypes.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default CultureSubcultureCharacterPortraits;
