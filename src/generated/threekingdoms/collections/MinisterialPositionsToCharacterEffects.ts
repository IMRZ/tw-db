
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { MinisterialPositionsCultureDetails } from "./MinisterialPositionsCultureDetails";
import { CeoNodes } from "./CeoNodes";

export namespace MinisterialPositionsToCharacterEffects {
  export const KEY = new CollectionKey("ministerial_positions_to_character_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly ministerLevel: number;
    readonly _effect: string;
    readonly value: number;
    readonly uiId: number;
    readonly _effectScope: string;
    readonly _ministerialPositionCulturalVariant: string;
    readonly _ceoNode: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.ministerLevel = values["minister_level"];
      this._effect = values["effect"];
      this.value = values["value"];
      this.uiId = values["ui_id"];
      this._effectScope = values["effect_scope"];
      this._ministerialPositionCulturalVariant = values["ministerial_position_cultural_variant"];
      this._ceoNode = values["ceo_node"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get effectScope(): CampaignEffectScopes.Entry | undefined {
      const collection = <CampaignEffectScopes.Entry[]>this.collectionCache.getCollection(CampaignEffectScopes.KEY, CampaignEffectScopes.Entry);
      return collection.find(entry => entry.key === this._effectScope);
    }
    
    get ministerialPositionCulturalVariant(): MinisterialPositionsCultureDetails.Entry | undefined {
      const collection = <MinisterialPositionsCultureDetails.Entry[]>this.collectionCache.getCollection(MinisterialPositionsCultureDetails.KEY, MinisterialPositionsCultureDetails.Entry);
      return collection.find(entry => entry.ministerialPositionCulturalVariant === this._ministerialPositionCulturalVariant);
    }
    
    get ceoNode(): CeoNodes.Entry | undefined {
      const collection = <CeoNodes.Entry[]>this.collectionCache.getCollection(CeoNodes.KEY, CeoNodes.Entry);
      return collection.find(entry => entry.key === this._ceoNode);
    }
  }
}

export default MinisterialPositionsToCharacterEffects;
