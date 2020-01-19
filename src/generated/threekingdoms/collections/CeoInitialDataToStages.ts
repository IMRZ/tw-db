
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDatas } from "./CeoInitialDatas";
import { CeoInitialDataStages } from "./CeoInitialDataStages";

export namespace CeoInitialDataToStages {
  export const KEY = new CollectionKey("ceo_initial_data_to_stages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceoInitialData: string;
    readonly stage: number;
    readonly _initialDataStage: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceoInitialData = values["ceo_initial_data"];
      this.stage = values["stage"];
      this._initialDataStage = values["initial_data_stage"];
    }
    
    get ceoInitialData(): CeoInitialDatas.Entry | undefined {
      const collection = <CeoInitialDatas.Entry[]>this.collectionCache.getCollection(CeoInitialDatas.KEY, CeoInitialDatas.Entry);
      return collection.find(entry => entry.key === this._ceoInitialData);
    }
    
    get initialDataStage(): CeoInitialDataStages.Entry | undefined {
      const collection = <CeoInitialDataStages.Entry[]>this.collectionCache.getCollection(CeoInitialDataStages.KEY, CeoInitialDataStages.Entry);
      return collection.find(entry => entry.key === this._initialDataStage);
    }
  }
}

export default CeoInitialDataToStages;
