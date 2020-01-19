
import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnits } from "./LandUnits";
import { NavalUnits } from "./NavalUnits";
import { UnitWeights } from "./UnitWeights";
import { UnitCastes } from "./UnitCastes";
import { BuildingLevels } from "./BuildingLevels";
import { Religions } from "./Religions";
import { Resources } from "./Resources";
import { RegionUnitResources } from "./RegionUnitResources";
import { AudioVoiceoverCultures } from "./AudioVoiceoverCultures";
import { UiUnitGroupings } from "./UiUnitGroupings";
import { UnitPortholeCameraSettings } from "./UnitPortholeCameraSettings";
import { CampaignMounts } from "./CampaignMounts";
import { AudioVoActorGroups } from "./AudioVoActorGroups";

export namespace MainUnits {
  export const KEY = new CollectionKey("main_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly unit: string;
    readonly _landUnit: string;
    readonly _navalUnit: string;
    readonly numShips: number;
    readonly minMenPerShip: number;
    readonly maxMenPerShip: number;
    readonly isNaval: boolean;
    readonly _weight: string;
    readonly recruitmentCost: number;
    readonly upkeepCost: number;
    readonly createTime: number;
    readonly campaignCap: number;
    readonly multiplayerCost: number;
    readonly multiplayerCap: number;
    readonly _caste: string;
    readonly prestige: number;
    readonly _additionalBuildingRequirement: string;
    readonly _religionRequirement: string;
    readonly recruitmentMovie: string;
    readonly _resourceRequirement: string;
    readonly worldLeaderOnly: boolean;
    readonly canTrade: boolean;
    readonly specialEditionMask: number;
    readonly uniqueIndex: number;
    readonly inEncyclopedia: boolean;
    readonly _regionUnitResourceRequirement: string;
    readonly _audioVoiceoverCulture: string;
    readonly _uiUnitGroupLand: string;
    readonly _uiUnitGroupNaval: string;
    readonly tier: number;
    readonly isHighThreat: boolean;
    readonly _portholeCamera: string;
    readonly _mount: string;
    readonly unitScaling: boolean;
    readonly portholeCompositeScene: string;
    readonly meleeCp: number;
    readonly missileCp: number;
    readonly canSiege: boolean;
    readonly _audioVoiceoverCultureOverride: string;
    readonly restrictXpGainInCampaign: boolean;
    readonly minHealthFraction: number;
    readonly isMergeable: boolean;
    readonly turnsToMusterToFullStrength: number;
    readonly unitCard: string;
    readonly campaignSiegeEscalationPercentageEffectiveness: number;
    readonly _voiceoverActorGroup: string;
    readonly spawningHealthFraction: number;
    readonly adcPlaysAsConversation: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.unit = values["unit"];
      this._landUnit = values["land_unit"];
      this._navalUnit = values["naval_unit"];
      this.numShips = values["num_ships"];
      this.minMenPerShip = values["min_men_per_ship"];
      this.maxMenPerShip = values["max_men_per_ship"];
      this.isNaval = !!values["is_naval"];
      this._weight = values["weight"];
      this.recruitmentCost = values["recruitment_cost"];
      this.upkeepCost = values["upkeep_cost"];
      this.createTime = values["create_time"];
      this.campaignCap = values["campaign_cap"];
      this.multiplayerCost = values["multiplayer_cost"];
      this.multiplayerCap = values["multiplayer_cap"];
      this._caste = values["caste"];
      this.prestige = values["prestige"];
      this._additionalBuildingRequirement = values["additional_building_requirement"];
      this._religionRequirement = values["religion_requirement"];
      this.recruitmentMovie = values["recruitment_movie"];
      this._resourceRequirement = values["resource_requirement"];
      this.worldLeaderOnly = !!values["world_leader_only"];
      this.canTrade = !!values["can_trade"];
      this.specialEditionMask = values["special_edition_mask"];
      this.uniqueIndex = values["unique_index"];
      this.inEncyclopedia = !!values["in_encyclopedia"];
      this._regionUnitResourceRequirement = values["region_unit_resource_requirement"];
      this._audioVoiceoverCulture = values["audio_voiceover_culture"];
      this._uiUnitGroupLand = values["ui_unit_group_land"];
      this._uiUnitGroupNaval = values["ui_unit_group_naval"];
      this.tier = values["tier"];
      this.isHighThreat = !!values["is_high_threat"];
      this._portholeCamera = values["porthole_camera"];
      this._mount = values["mount"];
      this.unitScaling = !!values["unit_scaling"];
      this.portholeCompositeScene = values["porthole_composite_scene"];
      this.meleeCp = values["melee_cp"];
      this.missileCp = values["missile_cp"];
      this.canSiege = !!values["can_siege"];
      this._audioVoiceoverCultureOverride = values["audio_voiceover_culture_override"];
      this.restrictXpGainInCampaign = !!values["restrict_xp_gain_in_campaign"];
      this.minHealthFraction = values["min_health_fraction"];
      this.isMergeable = !!values["is_mergeable"];
      this.turnsToMusterToFullStrength = values["turns_to_muster_to_full_strength"];
      this.unitCard = values["unit_card"];
      this.campaignSiegeEscalationPercentageEffectiveness = values["campaign_siege_escalation_percentage_effectiveness"];
      this._voiceoverActorGroup = values["voiceover_actor_group"];
      this.spawningHealthFraction = values["spawning_health_fraction"];
      this.adcPlaysAsConversation = !!values["adc_plays_as_conversation"];
    }
    
    get landUnit(): LandUnits.Entry | undefined {
      const collection = <LandUnits.Entry[]>this.collectionCache.getCollection(LandUnits.KEY, LandUnits.Entry);
      return collection.find(entry => entry.key === this._landUnit);
    }
    
    get navalUnit(): NavalUnits.Entry | undefined {
      const collection = <NavalUnits.Entry[]>this.collectionCache.getCollection(NavalUnits.KEY, NavalUnits.Entry);
      return collection.find(entry => entry.key === this._navalUnit);
    }
    
    get weight(): UnitWeights.Entry | undefined {
      const collection = <UnitWeights.Entry[]>this.collectionCache.getCollection(UnitWeights.KEY, UnitWeights.Entry);
      return collection.find(entry => entry.key === this._weight);
    }
    
    get caste(): UnitCastes.Entry | undefined {
      const collection = <UnitCastes.Entry[]>this.collectionCache.getCollection(UnitCastes.KEY, UnitCastes.Entry);
      return collection.find(entry => entry.caste === this._caste);
    }
    
    get additionalBuildingRequirement(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._additionalBuildingRequirement);
    }
    
    get religionRequirement(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religionRequirement);
    }
    
    get resourceRequirement(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resourceRequirement);
    }
    
    get regionUnitResourceRequirement(): RegionUnitResources.Entry | undefined {
      const collection = <RegionUnitResources.Entry[]>this.collectionCache.getCollection(RegionUnitResources.KEY, RegionUnitResources.Entry);
      return collection.find(entry => entry.key === this._regionUnitResourceRequirement);
    }
    
    get audioVoiceoverCulture(): AudioVoiceoverCultures.Entry | undefined {
      const collection = <AudioVoiceoverCultures.Entry[]>this.collectionCache.getCollection(AudioVoiceoverCultures.KEY, AudioVoiceoverCultures.Entry);
      return collection.find(entry => entry.name === this._audioVoiceoverCulture);
    }
    
    get uiUnitGroupLand(): UiUnitGroupings.Entry | undefined {
      const collection = <UiUnitGroupings.Entry[]>this.collectionCache.getCollection(UiUnitGroupings.KEY, UiUnitGroupings.Entry);
      return collection.find(entry => entry.key === this._uiUnitGroupLand);
    }
    
    get uiUnitGroupNaval(): UiUnitGroupings.Entry | undefined {
      const collection = <UiUnitGroupings.Entry[]>this.collectionCache.getCollection(UiUnitGroupings.KEY, UiUnitGroupings.Entry);
      return collection.find(entry => entry.key === this._uiUnitGroupNaval);
    }
    
    get portholeCamera(): UnitPortholeCameraSettings.Entry | undefined {
      const collection = <UnitPortholeCameraSettings.Entry[]>this.collectionCache.getCollection(UnitPortholeCameraSettings.KEY, UnitPortholeCameraSettings.Entry);
      return collection.find(entry => entry.key === this._portholeCamera);
    }
    
    get mount(): CampaignMounts.Entry | undefined {
      const collection = <CampaignMounts.Entry[]>this.collectionCache.getCollection(CampaignMounts.KEY, CampaignMounts.Entry);
      return collection.find(entry => entry.model === this._mount);
    }
    
    get audioVoiceoverCultureOverride(): AudioVoiceoverCultures.Entry | undefined {
      const collection = <AudioVoiceoverCultures.Entry[]>this.collectionCache.getCollection(AudioVoiceoverCultures.KEY, AudioVoiceoverCultures.Entry);
      return collection.find(entry => entry.name === this._audioVoiceoverCultureOverride);
    }
    
    get voiceoverActorGroup(): AudioVoActorGroups.Entry | undefined {
      const collection = <AudioVoActorGroups.Entry[]>this.collectionCache.getCollection(AudioVoActorGroups.KEY, AudioVoActorGroups.Entry);
      return collection.find(entry => entry.key === this._voiceoverActorGroup);
    }
  }
}

export default MainUnits;
