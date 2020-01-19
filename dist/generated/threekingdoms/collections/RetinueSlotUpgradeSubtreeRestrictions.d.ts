import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueSlotUpgradeSubtrees } from "./RetinueSlotUpgradeSubtrees";
import { RetinueSlotUpgradeNodes } from "./RetinueSlotUpgradeNodes";
export declare namespace RetinueSlotUpgradeSubtreeRestrictions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _subtree: string;
        readonly _sourceNode: string;
        readonly _targetNode: string;
        readonly locksConnection: boolean;
        readonly unlocksConnection: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get subtree(): RetinueSlotUpgradeSubtrees.Entry | undefined;
        get sourceNode(): RetinueSlotUpgradeNodes.Entry | undefined;
        get targetNode(): RetinueSlotUpgradeNodes.Entry | undefined;
    }
}
export default RetinueSlotUpgradeSubtreeRestrictions;
