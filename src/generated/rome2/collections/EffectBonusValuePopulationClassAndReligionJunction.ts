
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsPopulationClassAndReligion } from "./CampaignBonusValueIdsPopulationClassAndReligion";
import { PopulationClasses } from "./PopulationClasses";
import { Religions } from "./Religions";

export namespace EffectBonusValuePopulationClassAndReligionJunction {
  export const KEY = new CollectionKey("effect_bonus_value_population_class_and_religion_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _populationClass: string;
    readonly _religion: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._populationClass = values["population_class"];
      this._religion = values["religion"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsPopulationClassAndReligion.Entry | undefined {
      const collection = <CampaignBonusValueIdsPopulationClassAndReligion.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsPopulationClassAndReligion.KEY, CampaignBonusValueIdsPopulationClassAndReligion.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get populationClass(): PopulationClasses.Entry | undefined {
      const collection = <PopulationClasses.Entry[]>this.collectionCache.getCollection(PopulationClasses.KEY, PopulationClasses.Entry);
      return collection.find(entry => entry.populationClass === this._populationClass);
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
  }
}

export default EffectBonusValuePopulationClassAndReligionJunction;
