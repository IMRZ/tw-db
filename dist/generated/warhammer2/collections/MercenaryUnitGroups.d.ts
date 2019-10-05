import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace MercenaryUnitGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _unitRecord: string;
        readonly maxCount: number;
        readonly maxReplenishPerTurn: number;
        readonly chanceToReplenish: number;
        readonly usePartialReplenishment: boolean;
        readonly replenishmentReason: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitRecord: MainUnits.Entry | undefined;
    }
}
export default MercenaryUnitGroups;
