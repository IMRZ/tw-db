
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoGroups } from "./CeoGroups";
import { CeoSpawners } from "./CeoSpawners";

export namespace CeoGroupSpawners {
  export const KEY = new CollectionKey("ceo_group_spawners");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceoGroup: string;
    readonly _ceoSpawner: string;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceoGroup = values["ceo_group"];
      this._ceoSpawner = values["ceo_spawner"];
      this.autoId = values["auto_id"];
    }
    
    get ceoGroup(): CeoGroups.Entry | undefined {
      const collection = <CeoGroups.Entry[]>this.collectionCache.getCollection(CeoGroups.KEY, CeoGroups.Entry);
      return collection.find(entry => entry.key === this._ceoGroup);
    }
    
    get ceoSpawner(): CeoSpawners.Entry | undefined {
      const collection = <CeoSpawners.Entry[]>this.collectionCache.getCollection(CeoSpawners.KEY, CeoSpawners.Entry);
      return collection.find(entry => entry.key === this._ceoSpawner);
    }
  }
}

export default CeoGroupSpawners;
