
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterSkills } from "./CharacterSkills";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace CharacterSkillLevelDetails {
  export const KEY = new CollectionKey("character_skill_level_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly level: number;
    readonly _skillKey: string;
    readonly _factionKey: string;
    readonly _campaignKey: string;
    readonly _subcultureKey: string;
    readonly localisedName: string;
    readonly localisedDescription: string;
    readonly imagePath: string;
    readonly unlockedAtRank: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.level = values["level"];
      this._skillKey = values["skill_key"];
      this._factionKey = values["faction_key"];
      this._campaignKey = values["campaign_key"];
      this._subcultureKey = values["subculture_key"];
      this.localisedName = values["localised_name"];
      this.localisedDescription = values["localised_description"];
      this.imagePath = values["image_path"];
      this.unlockedAtRank = values["unlocked_at_rank"];
    }
    
    get skillKey(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._skillKey);
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
    
    get campaignKey(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaignKey);
    }
    
    get subcultureKey(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subcultureKey);
    }
  }
}

export default CharacterSkillLevelDetails;
