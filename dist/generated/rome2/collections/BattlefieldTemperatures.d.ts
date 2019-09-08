import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
import { Seasons } from "./Seasons";
export declare namespace BattlefieldTemperatures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _climate: string;
        readonly _season: string;
        readonly temperature: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly climate: Climates.Entry | undefined;
        readonly season: Seasons.Entry | undefined;
    }
}
export default BattlefieldTemperatures;
