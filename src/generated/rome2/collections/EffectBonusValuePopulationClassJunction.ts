
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsPopulationClass } from "./CampaignBonusValueIdsPopulationClass";
import { PopulationClasses } from "./PopulationClasses";

export namespace EffectBonusValuePopulationClassJunction {
  export const KEY = new CollectionKey("effect_bonus_value_population_class_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _populationClass: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._populationClass = values["population_class"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsPopulationClass.Entry | undefined {
      const collection = <CampaignBonusValueIdsPopulationClass.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsPopulationClass.KEY, CampaignBonusValueIdsPopulationClass.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get populationClass(): PopulationClasses.Entry | undefined {
      const collection = <PopulationClasses.Entry[]>this.collectionCache.getCollection(PopulationClasses.KEY, PopulationClasses.Entry);
      return collection.find(entry => entry.populationClass === this._populationClass);
    }
  }
}

export default EffectBonusValuePopulationClassJunction;
