
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEffectLists } from "./CeoEffectLists";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { GameModes } from "./GameModes";

export namespace CeoEffectListToEffects {
  export const KEY = new CollectionKey("ceo_effect_list_to_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectList: string;
    readonly _effect: string;
    readonly value: number;
    readonly _effectScope: string;
    readonly autoId: number;
    readonly _optionalOnlyInGameMode: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectList = values["effect_list"];
      this._effect = values["effect"];
      this.value = values["value"];
      this._effectScope = values["effect_scope"];
      this.autoId = values["auto_id"];
      this._optionalOnlyInGameMode = values["optional_only_in_game_mode"];
    }
    
    get effectList(): CeoEffectLists.Entry | undefined {
      const collection = <CeoEffectLists.Entry[]>this.collectionCache.getCollection(CeoEffectLists.KEY, CeoEffectLists.Entry);
      return collection.find(entry => entry.key === this._effectList);
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get effectScope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScope);
    }
    
    get optionalOnlyInGameMode(): GameModes.Entry | undefined {
      const collection = <GameModes.Entry[]>this.collectionCache.getCollection(GameModes.KEY, GameModes.Entry);
      return collection.find(entry => entry.key === this._optionalOnlyInGameMode);
    }
  }
}

export default CeoEffectListToEffects;
