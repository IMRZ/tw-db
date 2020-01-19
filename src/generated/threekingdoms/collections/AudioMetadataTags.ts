
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMeleeHitCategories } from "./AudioMeleeHitCategories";
import { AudioMeleeHitTypes } from "./AudioMeleeHitTypes";
import { AudioRtpcAssignments } from "./AudioRtpcAssignments";
import { TexcExpansions } from "./TexcExpansions";

export namespace AudioMetadataTags {
  export const KEY = new CollectionKey("audio_metadata_tags");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly path: string;
    readonly colourRed: number;
    readonly colourGreen: number;
    readonly colourBlue: number;
    readonly soundEventBattleStart: string;
    readonly soundEventBattleStop: string;
    readonly soundEventCampaignStart: string;
    readonly soundEventCampaignStop: string;
    readonly limitationScale: number;
    readonly entityTypeSwitch: string;
    readonly _meleeHitCategory: string;
    readonly _meleeHitTypeOverride: string;
    readonly rtpc1Name: string;
    readonly _rtpc1Assignment: string;
    readonly rtpc2Name: string;
    readonly _rtpc2Assignment: string;
    readonly scaledSoundUpsize: number;
    readonly scaledMaxDelay: number;
    readonly _scaledSoundNext: string;
    readonly isVocalisation: boolean;
    readonly playAtBone: boolean;
    readonly playAtPosition: boolean;
    readonly playAtBase: boolean;
    readonly requireGroundTypeLimited: boolean;
    readonly requireGroundType: boolean;
    readonly requireArmourType: boolean;
    readonly requireMeleeWeaponType: boolean;
    readonly requireShieldType: boolean;
    readonly triggersBlood: boolean;
    readonly isTracked: boolean;
    readonly requireReverb: boolean;
    readonly requireObstruction: boolean;
    readonly canPlayUnderSplice: boolean;
    readonly ignoreIfHeadless: boolean;
    readonly playOnLoopingSound: boolean;
    readonly cinematicOnly: boolean;
    readonly requiresCinematic: boolean;
    readonly flipDirection: boolean;
    readonly dopplerRtpcName: string;
    readonly bloodEnabledOnly: boolean;
    readonly _gameExpansionKey: string;
    readonly minProbability: number;
    readonly maxProbability: number;
    readonly requireElement: boolean;
    readonly requireGenericHeroId: boolean;
    readonly requireHeroOpponent: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.path = values["path"];
      this.colourRed = values["colour_red"];
      this.colourGreen = values["colour_green"];
      this.colourBlue = values["colour_blue"];
      this.soundEventBattleStart = values["sound_event_battle_start"];
      this.soundEventBattleStop = values["sound_event_battle_stop"];
      this.soundEventCampaignStart = values["sound_event_campaign_start"];
      this.soundEventCampaignStop = values["sound_event_campaign_stop"];
      this.limitationScale = values["limitation_scale"];
      this.entityTypeSwitch = values["entity_type_switch"];
      this._meleeHitCategory = values["melee_hit_category"];
      this._meleeHitTypeOverride = values["melee_hit_type_override"];
      this.rtpc1Name = values["rtpc_1_name"];
      this._rtpc1Assignment = values["rtpc_1_assignment"];
      this.rtpc2Name = values["rtpc_2_name"];
      this._rtpc2Assignment = values["rtpc_2_assignment"];
      this.scaledSoundUpsize = values["scaled_sound_upsize"];
      this.scaledMaxDelay = values["scaled_max_delay"];
      this._scaledSoundNext = values["scaled_sound_next"];
      this.isVocalisation = !!values["is_vocalisation"];
      this.playAtBone = !!values["play_at_bone"];
      this.playAtPosition = !!values["play_at_position"];
      this.playAtBase = !!values["play_at_base"];
      this.requireGroundTypeLimited = !!values["require_ground_type_limited"];
      this.requireGroundType = !!values["require_ground_type"];
      this.requireArmourType = !!values["require_armour_type"];
      this.requireMeleeWeaponType = !!values["require_melee_weapon_type"];
      this.requireShieldType = !!values["require_shield_type"];
      this.triggersBlood = !!values["triggers_blood"];
      this.isTracked = !!values["is_tracked"];
      this.requireReverb = !!values["require_reverb"];
      this.requireObstruction = !!values["require_obstruction"];
      this.canPlayUnderSplice = !!values["can_play_under_splice"];
      this.ignoreIfHeadless = !!values["ignore_if_headless"];
      this.playOnLoopingSound = !!values["play_on_looping_sound"];
      this.cinematicOnly = !!values["cinematic_only"];
      this.requiresCinematic = !!values["requires_cinematic"];
      this.flipDirection = !!values["flip_direction"];
      this.dopplerRtpcName = values["doppler_rtpc_name"];
      this.bloodEnabledOnly = !!values["blood_enabled_only"];
      this._gameExpansionKey = values["game_expansion_key"];
      this.minProbability = values["min_probability"];
      this.maxProbability = values["max_probability"];
      this.requireElement = !!values["require_element"];
      this.requireGenericHeroId = !!values["require_generic_hero_id"];
      this.requireHeroOpponent = !!values["require_hero_opponent"];
    }
    
    get meleeHitCategory(): AudioMeleeHitCategories.Entry | undefined {
      const collection = <AudioMeleeHitCategories.Entry[]>this.collectionCache.getCollection(AudioMeleeHitCategories.KEY, AudioMeleeHitCategories.Entry);
      return collection.find(entry => entry.key === this._meleeHitCategory);
    }
    
    get meleeHitTypeOverride(): AudioMeleeHitTypes.Entry | undefined {
      const collection = <AudioMeleeHitTypes.Entry[]>this.collectionCache.getCollection(AudioMeleeHitTypes.KEY, AudioMeleeHitTypes.Entry);
      return collection.find(entry => entry.key === this._meleeHitTypeOverride);
    }
    
    get rtpc1Assignment(): AudioRtpcAssignments.Entry | undefined {
      const collection = <AudioRtpcAssignments.Entry[]>this.collectionCache.getCollection(AudioRtpcAssignments.KEY, AudioRtpcAssignments.Entry);
      return collection.find(entry => entry.name === this._rtpc1Assignment);
    }
    
    get rtpc2Assignment(): AudioRtpcAssignments.Entry | undefined {
      const collection = <AudioRtpcAssignments.Entry[]>this.collectionCache.getCollection(AudioRtpcAssignments.KEY, AudioRtpcAssignments.Entry);
      return collection.find(entry => entry.name === this._rtpc2Assignment);
    }
    
    get scaledSoundNext(): AudioMetadataTags.Entry | undefined {
      const collection = <AudioMetadataTags.Entry[]>this.collectionCache.getCollection(AudioMetadataTags.KEY, AudioMetadataTags.Entry);
      return collection.find(entry => entry.key === this._scaledSoundNext);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default AudioMetadataTags;
