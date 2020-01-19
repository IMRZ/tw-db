import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealGenerationComponents } from "./CaiPersonalityDealGenerationComponents";
import { CaiPersonalityDealGenerationGenerators } from "./CaiPersonalityDealGenerationGenerators";
import { CaiValueSets } from "./CaiValueSets";
export declare namespace CaiPersonalityDealGenerationGeneratorValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _componentKey: string;
        readonly _generatorKey: string;
        readonly _valueSetKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get componentKey(): CaiPersonalityDealGenerationComponents.Entry | undefined;
        get generatorKey(): CaiPersonalityDealGenerationGenerators.Entry | undefined;
        get valueSetKey(): CaiValueSets.Entry | undefined;
    }
}
export default CaiPersonalityDealGenerationGeneratorValues;
