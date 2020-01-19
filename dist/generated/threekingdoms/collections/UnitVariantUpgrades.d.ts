import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Variants } from "./Variants";
export declare namespace UnitVariantUpgrades {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _mainUnitKey: string;
        readonly _variantName: string;
        readonly cost: number;
        constructor(collectionCache: CollectionCache, values: any);
        get mainUnitKey(): MainUnits.Entry | undefined;
        get variantName(): Variants.Entry | undefined;
    }
}
export default UnitVariantUpgrades;
