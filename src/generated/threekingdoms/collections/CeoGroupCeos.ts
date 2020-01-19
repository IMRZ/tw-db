
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoGroups } from "./CeoGroups";
import { Ceos } from "./Ceos";

export namespace CeoGroupCeos {
  export const KEY = new CollectionKey("ceo_group_ceos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceoGroup: string;
    readonly _ceo: string;
    readonly triggerWeighting: number;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceoGroup = values["ceo_group"];
      this._ceo = values["ceo"];
      this.triggerWeighting = values["trigger_weighting"];
      this.autoId = values["auto_id"];
    }
    
    get ceoGroup(): CeoGroups.Entry | undefined {
      const collection = <CeoGroups.Entry[]>this.collectionCache.getCollection(CeoGroups.KEY, CeoGroups.Entry);
      return collection.find(entry => entry.key === this._ceoGroup);
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
  }
}

export default CeoGroupCeos;
