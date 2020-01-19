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
        get resourceCost(): ResourceCosts.Entry | undefined;
        get tradeResource(): Resources.Entry | undefined;
    }
}
export default ResourceCostTradeResourceJunctions;
