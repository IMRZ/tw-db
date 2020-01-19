
import { CollectionCache, CollectionKey } from "../../../common";
import { ExperienceRankToEffectsSets } from "./ExperienceRankToEffectsSets";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace ExperienceRankToEffects {
  export const KEY = new CollectionKey("experience_rank_to_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _setName: string;
    readonly rank: number;
    readonly _effectKey: string;
    readonly _effectScope: string;
    readonly effectValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._setName = values["set_name"];
      this.rank = values["rank"];
      this._effectKey = values["effect_key"];
      this._effectScope = values["effect_scope"];
      this.effectValue = values["effect_value"];
    }
    
    get setName(): ExperienceRankToEffectsSets.Entry | undefined {
      const collection = <ExperienceRankToEffectsSets.Entry[]>this.collectionCache.getCollection(ExperienceRankToEffectsSets.KEY, ExperienceRankToEffectsSets.Entry);
      return collection.find(entry => entry.setName === this._setName);
    }
    
    get effectKey(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effectKey);
    }
    
    get effectScope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScope);
    }
  }
}

export default ExperienceRankToEffects;
