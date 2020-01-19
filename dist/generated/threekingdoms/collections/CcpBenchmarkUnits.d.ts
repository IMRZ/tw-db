import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace CcpBenchmarkUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly benchmarkCategory: string;
        readonly _benchmarkUnit: string;
        constructor(collectionCache: CollectionCache, values: any);
        get benchmarkUnit(): MainUnits.Entry | undefined;
    }
}
export default CcpBenchmarkUnits;
