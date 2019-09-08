import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
export declare namespace FactionBanners {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly symbol: string;
        readonly primaryRed: number;
        readonly primaryGreen: number;
        readonly primaryBlue: number;
        readonly secondaryRed: number;
        readonly secondaryGreen: number;
        readonly secondaryBlue: number;
        readonly tertiaryRed: number;
        readonly tertiaryGreen: number;
        readonly tertiaryBlue: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly key: Factions.Entry | undefined;
    }
}
export default FactionBanners;
