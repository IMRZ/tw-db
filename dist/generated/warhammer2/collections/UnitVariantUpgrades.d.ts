import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { Ancillaries } from "./Ancillaries";
import { Variants } from "./Variants";
export declare namespace UnitVariantUpgrades {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _mainUnitKey: string;
        readonly _ancillaryPrimary: string;
        readonly _ancillarySecondary: string;
        readonly _variantName: string;
        readonly cost: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly mainUnitKey: MainUnits.Entry | undefined;
        readonly ancillaryPrimary: Ancillaries.Entry | undefined;
        readonly ancillarySecondary: Ancillaries.Entry | undefined;
        readonly variantName: Variants.Entry | undefined;
    }
}
export default UnitVariantUpgrades;
