import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { CcpBenchmarkUnits } from "./CcpBenchmarkUnits";
export declare namespace CcpUnitsToBenchmarkUnitsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitKey: string;
        readonly _benchmarkUnit: string;
        constructor(collectionCache: CollectionCache, values: any);
        get unitKey(): MainUnits.Entry | undefined;
        get benchmarkUnit(): CcpBenchmarkUnits.Entry | undefined;
    }
}
export default CcpUnitsToBenchmarkUnitsJunctions;
