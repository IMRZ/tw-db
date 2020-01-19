import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
export declare namespace FactionUniformColours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionName: string;
        readonly primaryColourR: number;
        readonly primaryColourG: number;
        readonly primaryColourB: number;
        readonly secondaryColourR: number;
        readonly secondaryColourG: number;
        readonly secondaryColourB: number;
        readonly tertiaryColourR: number;
        readonly tertiaryColourG: number;
        readonly tertiaryColourB: number;
        constructor(collectionCache: CollectionCache, values: any);
        get factionName(): Factions.Entry | undefined;
    }
}
export default FactionUniformColours;
