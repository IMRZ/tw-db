
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignRetinueChains } from "./CampaignRetinueChains";
import { CampaignBonusValueIdsRetinueChains } from "./CampaignBonusValueIdsRetinueChains";

export namespace EffectBonusValueRetinueChainJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_retinue_chain_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _retinueChain: string;
    readonly _bonusValueId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._retinueChain = values["retinue_chain"];
      this._bonusValueId = values["bonus_value_id"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get retinueChain(): CampaignRetinueChains.Entry | undefined {
      const collection = <CampaignRetinueChains.Entry[]>this.collectionCache.getCollection(CampaignRetinueChains.KEY, CampaignRetinueChains.Entry);
      return collection.find(entry => entry.key === this._retinueChain);
    }
    
    get bonusValueId(): CampaignBonusValueIdsRetinueChains.Entry | undefined {
      const collection = <CampaignBonusValueIdsRetinueChains.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsRetinueChains.KEY, CampaignBonusValueIdsRetinueChains.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
  }
}

export default EffectBonusValueRetinueChainJunctions;
