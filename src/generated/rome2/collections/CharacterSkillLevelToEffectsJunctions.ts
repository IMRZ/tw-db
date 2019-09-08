
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";

export namespace CharacterSkillLevelToEffectsJunctions {
  export const KEY = new CollectionKey("character_skill_level_to_effects_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterSkillKey: string;
    readonly level: number;
    readonly _effectKey: string;
    readonly value: number;
    readonly isFactionwide: boolean;
    readonly _effectScope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterSkillKey = values["character_skill_key"];
      this.level = values["level"];
      this._effectKey = values["effect_key"];
      this.value = values["value"];
      this.isFactionwide = !!values["is_factionwide"];
      this._effectScope = values["effect_scope"];
    }
    
    get characterSkillKey(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._characterSkillKey);
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

export default CharacterSkillLevelToEffectsJunctions;
