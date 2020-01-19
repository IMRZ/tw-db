
import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace TechnologyEffectsJunction {
  export const KEY = new CollectionKey("technology_effects_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technology: string;
    readonly _effect: string;
    readonly value: string;
    readonly _effectScope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technology = values["technology"];
      this._effect = values["effect"];
      this.value = values["value"];
      this._effectScope = values["effect_scope"];
    }
    
    get technology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technology);
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

export default TechnologyEffectsJunction;
