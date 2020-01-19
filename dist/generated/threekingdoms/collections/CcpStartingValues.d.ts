import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace CcpStartingValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitKey: string;
        readonly startingCcpValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        get unitKey(): MainUnits.Entry | undefined;
    }
}
export default CcpStartingValues;
