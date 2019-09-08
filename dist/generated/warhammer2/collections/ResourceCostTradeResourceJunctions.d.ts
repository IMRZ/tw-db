import { CollectionCache, CollectionKey } from "../../../common";
import { ResourceCosts } from "./ResourceCosts";
import { Resources } from "./Resources";
export declare namespace ResourceCostTradeResourceJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _resourceCost: string;
        readonly _tradeResource: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly resourceCost: ResourceCosts.Entry | undefined;
        readonly tradeResource: Resources.Entry | undefined;
    }
}
export default ResourceCostTradeResourceJunctions;
