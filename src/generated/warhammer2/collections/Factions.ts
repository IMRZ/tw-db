
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { NamesGroups } from "./NamesGroups";
import { UnitBanners } from "./UnitBanners";
import { GroupingsMilitary } from "./GroupingsMilitary";
import { PreBattleSpeechParametersEnum } from "./PreBattleSpeechParametersEnum";
import { AudioVoiceoverCultures } from "./AudioVoiceoverCultures";
import { MpForceGenTemplates } from "./MpForceGenTemplates";
import { MovieEvents } from "./MovieEvents";
import { MainUnits } from "./MainUnits";
import { TexcExpansions } from "./TexcExpansions";
import { CdirMilitaryGeneratorConfigs } from "./CdirMilitaryGeneratorConfigs";
import { FactionFeatureForests } from "./FactionFeatureForests";
import { AudioVoActorGroups } from "./AudioVoActorGroups";

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
    readonly _skin: string;
    readonly isRebel: boolean;
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
    readonly _preBattleSpeechParameter: string;
    readonly screenNameWhenShogun: string;
    readonly clanSummaryName: string;
    readonly clanSummaryNameWhenShogun: string;
    readonly cardColourR: number;
    readonly cardColourG: number;
    readonly cardColourB: number;
    readonly senatorTotal: number;
    readonly senatorTextNOutOfN: string;
    readonly _audioVoiceoverCulture: string;
    readonly _mpForceGenTemplate: string;
    readonly factionSwappingId: string;
    readonly _winMovie: string;
    readonly hasPolitics: boolean;
    readonly _waaaghFaction: string;
    readonly _waaaghGeneralUnit: string;
    readonly isQuestFaction: boolean;
    readonly _gameExpansionKey: string;
    readonly _cdirMilitaryGeneratorConfig: string;
    readonly _featureForest: string;
    readonly _defaultAudioActorVoGroup: string;

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
      this._skin = values["skin"];
      this.isRebel = !!values["is_rebel"];
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
      this._preBattleSpeechParameter = values["pre_battle_speech_parameter"];
      this.screenNameWhenShogun = values["screen_name_when_shogun"];
      this.clanSummaryName = values["clan_summary_name"];
      this.clanSummaryNameWhenShogun = values["clan_summary_name_when_shogun"];
      this.cardColourR = values["card_colour_r"];
      this.cardColourG = values["card_colour_g"];
      this.cardColourB = values["card_colour_b"];
      this.senatorTotal = values["senator_total"];
      this.senatorTextNOutOfN = values["senator_text_n_out_of_n"];
      this._audioVoiceoverCulture = values["audio_voiceover_culture"];
      this._mpForceGenTemplate = values["mp_force_gen_template"];
      this.factionSwappingId = values["faction_swapping_id"];
      this._winMovie = values["win_movie"];
      this.hasPolitics = !!values["has_politics"];
      this._waaaghFaction = values["waaagh_faction"];
      this._waaaghGeneralUnit = values["waaagh_general_unit"];
      this.isQuestFaction = !!values["is_quest_faction"];
      this._gameExpansionKey = values["game_expansion_key"];
      this._cdirMilitaryGeneratorConfig = values["cdir_military_generator_config"];
      this._featureForest = values["feature_forest"];
      this._defaultAudioActorVoGroup = values["default_audio_actor_vo_group"];
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get nameGroup(): NamesGroups.Entry | undefined {
      const collection = <NamesGroups.Entry[]>this.collectionCache.getCollection(NamesGroups.KEY, NamesGroups.Entry);
      return collection.find(entry => entry.key === this._nameGroup);
    }
    
    get skin(): UnitBanners.Entry | undefined {
      const collection = <UnitBanners.Entry[]>this.collectionCache.getCollection(UnitBanners.KEY, UnitBanners.Entry);
      return collection.find(entry => entry.key === this._skin);
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
    
    get audioVoiceoverCulture(): AudioVoiceoverCultures.Entry | undefined {
      const collection = <AudioVoiceoverCultures.Entry[]>this.collectionCache.getCollection(AudioVoiceoverCultures.KEY, AudioVoiceoverCultures.Entry);
      return collection.find(entry => entry.name === this._audioVoiceoverCulture);
    }
    
    get mpForceGenTemplate(): MpForceGenTemplates.Entry | undefined {
      const collection = <MpForceGenTemplates.Entry[]>this.collectionCache.getCollection(MpForceGenTemplates.KEY, MpForceGenTemplates.Entry);
      return collection.find(entry => entry.key === this._mpForceGenTemplate);
    }
    
    get winMovie(): MovieEvents.Entry | undefined {
      const collection = <MovieEvents.Entry[]>this.collectionCache.getCollection(MovieEvents.KEY, MovieEvents.Entry);
      return collection.find(entry => entry.event === this._winMovie);
    }
    
    get waaaghFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._waaaghFaction);
    }
    
    get waaaghGeneralUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._waaaghGeneralUnit);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
    
    get cdirMilitaryGeneratorConfig(): CdirMilitaryGeneratorConfigs.Entry | undefined {
      const collection = <CdirMilitaryGeneratorConfigs.Entry[]>this.collectionCache.getCollection(CdirMilitaryGeneratorConfigs.KEY, CdirMilitaryGeneratorConfigs.Entry);
      return collection.find(entry => entry.key === this._cdirMilitaryGeneratorConfig);
    }
    
    get featureForest(): FactionFeatureForests.Entry | undefined {
      const collection = <FactionFeatureForests.Entry[]>this.collectionCache.getCollection(FactionFeatureForests.KEY, FactionFeatureForests.Entry);
      return collection.find(entry => entry.key === this._featureForest);
    }
    
    get defaultAudioActorVoGroup(): AudioVoActorGroups.Entry | undefined {
      const collection = <AudioVoActorGroups.Entry[]>this.collectionCache.getCollection(AudioVoActorGroups.KEY, AudioVoActorGroups.Entry);
      return collection.find(entry => entry.name === this._defaultAudioActorVoGroup);
    }
  }
}

export default Factions;
