
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { NamesGroups } from "./NamesGroups";
import { GroupingsMilitary } from "./GroupingsMilitary";
import { PreBattleSpeechParametersEnum } from "./PreBattleSpeechParametersEnum";
import { Cultures } from "./Cultures";

export namespace Factions {
  export const KEY = new CollectionKey("factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly index: number;
    readonly _subculture: string;
    readonly category: string;
    readonly screenName: string;
    readonly screenNameWhenRebels: string;
    readonly screenAdjective: string;
    readonly _nameGroup: number;
    readonly skin: string;
    readonly isRebel: boolean;
    readonly iconsPathUnits: string;
    readonly flagsPath: string;
    readonly republicanFlagPath: string;
    readonly sameGovTypeRevolutionFlagPath: string;
    readonly primaryColourR: number;
    readonly primaryColourG: number;
    readonly primaryColourB: number;
    readonly altPrimaryColourR: number;
    readonly altPrimaryColourG: number;
    readonly altPrimaryColourB: number;
    readonly secondaryColourR: number;
    readonly secondaryColourG: number;
    readonly secondaryColourB: number;
    readonly altSecondaryColourR: number;
    readonly altSecondaryColourG: number;
    readonly altSecondaryColourB: number;
    readonly rebelColourR: number;
    readonly rebelColourG: number;
    readonly rebelColourB: number;
    readonly uniformColourR: number;
    readonly uniformColourG: number;
    readonly uniformColourB: number;
    readonly altUniformColourR: number;
    readonly altUniformColourG: number;
    readonly altUniformColourB: number;
    readonly _militaryGroup: string;
    readonly _settlerRebellionFaction: any;
    readonly mpAvailable: boolean;
    readonly mpAvailableNaval: boolean;
    readonly _movieDeathEvent: any;
    readonly mpUseRepublicEarly: boolean;
    readonly mpUseRepublicLate: boolean;
    readonly _unitRegimentNameGroup: number;
    readonly _shipNameGroup: number;
    readonly uiSkin: string;
    readonly attackDesc: string;
    readonly defendDesc: string;
    readonly mpStatsName: string;
    readonly _preBattleSpeechParameter: string;
    readonly screenNameWhenShogun: string;
    readonly clanSummaryName: string;
    readonly clanSummaryNameWhenShogun: string;
    readonly canBeRegionless: boolean;
    readonly cardColourR: number;
    readonly cardColourG: number;
    readonly cardColourB: number;
    readonly _diplomacyCulture: string;
    readonly senatorTotal: number;
    readonly senatorTextNOutOfN: string;
    readonly senatorTextLoseN: string;
    readonly senatorTextLose1: string;
    readonly senatorTextGainN: string;
    readonly senatorTextGain1: string;
    readonly usesLegionNames: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.index = values["index"];
      this._subculture = values["subculture"];
      this.category = values["category"];
      this.screenName = values["screen_name"];
      this.screenNameWhenRebels = values["screen_name_when_rebels"];
      this.screenAdjective = values["screen_adjective"];
      this._nameGroup = values["name_group"];
      this.skin = values["skin"];
      this.isRebel = !!values["is_rebel"];
      this.iconsPathUnits = values["icons_path_units"];
      this.flagsPath = values["flags_path"];
      this.republicanFlagPath = values["republican_flag_path"];
      this.sameGovTypeRevolutionFlagPath = values["same_gov_type_revolution_flag_path"];
      this.primaryColourR = values["primary_colour_r"];
      this.primaryColourG = values["primary_colour_g"];
      this.primaryColourB = values["primary_colour_b"];
      this.altPrimaryColourR = values["alt_primary_colour_r"];
      this.altPrimaryColourG = values["alt_primary_colour_g"];
      this.altPrimaryColourB = values["alt_primary_colour_b"];
      this.secondaryColourR = values["secondary_colour_r"];
      this.secondaryColourG = values["secondary_colour_g"];
      this.secondaryColourB = values["secondary_colour_b"];
      this.altSecondaryColourR = values["alt_secondary_colour_r"];
      this.altSecondaryColourG = values["alt_secondary_colour_g"];
      this.altSecondaryColourB = values["alt_secondary_colour_b"];
      this.rebelColourR = values["rebel_colour_r"];
      this.rebelColourG = values["rebel_colour_g"];
      this.rebelColourB = values["rebel_colour_b"];
      this.uniformColourR = values["uniform_colour_r"];
      this.uniformColourG = values["uniform_colour_g"];
      this.uniformColourB = values["uniform_colour_b"];
      this.altUniformColourR = values["alt_uniform_colour_r"];
      this.altUniformColourG = values["alt_uniform_colour_g"];
      this.altUniformColourB = values["alt_uniform_colour_b"];
      this._militaryGroup = values["military_group"];
      this._settlerRebellionFaction = values["settler_rebellion_faction"];
      this.mpAvailable = !!values["mp_available"];
      this.mpAvailableNaval = !!values["mp_available_naval"];
      this._movieDeathEvent = values["movie_death_event"];
      this.mpUseRepublicEarly = !!values["mp_use_republic_early"];
      this.mpUseRepublicLate = !!values["mp_use_republic_late"];
      this._unitRegimentNameGroup = values["unit_regiment_name_group"];
      this._shipNameGroup = values["ship_name_group"];
      this.uiSkin = values["ui_skin"];
      this.attackDesc = values["attack_desc"];
      this.defendDesc = values["defend_desc"];
      this.mpStatsName = values["mp_stats_name"];
      this._preBattleSpeechParameter = values["pre_battle_speech_parameter"];
      this.screenNameWhenShogun = values["screen_name_when_shogun"];
      this.clanSummaryName = values["clan_summary_name"];
      this.clanSummaryNameWhenShogun = values["clan_summary_name_when_shogun"];
      this.canBeRegionless = !!values["can_be_regionless"];
      this.cardColourR = values["card_colour_r"];
      this.cardColourG = values["card_colour_g"];
      this.cardColourB = values["card_colour_b"];
      this._diplomacyCulture = values["diplomacy_culture"];
      this.senatorTotal = values["senator_total"];
      this.senatorTextNOutOfN = values["senator_text_n_out_of_n"];
      this.senatorTextLoseN = values["senator_text_lose_n"];
      this.senatorTextLose1 = values["senator_text_lose_1"];
      this.senatorTextGainN = values["senator_text_gain_n"];
      this.senatorTextGain1 = values["senator_text_gain_1"];
      this.usesLegionNames = !!values["uses_legion_names"];
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get nameGroup(): NamesGroups.Entry | undefined {
      const collection = <NamesGroups.Entry[]>this.collectionCache.getCollection(NamesGroups.KEY, NamesGroups.Entry);
      return collection.find(entry => entry.key === this._nameGroup);
    }
    
    get militaryGroup(): GroupingsMilitary.Entry | undefined {
      const collection = <GroupingsMilitary.Entry[]>this.collectionCache.getCollection(GroupingsMilitary.KEY, GroupingsMilitary.Entry);
      return collection.find(entry => entry.militaryGroup === this._militaryGroup);
    }
    
    get unitRegimentNameGroup(): NamesGroups.Entry | undefined {
      const collection = <NamesGroups.Entry[]>this.collectionCache.getCollection(NamesGroups.KEY, NamesGroups.Entry);
      return collection.find(entry => entry.key === this._unitRegimentNameGroup);
    }
    
    get shipNameGroup(): NamesGroups.Entry | undefined {
      const collection = <NamesGroups.Entry[]>this.collectionCache.getCollection(NamesGroups.KEY, NamesGroups.Entry);
      return collection.find(entry => entry.key === this._shipNameGroup);
    }
    
    get preBattleSpeechParameter(): PreBattleSpeechParametersEnum.Entry | undefined {
      const collection = <PreBattleSpeechParametersEnum.Entry[]>this.collectionCache.getCollection(PreBattleSpeechParametersEnum.KEY, PreBattleSpeechParametersEnum.Entry);
      return collection.find(entry => entry.key === this._preBattleSpeechParameter);
    }
    
    get diplomacyCulture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._diplomacyCulture);
    }
  }
}

export default Factions;
