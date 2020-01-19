import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueSlotUpgradeTrees } from "./RetinueSlotUpgradeTrees";
import { RetinueSlotUpgradeSubtrees } from "./RetinueSlotUpgradeSubtrees";
export declare namespace RetinueSlotUpgradeTreeToSubtreeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _tree: string;
        readonly _subtree: string;
        readonly isLockedByDefault: boolean;
        readonly additionalCostSwitchingFromSubtree: number;
        readonly additionalTimeSwitchingFromSubtree: number;
        readonly mAdditionalCostSwitchingToSubtree: number;
        readonly mAdditionalTimeSwitchingToSubtree: number;
        constructor(collectionCache: CollectionCache, values: any);
        get tree(): RetinueSlotUpgradeTrees.Entry | undefined;
        get subtree(): RetinueSlotUpgradeSubtrees.Entry | undefined;
    }
}
export default RetinueSlotUpgradeTreeToSubtreeJunctions;
