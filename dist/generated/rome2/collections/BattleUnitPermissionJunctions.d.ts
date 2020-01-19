import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { BattleTypes } from "./BattleTypes";
export declare namespace BattleUnitPermissionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: string;
        readonly _battleType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get unit(): MainUnits.Entry | undefined;
        get battleType(): BattleTypes.Entry | undefined;
    }
}
export default BattleUnitPermissionJunctions;
