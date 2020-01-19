
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDataStages } from "./CeoInitialDataStages";
import { CeoSpawners } from "./CeoSpawners";

export namespace CeoInitialDataActiveSpawners {
  export const KEY = new CollectionKey("ceo_initial_data_active_spawners");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _initialDataStage: string;
    readonly _spawner: string;
    readonly startingPoints: number;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._initialDataStage = values["initial_data_stage"];
      this._spawner = values["spawner"];
      this.startingPoints = values["starting_points"];
      this.autoId = values["auto_id"];
    }
    
    get initialDataStage(): CeoInitialDataStages.Entry | undefined {
      const collection = <CeoInitialDataStages.Entry[]>this.collectionCache.getCollection(CeoInitialDataStages.KEY, CeoInitialDataStages.Entry);
      return collection.find(entry => entry.key === this._initialDataStage);
    }
    
    get spawner(): CeoSpawners.Entry | undefined {
      const collection = <CeoSpawners.Entry[]>this.collectionCache.getCollection(CeoSpawners.KEY, CeoSpawners.Entry);
      return collection.find(entry => entry.key === this._spawner);
    }
  }
}

export default CeoInitialDataActiveSpawners;
