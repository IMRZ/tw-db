import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleUnitSets } from "./CustomBattleUnitSets";
import { MainUnits } from "./MainUnits";
export declare namespace CustomBattleUnitSetsToUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitSet: string;
        readonly _unitRecord: string;
        constructor(collectionCache: CollectionCache, values: any);
        get unitSet(): CustomBattleUnitSets.Entry | undefined;
        get unitRecord(): MainUnits.Entry | undefined;
    }
}
export default CustomBattleUnitSetsToUnits;
