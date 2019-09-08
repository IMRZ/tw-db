
import { CollectionCache, CollectionKey } from "../../../common";
import { BattlefieldBuildingCategories } from "./BattlefieldBuildingCategories";
import { ModelsBuilding } from "./ModelsBuilding";
import { AudioMaterialsEnums } from "./AudioMaterialsEnums";
import { MissileWeapons } from "./MissileWeapons";
import { BattlefieldBuildingsNames } from "./BattlefieldBuildingsNames";

export namespace BattlefieldBuildings {
  export const KEY = new CollectionKey("battlefield_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _category: string;
    readonly _model: string;
    readonly _audioMaterial: string;
    readonly hitPoints: string;
    readonly _gunType: string;
    readonly _onscreenName: string;
    readonly ignitionThreshold: number;
    readonly radarIcon: string;
    readonly visibleInPublicTed: boolean;
    readonly fortwallPenetrationChance: number;
    readonly collision3D: boolean;
    readonly destructThresholds: string;
    readonly joiner: boolean;
    readonly auxiliary: boolean;
    readonly burnRate: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._category = values["category"];
      this._model = values["model"];
      this._audioMaterial = values["audio_material"];
      this.hitPoints = values["hit_points"];
      this._gunType = values["gun_type"];
      this._onscreenName = values["onscreen_name"];
      this.ignitionThreshold = values["ignition_threshold"];
      this.radarIcon = values["radar_icon"];
      this.visibleInPublicTed = !!values["visible_in_public_ted"];
      this.fortwallPenetrationChance = values["fortwall_penetration_chance"];
      this.collision3D = !!values["collision_3d"];
      this.destructThresholds = values["destruct_thresholds"];
      this.joiner = !!values["joiner"];
      this.auxiliary = !!values["auxiliary"];
      this.burnRate = values["burn_rate"];
    }
    
    get category(): BattlefieldBuildingCategories.Entry | undefined {
      const collection = <BattlefieldBuildingCategories.Entry[]>this.collectionCache.getCollection(BattlefieldBuildingCategories.KEY, BattlefieldBuildingCategories.Entry);
      return collection.find(entry => entry.category === this._category);
    }
    
    get model(): ModelsBuilding.Entry | undefined {
      const collection = <ModelsBuilding.Entry[]>this.collectionCache.getCollection(ModelsBuilding.KEY, ModelsBuilding.Entry);
      return collection.find(entry => entry.key === this._model);
    }
    
    get audioMaterial(): AudioMaterialsEnums.Entry | undefined {
      const collection = <AudioMaterialsEnums.Entry[]>this.collectionCache.getCollection(AudioMaterialsEnums.KEY, AudioMaterialsEnums.Entry);
      return collection.find(entry => entry.key === this._audioMaterial);
    }
    
    get gunType(): MissileWeapons.Entry | undefined {
      const collection = <MissileWeapons.Entry[]>this.collectionCache.getCollection(MissileWeapons.KEY, MissileWeapons.Entry);
      return collection.find(entry => entry.key === this._gunType);
    }
    
    get onscreenName(): BattlefieldBuildingsNames.Entry | undefined {
      const collection = <BattlefieldBuildingsNames.Entry[]>this.collectionCache.getCollection(BattlefieldBuildingsNames.KEY, BattlefieldBuildingsNames.Entry);
      return collection.find(entry => entry.key === this._onscreenName);
    }
  }
}

export default BattlefieldBuildings;
