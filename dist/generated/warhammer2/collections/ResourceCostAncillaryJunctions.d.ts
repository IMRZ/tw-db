import { CollectionCache, CollectionKey } from "../../../common";
import { ResourceCosts } from "./ResourceCosts";
import { Ancillaries } from "./Ancillaries";
export declare namespace ResourceCostAncillaryJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _resourceCost: string;
        readonly _ancillary: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly resourceCost: ResourceCosts.Entry | undefined;
        readonly ancillary: Ancillaries.Entry | undefined;
    }
}
export default ResourceCostAncillaryJunctions;
