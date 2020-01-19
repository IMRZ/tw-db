import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { AudioCultures } from "./AudioCultures";
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
        readonly _audioCultureOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        get culture(): Cultures.Entry | undefined;
        get audioCultureOverride(): AudioCultures.Entry | undefined;
    }
}
export default CulturesSubcultures;
