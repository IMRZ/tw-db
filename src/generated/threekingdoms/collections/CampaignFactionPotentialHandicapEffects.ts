
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { FactionPotentialBonusValuePlayerFilters } from "./FactionPotentialBonusValuePlayerFilters";

export namespace CampaignFactionPotentialHandicapEffects {
  export const KEY = new CollectionKey("campaign_faction_potential_handicap_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly factionPotentialMin: number;
    readonly factionPotentialMax: number;
    readonly _effect: string;
    readonly _effectScope: string;
    readonly campaignKey: string;
    readonly valueMin: number;
    readonly valueMax: number;
    readonly _appliedTo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.factionPotentialMin = values["faction_potential_min"];
      this.factionPotentialMax = values["faction_potential_max"];
      this._effect = values["effect"];
      this._effectScope = values["effect_scope"];
      this.campaignKey = values["campaign_key"];
      this.valueMin = values["value_min"];
      this.valueMax = values["value_max"];
      this._appliedTo = values["applied_to"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get effectScope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScope);
    }
    
    get appliedTo(): FactionPotentialBonusValuePlayerFilters.Entry | undefined {
      const collection = <FactionPotentialBonusValuePlayerFilters.Entry[]>this.collectionCache.getCollection(FactionPotentialBonusValuePlayerFilters.KEY, FactionPotentialBonusValuePlayerFilters.Entry);
      return collection.find(entry => entry.player === this._appliedTo);
    }
  }
}

export default CampaignFactionPotentialHandicapEffects;
