import { CollectionCache, CollectionKey } from "../../../common";
import { Seasons } from "./Seasons";
export declare namespace LoadingScreenSeasonImages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _season: string;
        readonly imagePath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get season(): Seasons.Entry | undefined;
    }
}
export default LoadingScreenSeasonImages;
