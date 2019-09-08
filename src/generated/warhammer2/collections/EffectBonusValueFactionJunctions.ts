
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsFactions } from "./CampaignBonusValueIdsFactions";
import { Factions } from "./Factions";

export namespace EffectBonusValueFactionJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_faction_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._faction = values["faction"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsFactions.Entry | undefined {
      const collection = <CampaignBonusValueIdsFactions.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsFactions.KEY, CampaignBonusValueIdsFactions.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default EffectBonusValueFactionJunctions;
