import { CollectionCache, CollectionKey } from "../../../common";
import { Retinues } from "./Retinues";
import { MainUnits } from "./MainUnits";
import { Campaigns } from "./Campaigns";
export declare namespace RetinueSlotInitialUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _retinue: string;
        readonly slotIndex: number;
        readonly _initialUnitRecord: string;
        readonly _campaign: string;
        constructor(collectionCache: CollectionCache, values: any);
        get retinue(): Retinues.Entry | undefined;
        get initialUnitRecord(): MainUnits.Entry | undefined;
        get campaign(): Campaigns.Entry | undefined;
    }
}
export default RetinueSlotInitialUnits;
