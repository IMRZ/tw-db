import { CollectionCache, CollectionKey } from "../../../common";
import { CommodityUnitNames } from "./CommodityUnitNames";
import { Slots } from "./Slots";
export declare namespace Resources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly iconFilepath: string;
        readonly key: string;
        readonly onscreenText: string;
        readonly _unit: string;
        readonly _slotBed: string;
        readonly tradeValue: number;
        readonly strategicValue: number;
        readonly description: string;
        readonly longDescription: string;
        readonly inEncyclopedia: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get unit(): CommodityUnitNames.Entry | undefined;
        get slotBed(): Slots.Entry | undefined;
    }
}
export default Resources;
