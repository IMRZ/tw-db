import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAiAbilitiesUsageTemplateNames } from "./BattleAiAbilitiesUsageTemplateNames";
import { BattleAiAbilitiesUsageParams } from "./BattleAiAbilitiesUsageParams";
export declare namespace BattleAiAbilitiesUsageTemplatesToParams {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _template: string;
        readonly _parameter: string;
        readonly weighting: number;
        constructor(collectionCache: CollectionCache, values: any);
        get template(): BattleAiAbilitiesUsageTemplateNames.Entry | undefined;
        get parameter(): BattleAiAbilitiesUsageParams.Entry | undefined;
    }
}
export default BattleAiAbilitiesUsageTemplatesToParams;
