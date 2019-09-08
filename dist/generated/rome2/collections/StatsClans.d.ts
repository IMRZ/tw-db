import { CollectionCache, CollectionKey } from "../../../common";
import { RandomLocalisationStrings } from "./RandomLocalisationStrings";
export declare namespace StatsClans {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly public: boolean;
        readonly _label: string;
        readonly ladder: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly label: RandomLocalisationStrings.Entry | undefined;
    }
}
export default StatsClans;
