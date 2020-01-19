
import { CollectionCache, CollectionKey } from "../../../common";
import { TreasuryLevels } from "./TreasuryLevels";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace TreasuryLevelEffects {
  export const KEY = new CollectionKey("treasury_level_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _level: string;
    readonly _effect: string;
    readonly _effectScope: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._level = values["level"];
      this._effect = values["effect"];
      this._effectScope = values["effect_scope"];
      this.value = values["value"];
    }
    
    get level(): TreasuryLevels.Entry | undefined {
      const collection = <TreasuryLevels.Entry[]>this.collectionCache.getCollection(TreasuryLevels.KEY, TreasuryLevels.Entry);
      return collection.find(entry => entry.name === this._level);
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

export default TreasuryLevelEffects;
