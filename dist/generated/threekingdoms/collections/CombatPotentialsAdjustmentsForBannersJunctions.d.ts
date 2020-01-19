import { CollectionCache, CollectionKey } from "../../../common";
import { CombatPotentialsTypes } from "./CombatPotentialsTypes";
import { CombatPotentialsAdjustmentTypes } from "./CombatPotentialsAdjustmentTypes";
import { Banners } from "./Banners";
export declare namespace CombatPotentialsAdjustmentsForBannersJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _combatPotentialType: string;
        readonly _combatPotentialAdjustmentType: string;
        readonly _banner: string;
        readonly absoluteAdjustment: number;
        readonly relativeAdjustment: number;
        constructor(collectionCache: CollectionCache, values: any);
        get combatPotentialType(): CombatPotentialsTypes.Entry | undefined;
        get combatPotentialAdjustmentType(): CombatPotentialsAdjustmentTypes.Entry | undefined;
        get banner(): Banners.Entry | undefined;
    }
}
export default CombatPotentialsAdjustmentsForBannersJunctions;
