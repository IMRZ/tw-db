
import { CollectionCache, CollectionKey } from "../../../common";
import { ResourceCosts } from "./ResourceCosts";
import { Ancillaries } from "./Ancillaries";

export namespace ResourceCostAncillaryJunctions {
  export const KEY = new CollectionKey("resource_cost_ancillary_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _resourceCost: string;
    readonly _ancillary: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._resourceCost = values["resource_cost"];
      this._ancillary = values["ancillary"];
    }
    
    get resourceCost(): ResourceCosts.Entry | undefined {
      const collection = <ResourceCosts.Entry[]>this.collectionCache.getCollection(ResourceCosts.KEY, ResourceCosts.Entry);
      return collection.find(entry => entry.id === this._resourceCost);
    }
    
    get ancillary(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillary);
    }
  }
}

export default ResourceCostAncillaryJunctions;
