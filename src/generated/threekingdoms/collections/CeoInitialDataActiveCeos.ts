
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDataStages } from "./CeoInitialDataStages";
import { Ceos } from "./Ceos";

export namespace CeoInitialDataActiveCeos {
  export const KEY = new CollectionKey("ceo_initial_data_active_ceos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _initialDataStage: string;
    readonly _activeCeo: string;
    readonly startingPointsDelta: number;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._initialDataStage = values["initial_data_stage"];
      this._activeCeo = values["active_ceo"];
      this.startingPointsDelta = values["starting_points_delta"];
      this.autoId = values["auto_id"];
    }
    
    get initialDataStage(): CeoInitialDataStages.Entry | undefined {
      const collection = <CeoInitialDataStages.Entry[]>this.collectionCache.getCollection(CeoInitialDataStages.KEY, CeoInitialDataStages.Entry);
      return collection.find(entry => entry.key === this._initialDataStage);
    }
    
    get activeCeo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._activeCeo);
    }
  }
}

export default CeoInitialDataActiveCeos;
