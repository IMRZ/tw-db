import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealGenerationComponents } from "./CaiPersonalityDealGenerationComponents";
import { CaiPersonalityDealGenerationGenerators } from "./CaiPersonalityDealGenerationGenerators";
export declare namespace CaiPersonalityDealGenerationGeneratorPriorities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentKey: string;
        readonly _generatorKey: string;
        readonly lastStandPriority: number;
        readonly totalWarPriority: number;
        readonly warPriority: number;
        readonly tensionPriority: number;
        readonly peacePriority: number;
        readonly param1: number;
        readonly param2: number;
        readonly param3: number;
        readonly param4: number;
        readonly failureTimeout: number;
        readonly minPaymentCap: number;
        readonly maxPaymentCap: number;
        readonly maxPaymentPct: number;
        constructor(collectionCache: CollectionCache, values: any);
        get componentKey(): CaiPersonalityDealGenerationComponents.Entry | undefined;
        get generatorKey(): CaiPersonalityDealGenerationGenerators.Entry | undefined;
    }
}
export default CaiPersonalityDealGenerationGeneratorPriorities;
