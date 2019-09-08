
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace StartPosFactionEffects {
  export const KEY = new CollectionKey("start_pos_faction_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _startPosFaction: number;
    readonly _effect: string;
    readonly effectValue: number;
    readonly _effectScope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._startPosFaction = values["start_pos_faction"];
      this._effect = values["effect"];
      this.effectValue = values["effect_value"];
      this._effectScope = values["effect_scope"];
    }
    
    get startPosFaction(): StartPosFactions.Entry | undefined {
      const collection = <StartPosFactions.Entry[]>this.collectionCache.getCollection(StartPosFactions.KEY, StartPosFactions.Entry);
      return collection.find(entry => entry.id === this._startPosFaction);
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

export default StartPosFactionEffects;
