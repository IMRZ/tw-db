
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealGenerationComponents } from "./CaiPersonalityDealGenerationComponents";
import { CaiPersonalityDealGenerationGenerators } from "./CaiPersonalityDealGenerationGenerators";

export namespace CaiPersonalityDealGenerationGeneratorPriorities {
  export const KEY = new CollectionKey("cai_personality_deal_generation_generator_priorities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._componentKey = values["component_key"];
      this._generatorKey = values["generator_key"];
      this.lastStandPriority = values["last_stand_priority"];
      this.totalWarPriority = values["total_war_priority"];
      this.warPriority = values["war_priority"];
      this.tensionPriority = values["tension_priority"];
      this.peacePriority = values["peace_priority"];
      this.param1 = values["param1"];
      this.param2 = values["param2"];
      this.param3 = values["param3"];
      this.param4 = values["param4"];
      this.failureTimeout = values["failure_timeout"];
      this.minPaymentCap = values["min_payment_cap"];
      this.maxPaymentCap = values["max_payment_cap"];
      this.maxPaymentPct = values["max_payment_pct"];
    }
    
    get componentKey(): CaiPersonalityDealGenerationComponents.Entry | undefined {
      const collection = <CaiPersonalityDealGenerationComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealGenerationComponents.KEY, CaiPersonalityDealGenerationComponents.Entry);
      return collection.find(entry => entry.id === this._componentKey);
    }
    
    get generatorKey(): CaiPersonalityDealGenerationGenerators.Entry | undefined {
      const collection = <CaiPersonalityDealGenerationGenerators.Entry[]>this.collectionCache.getCollection(CaiPersonalityDealGenerationGenerators.KEY, CaiPersonalityDealGenerationGenerators.Entry);
      return collection.find(entry => entry.id === this._generatorKey);
    }
  }
}

export default CaiPersonalityDealGenerationGeneratorPriorities;
