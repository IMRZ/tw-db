import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAiPersonalities } from "./BattleAiPersonalities";
import { BattleAiParameters } from "./BattleAiParameters";
export declare namespace BattleAiParameterPersonalityOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _personality: string;
        readonly _parameter: string;
        readonly override: number;
        constructor(collectionCache: CollectionCache, values: any);
        get personality(): BattleAiPersonalities.Entry | undefined;
        get parameter(): BattleAiParameters.Entry | undefined;
    }
}
export default BattleAiParameterPersonalityOverrides;
