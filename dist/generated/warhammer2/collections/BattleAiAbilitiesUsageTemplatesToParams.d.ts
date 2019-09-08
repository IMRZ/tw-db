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
        readonly template: BattleAiAbilitiesUsageTemplateNames.Entry | undefined;
        readonly parameter: BattleAiAbilitiesUsageParams.Entry | undefined;
    }
}
export default BattleAiAbilitiesUsageTemplatesToParams;
