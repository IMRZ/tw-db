import { CollectionCache, CollectionKey } from "../../../common";
import { MpForceGenTemplates } from "./MpForceGenTemplates";
import { MpBudgets } from "./MpBudgets";
import { CdirMilitaryGeneratorConfigs } from "./CdirMilitaryGeneratorConfigs";
export declare namespace MpForceGenTemplateJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _templateKey: string;
        readonly _budgetKey: string;
        readonly priority: number;
        readonly generalPct: number;
        readonly unitsPct: number;
        readonly upgradePct: number;
        readonly _configKey: string;
        readonly isDefender: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get templateKey(): MpForceGenTemplates.Entry | undefined;
        get budgetKey(): MpBudgets.Entry | undefined;
        get configKey(): CdirMilitaryGeneratorConfigs.Entry | undefined;
    }
}
export default MpForceGenTemplateJunctions;
