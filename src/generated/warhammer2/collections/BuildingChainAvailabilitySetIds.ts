
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingChainAvailabilitySetIds {
  export const KEY = new CollectionKey("building_chain_availability_set_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default BuildingChainAvailabilitySetIds;
