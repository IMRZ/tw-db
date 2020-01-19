import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDataStages } from "./CeoInitialDataStages";
import { Ceos } from "./Ceos";
export declare namespace CeoInitialDataActiveCeos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _initialDataStage: string;
        readonly _activeCeo: string;
        readonly startingPointsDelta: number;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get initialDataStage(): CeoInitialDataStages.Entry | undefined;
        get activeCeo(): Ceos.Entry | undefined;
    }
}
export default CeoInitialDataActiveCeos;
