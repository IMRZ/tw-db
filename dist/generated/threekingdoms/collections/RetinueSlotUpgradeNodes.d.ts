import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace RetinueSlotUpgradeNodes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _unit: string;
        readonly isLockedByDefault: boolean;
        readonly additionalCostSwitchingFromNode: number;
        readonly additionalTimeSwitchingFromNode: number;
        readonly additionalCostSwitchingToNode: number;
        readonly additionalTimeSwitchingToNode: number;
        constructor(collectionCache: CollectionCache, values: any);
        get unit(): MainUnits.Entry | undefined;
    }
}
export default RetinueSlotUpgradeNodes;
