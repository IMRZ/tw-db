import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
export declare namespace FertilityLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaign: string;
        readonly level: number;
        readonly localisedName: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default FertilityLevels;
