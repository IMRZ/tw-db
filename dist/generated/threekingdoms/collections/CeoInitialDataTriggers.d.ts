import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDataStages } from "./CeoInitialDataStages";
import { CeoTriggers } from "./CeoTriggers";
export declare namespace CeoInitialDataTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly autoId: number;
        readonly _initialDataStage: string;
        readonly _trigger: string;
        readonly processOrderPriority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get initialDataStage(): CeoInitialDataStages.Entry | undefined;
        get trigger(): CeoTriggers.Entry | undefined;
    }
}
export default CeoInitialDataTriggers;
