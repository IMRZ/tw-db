import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnits } from "./LandUnits";
import { DynastyUpgrades } from "./DynastyUpgrades";
export declare namespace LandUnitsToDynastyUpgradesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _unit: string;
        readonly _upgrade: string;
        constructor(collectionCache: CollectionCache, values: any);
        get unit(): LandUnits.Entry | undefined;
        get upgrade(): DynastyUpgrades.Entry | undefined;
    }
}
export default LandUnitsToDynastyUpgradesJunctions;
