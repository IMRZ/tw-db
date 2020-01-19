import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueSlotUpgradeSubtrees } from "./RetinueSlotUpgradeSubtrees";
import { RetinueSlotUpgradeNodes } from "./RetinueSlotUpgradeNodes";
export declare namespace RetinueSlotUpgradeSubtreeToNodeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subtree: string;
        readonly _node: string;
        constructor(collectionCache: CollectionCache, values: any);
        get subtree(): RetinueSlotUpgradeSubtrees.Entry | undefined;
        get node(): RetinueSlotUpgradeNodes.Entry | undefined;
    }
}
export default RetinueSlotUpgradeSubtreeToNodeJunctions;
