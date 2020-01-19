import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAiPersonalities } from "./BattleAiPersonalities";
import { LandUnits } from "./LandUnits";
import { AiUsageGroups } from "./AiUsageGroups";
import { UnitSets } from "./UnitSets";
export declare namespace BattleAiUsageGroupPersonalityOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _personality: string;
        readonly _unit: string;
        readonly _override: string;
        readonly _unitSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get personality(): BattleAiPersonalities.Entry | undefined;
        get unit(): LandUnits.Entry | undefined;
        get override(): AiUsageGroups.Entry | undefined;
        get unitSet(): UnitSets.Entry | undefined;
    }
}
export default BattleAiUsageGroupPersonalityOverrides;
