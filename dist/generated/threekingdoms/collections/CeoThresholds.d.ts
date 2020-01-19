import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
export declare namespace CeoThresholds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _ceo: string;
        readonly pointThresholdToActivate: number;
        readonly pointThesholdToDestroy: number;
        readonly startingPoints: number;
        readonly maxPoints: number;
        readonly resetsToStartingPointsWhenDeactivated: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get ceo(): Ceos.Entry | undefined;
    }
}
export default CeoThresholds;
