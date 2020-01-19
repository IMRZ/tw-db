import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDataStages } from "./CeoInitialDataStages";
import { CeoSpawners } from "./CeoSpawners";
export declare namespace CeoInitialDataActiveSpawners {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _initialDataStage: string;
        readonly _spawner: string;
        readonly startingPoints: number;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get initialDataStage(): CeoInitialDataStages.Entry | undefined;
        get spawner(): CeoSpawners.Entry | undefined;
    }
}
export default CeoInitialDataActiveSpawners;
