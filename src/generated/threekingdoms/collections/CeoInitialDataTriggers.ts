
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDataStages } from "./CeoInitialDataStages";
import { CeoTriggers } from "./CeoTriggers";

export namespace CeoInitialDataTriggers {
  export const KEY = new CollectionKey("ceo_initial_data_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly autoId: number;
    readonly _initialDataStage: string;
    readonly _trigger: string;
    readonly processOrderPriority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.autoId = values["auto_id"];
      this._initialDataStage = values["initial_data_stage"];
      this._trigger = values["trigger"];
      this.processOrderPriority = values["process_order_priority"];
    }
    
    get initialDataStage(): CeoInitialDataStages.Entry | undefined {
      const collection = <CeoInitialDataStages.Entry[]>this.collectionCache.getCollection(CeoInitialDataStages.KEY, CeoInitialDataStages.Entry);
      return collection.find(entry => entry.key === this._initialDataStage);
    }
    
    get trigger(): CeoTriggers.Entry | undefined {
      const collection = <CeoTriggers.Entry[]>this.collectionCache.getCollection(CeoTriggers.KEY, CeoTriggers.Entry);
      return collection.find(entry => entry.key === this._trigger);
    }
  }
}

export default CeoInitialDataTriggers;
