import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
export declare namespace UnitBannerUnitHeightOffsets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitRecord: string;
        readonly heightOffset: number;
        readonly campaignHeightOffset: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitRecord: MainUnits.Entry | undefined;
    }
}
export default UnitBannerUnitHeightOffsets;
