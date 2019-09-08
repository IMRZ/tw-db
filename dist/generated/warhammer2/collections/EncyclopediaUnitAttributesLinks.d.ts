import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAttributes } from "./UnitAttributes";
import { EncyclopediaPages } from "./EncyclopediaPages";
import { EncyclopediaBlocks } from "./EncyclopediaBlocks";
export declare namespace EncyclopediaUnitAttributesLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unitAttribute: string;
        readonly _manualPage: string;
        readonly _manualBlock: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly unitAttribute: UnitAttributes.Entry | undefined;
        readonly manualPage: EncyclopediaPages.Entry | undefined;
        readonly manualBlock: EncyclopediaBlocks.Entry | undefined;
    }
}
export default EncyclopediaUnitAttributesLinks;
