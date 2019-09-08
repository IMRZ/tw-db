
import { CollectionCache, CollectionKey } from "../../../common";
import { MinisterialPositions } from "./MinisterialPositions";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace MinisterialPositionsToEffects {
  export const KEY = new CollectionKey("ministerial_positions_to_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _position: string;
    readonly ministerLevel: number;
    readonly _effect: string;
    readonly value: number;
    readonly uiId: number;
    readonly _effectScope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._position = values["position"];
      this.ministerLevel = values["minister_level"];
      this._effect = values["effect"];
      this.value = values["value"];
      this.uiId = values["ui_id"];
      this._effectScope = values["effect_scope"];
    }
    
    get position(): MinisterialPositions.Entry | undefined {
      const collection = <MinisterialPositions.Entry[]>this.collectionCache.getCollection(MinisterialPositions.KEY, MinisterialPositions.Entry);
      return collection.find(entry => entry.ministerKey === this._position);
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

export default MinisterialPositionsToEffects;
