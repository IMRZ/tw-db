
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsRitualChains } from "./CampaignBonusValueIdsRitualChains";
import { RitualChains } from "./RitualChains";

export namespace EffectBonusValueRitualChainsJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_ritual_chains_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _ritualChain: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._ritualChain = values["ritual_chain"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsRitualChains.Entry | undefined {
      const collection = <CampaignBonusValueIdsRitualChains.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsRitualChains.KEY, CampaignBonusValueIdsRitualChains.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get ritualChain(): RitualChains.Entry | undefined {
      const collection = <RitualChains.Entry[]>this.collectionCache.getCollection(RitualChains.KEY, RitualChains.Entry);
      return collection.find(entry => entry.key === this._ritualChain);
    }
  }
}

export default EffectBonusValueRitualChainsJunctions;
