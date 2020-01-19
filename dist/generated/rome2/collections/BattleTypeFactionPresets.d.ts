import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { BattleTypeSetupLimits } from "./BattleTypeSetupLimits";
export declare namespace BattleTypeFactionPresets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _weightingType: number;
        readonly id: number;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get weightingType(): BattleTypeSetupLimits.Entry | undefined;
    }
}
export default BattleTypeFactionPresets;
