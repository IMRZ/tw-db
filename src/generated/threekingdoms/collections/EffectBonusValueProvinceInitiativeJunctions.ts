
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsProvinceInitiatives } from "./CampaignBonusValueIdsProvinceInitiatives";
import { ProvincialInitiativeRecords } from "./ProvincialInitiativeRecords";

export namespace EffectBonusValueProvinceInitiativeJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_province_initiative_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _provinceInitiative: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._provinceInitiative = values["province_initiative"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsProvinceInitiatives.Entry | undefined {
      const collection = <CampaignBonusValueIdsProvinceInitiatives.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsProvinceInitiatives.KEY, CampaignBonusValueIdsProvinceInitiatives.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get provinceInitiative(): ProvincialInitiativeRecords.Entry | undefined {
      const collection = <ProvincialInitiativeRecords.Entry[]>this.collectionCache.getCollection(ProvincialInitiativeRecords.KEY, ProvincialInitiativeRecords.Entry);
      return collection.find(entry => entry.key === this._provinceInitiative);
    }
  }
}

export default EffectBonusValueProvinceInitiativeJunctions;
