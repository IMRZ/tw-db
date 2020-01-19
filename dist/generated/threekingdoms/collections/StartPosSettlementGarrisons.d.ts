import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosSettlements } from "./StartPosSettlements";
import { MainUnits } from "./MainUnits";
export declare namespace StartPosSettlementGarrisons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _settlement: number;
        readonly _unit: string;
        readonly soldiers: number;
        readonly unique: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get settlement(): StartPosSettlements.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
    }
}
export default StartPosSettlementGarrisons;
