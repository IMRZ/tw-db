import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FactionUniformColours {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionName: any;
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
    }
}
export default FactionUniformColours;
