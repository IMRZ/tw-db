import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDatas } from "./CeoInitialDatas";
import { CeoInitialDataStages } from "./CeoInitialDataStages";
export declare namespace CeoInitialDataToStages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ceoInitialData: string;
        readonly stage: number;
        readonly _initialDataStage: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ceoInitialData(): CeoInitialDatas.Entry | undefined;
        get initialDataStage(): CeoInitialDataStages.Entry | undefined;
    }
}
export default CeoInitialDataToStages;
