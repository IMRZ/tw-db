import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleLoadouts } from "./CustomBattleLoadouts";
import { CustomBattleUnitSets } from "./CustomBattleUnitSets";
export declare namespace CustomBattleLoadoutsToUnitSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _loadout: string;
        readonly _unitSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get loadout(): CustomBattleLoadouts.Entry | undefined;
        get unitSet(): CustomBattleUnitSets.Entry | undefined;
    }
}
export default CustomBattleLoadoutsToUnitSets;
