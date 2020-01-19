import { CollectionCache, CollectionKey } from "../../../common";
import { Provinces } from "./Provinces";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
export declare namespace ProvinceToEmergentFactionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _province: string;
        readonly _factionRecord: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        get province(): Provinces.Entry | undefined;
        get factionRecord(): Factions.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default ProvinceToEmergentFactionJunctions;
