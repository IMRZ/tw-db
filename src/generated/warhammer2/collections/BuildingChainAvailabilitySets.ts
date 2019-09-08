
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingChainAvailabilitySetIds } from "./BuildingChainAvailabilitySetIds";
import { BuildingChains } from "./BuildingChains";

export namespace BuildingChainAvailabilitySets {
  export const KEY = new CollectionKey("building_chain_availability_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _id: string;
    readonly _buildingChain: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._id = values["id"];
      this._buildingChain = values["building_chain"];
    }
    
    get id(): BuildingChainAvailabilitySetIds.Entry | undefined {
      const collection = <BuildingChainAvailabilitySetIds.Entry[]>this.collectionCache.getCollection(BuildingChainAvailabilitySetIds.KEY, BuildingChainAvailabilitySetIds.Entry);
      return collection.find(entry => entry.id === this._id);
    }
    
    get buildingChain(): BuildingChains.Entry | undefined {
      const collection = <BuildingChains.Entry[]>this.collectionCache.getCollection(BuildingChains.KEY, BuildingChains.Entry);
      return collection.find(entry => entry.key === this._buildingChain);
    }
  }
}

export default BuildingChainAvailabilitySets;
