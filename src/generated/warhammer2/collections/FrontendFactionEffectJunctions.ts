
import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionEffectGroups } from "./FrontendFactionEffectGroups";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace FrontendFactionEffectJunctions {
  export const KEY = new CollectionKey("frontend_faction_effect_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _effect: string;
    readonly value: number;
    readonly _scope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._effect = values["effect"];
      this.value = values["value"];
      this._scope = values["scope"];
    }
    
    get group(): FrontendFactionEffectGroups.Entry | undefined {
      const collection = <FrontendFactionEffectGroups.Entry[]>this.collectionCache.getCollection(FrontendFactionEffectGroups.KEY, FrontendFactionEffectGroups.Entry);
      return collection.find(entry => entry.groupKey === this._group);
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get scope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._scope);
    }
  }
}

export default FrontendFactionEffectJunctions;
