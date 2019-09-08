
import { CollectionCache, CollectionKey } from "../../../common";
import { ResourceCosts } from "./ResourceCosts";
import { Resources } from "./Resources";

export namespace ResourceCostTradeResourceJunctions {
  export const KEY = new CollectionKey("resource_cost_trade_resource_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _resourceCost: string;
    readonly _tradeResource: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._resourceCost = values["resource_cost"];
      this._tradeResource = values["trade_resource"];
    }
    
    get resourceCost(): ResourceCosts.Entry | undefined {
      const collection = <ResourceCosts.Entry[]>this.collectionCache.getCollection(ResourceCosts.KEY, ResourceCosts.Entry);
      return collection.find(entry => entry.id === this._resourceCost);
    }
    
    get tradeResource(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._tradeResource);
    }
  }
}

export default ResourceCostTradeResourceJunctions;
