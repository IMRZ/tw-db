import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { LandUnits } from "./LandUnits";
import { Variants } from "./Variants";
export declare namespace UnitVariants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly _faction: string;
        readonly _unit: string;
        readonly _variant: string;
        readonly unitCard: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get unit(): LandUnits.Entry | undefined;
        get variant(): Variants.Entry | undefined;
    }
}
export default UnitVariants;
