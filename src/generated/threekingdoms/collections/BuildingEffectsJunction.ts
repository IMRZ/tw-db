
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace BuildingEffectsJunction {
  export const KEY = new CollectionKey("building_effects_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _effect: string;
    readonly value: number;
    readonly _effectScope: string;
    readonly valueDamaged: number;
    readonly valueRuined: number;
    readonly valueResourcePermissionLost: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._effect = values["effect"];
      this.value = values["value"];
      this._effectScope = values["effect_scope"];
      this.valueDamaged = values["value_damaged"];
      this.valueRuined = values["value_ruined"];
      this.valueResourcePermissionLost = values["value_resource_permission_lost"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get effectScope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScope);
    }
  }
}

export default BuildingEffectsJunction;
