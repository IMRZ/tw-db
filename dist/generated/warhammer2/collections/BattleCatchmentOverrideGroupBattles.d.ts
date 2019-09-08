import { CollectionCache, CollectionKey } from "../../../common";
import { BattleCatchmentOverrideGroups } from "./BattleCatchmentOverrideGroups";
export declare namespace BattleCatchmentOverrideGroupBattles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly battleMapLocation: string;
        readonly catchmentName: string;
        readonly tileUpgrades: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly group: BattleCatchmentOverrideGroups.Entry | undefined;
    }
}
export default BattleCatchmentOverrideGroupBattles;
