import { CollectionCache, CollectionKey } from "../../../common";
import { CommodityUnitNames } from "./CommodityUnitNames";
export declare namespace Resources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly iconFilepath: string;
        readonly key: string;
        readonly onscreenText: string;
        readonly _unit: string;
        readonly tradeValue: number;
        readonly strategicValue: number;
        readonly description: string;
        readonly longDescription: string;
        readonly inEncyclopedia: boolean;
        readonly showOnCityInfobar: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unit: CommodityUnitNames.Entry | undefined;
    }
}
export default Resources;
