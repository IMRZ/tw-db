
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCharacterAttributes } from "./CampaignBonusValueIdsCharacterAttributes";
import { CharacterAttributeTypes } from "./CharacterAttributeTypes";

export namespace EffectBonusValueCharacterAttributeJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_character_attribute_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _attributeType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._attributeType = values["attribute_type"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsCharacterAttributes.Entry | undefined {
      const collection = <CampaignBonusValueIdsCharacterAttributes.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsCharacterAttributes.KEY, CampaignBonusValueIdsCharacterAttributes.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get attributeType(): CharacterAttributeTypes.Entry | undefined {
      const collection = <CharacterAttributeTypes.Entry[]>this.collectionCache.getCollection(CharacterAttributeTypes.KEY, CharacterAttributeTypes.Entry);
      return collection.find(entry => entry.type === this._attributeType);
    }
  }
}

export default EffectBonusValueCharacterAttributeJunctions;
