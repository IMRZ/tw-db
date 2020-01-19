
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { CcpBenchmarkUnits } from "./CcpBenchmarkUnits";

export namespace CcpUnitsToBenchmarkUnitsJunctions {
  export const KEY = new CollectionKey("ccp_units_to_benchmark_units_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitKey: string;
    readonly _benchmarkUnit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitKey = values["unit_key"];
      this._benchmarkUnit = values["benchmark_unit"];
    }
    
    get unitKey(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitKey);
    }
    
    get benchmarkUnit(): CcpBenchmarkUnits.Entry | undefined {
      const collection = <CcpBenchmarkUnits.Entry[]>this.collectionCache.getCollection(CcpBenchmarkUnits.KEY, CcpBenchmarkUnits.Entry);
      return collection.find(entry => entry.benchmarkCategory === this._benchmarkUnit);
    }
  }
}

export default CcpUnitsToBenchmarkUnitsJunctions;
