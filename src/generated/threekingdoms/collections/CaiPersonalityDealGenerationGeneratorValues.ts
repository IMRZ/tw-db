
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealGenerationComponents } from "./CaiPersonalityDealGenerationComponents";
import { CaiPersonalityDealGenerationGenerators } from "./CaiPersonalityDealGenerationGenerators";
import { CaiValueSets } from "./CaiValueSets";

export namespace CaiPersonalityDealGenerationGeneratorValues {
  export const KEY = new CollectionKey("cai_personality_deal_generation_generator_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _componentKey: string;
    readonly _generatorKey: string;
    readonly _valueSetKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentKey = values["component_key"];
      this._generatorKey = values["generator_key"];
      this._valueSetKey = values["value_set_key"];
    }
    
    get componentKey(): CaiPersonalityDealGenerationComponents.Entry | undefined {
      const collection = <CaiPersonalityDealGenerationComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealGenerationComponents.KEY, CaiPersonalityDealGenerationComponents.Entry);
      return collection.find(entry => entry.id === this._componentKey);
    }
    
    get generatorKey(): CaiPersonalityDealGenerationGenerators.Entry | undefined {
      const collection = <CaiPersonalityDealGenerationGenerators.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealGenerationGenerators.KEY, CaiPersonalityDealGenerationGenerators.Entry);
      return collection.find(entry => entry.id === this._generatorKey);
    }
    
    get valueSetKey(): CaiValueSets.Entry | undefined {
      const collection = <CaiValueSets.Entry[]>this.collectionCache.getCollection(CaiValueSets.KEY, CaiValueSets.Entry);
      return collection.find(entry => entry.key === this._valueSetKey);
    }
  }
}

export default CaiPersonalityDealGenerationGeneratorValues;
