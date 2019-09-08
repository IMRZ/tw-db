import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingChains } from "./BuildingChains";
import { Slots } from "./Slots";
export declare namespace BuildingChainToSlots {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _chain: string;
        readonly _slot: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly chain: BuildingChains.Entry | undefined;
        readonly slot: Slots.Entry | undefined;
    }
}
export default BuildingChainToSlots;
