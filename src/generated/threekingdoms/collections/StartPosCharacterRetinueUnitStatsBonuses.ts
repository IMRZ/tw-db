
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { CampaignUnitStatBonusTypes } from "./CampaignUnitStatBonusTypes";

export namespace StartPosCharacterRetinueUnitStatsBonuses {
  export const KEY = new CollectionKey("start_pos_character_retinue_unit_stats_bonuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _character: number;
    readonly retinueSlotIndex: number;
    readonly _unitStartingStatBonus: string;
    readonly unitStartingStatBonusLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._character = values["character"];
      this.retinueSlotIndex = values["retinue_slot_index"];
      this._unitStartingStatBonus = values["unit_starting_stat_bonus"];
      this.unitStartingStatBonusLevel = values["unit_starting_stat_bonus_level"];
    }
    
    get character(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._character);
    }
    
    get unitStartingStatBonus(): CampaignUnitStatBonusTypes.Entry | undefined {
      const collection = <CampaignUnitStatBonusTypes.Entry[]>this.collectionCache.getCollection(CampaignUnitStatBonusTypes.KEY, CampaignUnitStatBonusTypes.Entry);
      return collection.find(entry => entry.key === this._unitStartingStatBonus);
    }
  }
}

export default StartPosCharacterRetinueUnitStatsBonuses;
