import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueSlotUpgradeTrees } from "./RetinueSlotUpgradeTrees";
import { RetinueSlotUpgradeSubtrees } from "./RetinueSlotUpgradeSubtrees";
import { RetinueSlotUpgradeNodes } from "./RetinueSlotUpgradeNodes";
export declare namespace RetinueSlotUpgradeTreeRestrictions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _tree: string;
        readonly _sourceSubtree: string;
        readonly _sourceSubtreeNode: string;
        readonly _targetSubtree: string;
        readonly _targetSubtreeNode: string;
        readonly locksConnection: boolean;
        readonly unlocksConnection: boolean;
        readonly id: number;
        constructor(collectionCache: CollectionCache, values: any);
        get tree(): RetinueSlotUpgradeTrees.Entry | undefined;
        get sourceSubtree(): RetinueSlotUpgradeSubtrees.Entry | undefined;
        get sourceSubtreeNode(): RetinueSlotUpgradeNodes.Entry | undefined;
        get targetSubtree(): RetinueSlotUpgradeSubtrees.Entry | undefined;
        get targetSubtreeNode(): RetinueSlotUpgradeNodes.Entry | undefined;
    }
}
export default RetinueSlotUpgradeTreeRestrictions;
