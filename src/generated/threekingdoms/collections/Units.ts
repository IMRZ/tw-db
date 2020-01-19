
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitCategory } from "./UnitCategory";
import { UnitClass } from "./UnitClass";
import { UnitDescriptionTexts } from "./UnitDescriptionTexts";
import { RegionUnitResources } from "./RegionUnitResources";
import { UnitCastes } from "./UnitCastes";
import { BuildingLevels } from "./BuildingLevels";
import { Religions } from "./Religions";
import { Resources } from "./Resources";
import { MovieEventStrings } from "./MovieEventStrings";
import { Pdlc } from "./Pdlc";

export namespace Units {
  export const KEY = new CollectionKey("units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onScreenName: string;
    readonly _category: string;
    readonly _class: string;
    readonly multiplayerCost: number;
    readonly multiplayerLateCost: number;
    readonly createTime: number;
    readonly createCost: number;
    readonly upkeepCost: number;
    readonly campaignActionPoints: number;
    readonly voice: string;
    readonly fitness: number;
    readonly iconName: string;
    readonly _unitDescriptionText: string;
    readonly infoPic: string;
    readonly _regionUnitResource: string;
    readonly totalCap: number;
    readonly era: string;
    readonly mpAvailableEarly: boolean;
    readonly mpAvailableMiddle: boolean;
    readonly mpAvailableLate: boolean;
    readonly prestige: number;
    readonly armedCitizenry: boolean;
    readonly totalCapMp: number;
    readonly unitTypeIcon: string;
    readonly useOnscreenName: boolean;
    readonly _unitCaste: string;
    readonly _additionalBuildingLevelRequirement: string;
    readonly _religionRequirement: string;
    readonly _resourceRequirement: string;
    readonly inEncyclopedia: boolean;
    readonly _unitRecruitedMovie: string;
    readonly uniqueIndex: number;
    readonly _pdlc: string;
    readonly isMale: boolean;
    readonly supportsFirstPerson: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onScreenName = values["on_screen_name"];
      this._category = values["category"];
      this._class = values["class"];
      this.multiplayerCost = values["multiplayer_cost"];
      this.multiplayerLateCost = values["multiplayer_late_cost"];
      this.createTime = values["create_time"];
      this.createCost = values["create_cost"];
      this.upkeepCost = values["upkeep_cost"];
      this.campaignActionPoints = values["campaign_action_points"];
      this.voice = values["voice"];
      this.fitness = values["fitness"];
      this.iconName = values["icon_name"];
      this._unitDescriptionText = values["unit_description_text"];
      this.infoPic = values["info_pic"];
      this._regionUnitResource = values["region_unit_resource"];
      this.totalCap = values["total_cap"];
      this.era = values["era"];
      this.mpAvailableEarly = !!values["mp_available_early"];
      this.mpAvailableMiddle = !!values["mp_available_middle"];
      this.mpAvailableLate = !!values["mp_available_late"];
      this.prestige = values["prestige"];
      this.armedCitizenry = !!values["armed_citizenry"];
      this.totalCapMp = values["total_cap_mp"];
      this.unitTypeIcon = values["unit_type_icon"];
      this.useOnscreenName = !!values["use_onscreen_name"];
      this._unitCaste = values["unit_caste"];
      this._additionalBuildingLevelRequirement = values["additional_building_level_requirement"];
      this._religionRequirement = values["religion_requirement"];
      this._resourceRequirement = values["resource_requirement"];
      this.inEncyclopedia = !!values["in_encyclopedia"];
      this._unitRecruitedMovie = values["unit_recruited_movie"];
      this.uniqueIndex = values["unique_index"];
      this._pdlc = values["pdlc"];
      this.isMale = !!values["is_male"];
      this.supportsFirstPerson = !!values["supports_first_person"];
    }
    
    get category(): UnitCategory.Entry | undefined {
      const collection = <UnitCategory.Entry[]>this.collectionCache.getCollection(UnitCategory.KEY, UnitCategory.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get class(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._class);
    }
    
    get unitDescriptionText(): UnitDescriptionTexts.Entry | undefined {
      const collection = <UnitDescriptionTexts.Entry[]>this.collectionCache.getCollection(UnitDescriptionTexts.KEY, UnitDescriptionTexts.Entry);
      return collection.find(entry => entry.key === this._unitDescriptionText);
    }
    
    get regionUnitResource(): RegionUnitResources.Entry | undefined {
      const collection = <RegionUnitResources.Entry[]>this.collectionCache.getCollection(RegionUnitResources.KEY, RegionUnitResources.Entry);
      return collection.find(entry => entry.key === this._regionUnitResource);
    }
    
    get unitCaste(): UnitCastes.Entry | undefined {
      const collection = <UnitCastes.Entry[]>this.collectionCache.getCollection(UnitCastes.KEY, UnitCastes.Entry);
      return collection.find(entry => entry.caste === this._unitCaste);
    }
    
    get additionalBuildingLevelRequirement(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._additionalBuildingLevelRequirement);
    }
    
    get religionRequirement(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religionRequirement);
    }
    
    get resourceRequirement(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resourceRequirement);
    }
    
    get unitRecruitedMovie(): MovieEventStrings.Entry | undefined {
      const collection = <MovieEventStrings.Entry[]>this.collectionCache.getCollection(MovieEventStrings.KEY, MovieEventStrings.Entry);
      return collection.find(entry => entry._event === this._unitRecruitedMovie);
    }
    
    get pdlc(): Pdlc.Entry | undefined {
      const collection = <Pdlc.Entry[]>this.collectionCache.getCollection(Pdlc.KEY, Pdlc.Entry);
      return collection.find(entry => entry.id === this._pdlc);
    }
  }
}

export default Units;
