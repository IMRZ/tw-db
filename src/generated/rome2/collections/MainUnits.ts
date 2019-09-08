
import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnits } from "./LandUnits";
import { NavalUnits } from "./NavalUnits";
import { UnitWeights } from "./UnitWeights";
import { UnitCastes } from "./UnitCastes";
import { BuildingLevels } from "./BuildingLevels";
import { Religions } from "./Religions";
import { Resources } from "./Resources";
import { RegionUnitResources } from "./RegionUnitResources";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { AudioVoActorGroups } from "./AudioVoActorGroups";

export namespace MainUnits {
  export const KEY = new CollectionKey("main_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly unit: string;
    readonly _landUnit: string;
    readonly numMen: number;
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
    readonly campaignTotalCap: number;
    readonly _resourceRequirement: string;
    readonly worldLeaderOnly: boolean;
    readonly canTrade: boolean;
    readonly specialEditionMask: number;
    readonly uniqueIndex: number;
    readonly inEncyclopedia: boolean;
    readonly _regionUnitResourceRequirement: string;
    readonly _audioLanguage: string;
    readonly _audioVoActorGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.unit = values["unit"];
      this._landUnit = values["land_unit"];
      this.numMen = values["num_men"];
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
      this.campaignTotalCap = values["campaign_total_cap"];
      this._resourceRequirement = values["resource_requirement"];
      this.worldLeaderOnly = !!values["world_leader_only"];
      this.canTrade = !!values["can_trade"];
      this.specialEditionMask = values["special_edition_mask"];
      this.uniqueIndex = values["unique_index"];
      this.inEncyclopedia = !!values["in_encyclopedia"];
      this._regionUnitResourceRequirement = values["region_unit_resource_requirement"];
      this._audioLanguage = values["audio_language"];
      this._audioVoActorGroup = values["audio_vo_actor_group"];
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
    
    get audioLanguage(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._audioLanguage);
    }
    
    get audioVoActorGroup(): AudioVoActorGroups.Entry | undefined {
      const collection = <AudioVoActorGroups.Entry[]>this.collectionCache.getCollection(AudioVoActorGroups.KEY, AudioVoActorGroups.Entry);
      return collection.find(entry => entry.key === this._audioVoActorGroup);
    }
  }
}

export default MainUnits;
