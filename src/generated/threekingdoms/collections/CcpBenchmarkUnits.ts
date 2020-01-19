
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace CcpBenchmarkUnits {
  export const KEY = new CollectionKey("ccp_benchmark_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly benchmarkCategory: string;
    readonly _benchmarkUnit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.benchmarkCategory = values["benchmark_category"];
      this._benchmarkUnit = values["benchmark_unit"];
    }
    
    get benchmarkUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._benchmarkUnit);
    }
  }
}

export default CcpBenchmarkUnits;
