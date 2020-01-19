import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
export declare namespace CulturesSubcultures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly subculture: string;
        readonly _culture: string;
        readonly index: number;
        readonly name: string;
        readonly confederationScreenName: string;
        readonly confederationSummaryName: string;
        readonly audioStateOverride: string;
        readonly audioRtpcOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        get culture(): Cultures.Entry | undefined;
    }
}
export default CulturesSubcultures;
