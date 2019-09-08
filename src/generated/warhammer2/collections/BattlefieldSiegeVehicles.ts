
import { CollectionCache, CollectionKey } from "../../../common";
import { ModelsSieges } from "./ModelsSieges";
import { BattleEntities } from "./BattleEntities";
import { BattlefieldEnginesAutonomous } from "./BattlefieldEnginesAutonomous";
import { AudioEntityTypes } from "./AudioEntityTypes";

export namespace BattlefieldSiegeVehicles {
  export const KEY = new CollectionKey("battlefield_siege_vehicles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _model: string;
    readonly hitPoints: number;
    readonly _battleEntity: string;
    readonly gunType: string;
    readonly dockingClearance: number;
    readonly _engine: string;
    readonly onscreenName: string;
    readonly description: string;
    readonly imagePath: string;
    readonly recruitmentCap: number;
    readonly uses8MWall: boolean;
    readonly uses15MWall: boolean;
    readonly cost: number;
    readonly categoryImagePath: string;
    readonly specialEditionMask: number;
    readonly ignitionThreshold: number;
    readonly attackDamage: number;
    readonly selectionPriority: number;
    readonly sortOrder: number;
    readonly _audioType: string;
    readonly autoresolverEffectiveness: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._model = values["model"];
      this.hitPoints = values["hit_points"];
      this._battleEntity = values["battle_entity"];
      this.gunType = values["gun_type"];
      this.dockingClearance = values["docking_clearance"];
      this._engine = values["engine"];
      this.onscreenName = values["onscreen_name"];
      this.description = values["description"];
      this.imagePath = values["image_path"];
      this.recruitmentCap = values["recruitment_cap"];
      this.uses8MWall = !!values["uses_8m_wall"];
      this.uses15MWall = !!values["uses_15m_wall"];
      this.cost = values["cost"];
      this.categoryImagePath = values["category_image_path"];
      this.specialEditionMask = values["special_edition_mask"];
      this.ignitionThreshold = values["ignition_threshold"];
      this.attackDamage = values["attack_damage"];
      this.selectionPriority = values["selection_priority"];
      this.sortOrder = values["sort_order"];
      this._audioType = values["audio_type"];
      this.autoresolverEffectiveness = values["autoresolver_effectiveness"];
    }
    
    get model(): ModelsSieges.Entry | undefined {
      const collection = <ModelsSieges.Entry[]>this.collectionCache.getCollection(ModelsSieges.KEY, ModelsSieges.Entry);
      return collection.find(entry => entry.key === this._model);
    }
    
    get battleEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._battleEntity);
    }
    
    get engine(): BattlefieldEnginesAutonomous.Entry | undefined {
      const collection = <BattlefieldEnginesAutonomous.Entry[]>this.collectionCache.getCollection(BattlefieldEnginesAutonomous.KEY, BattlefieldEnginesAutonomous.Entry);
      return collection.find(entry => entry.key === this._engine);
    }
    
    get audioType(): AudioEntityTypes.Entry | undefined {
      const collection = <AudioEntityTypes.Entry[]>this.collectionCache.getCollection(AudioEntityTypes.KEY, AudioEntityTypes.Entry);
      return collection.find(entry => entry.key === this._audioType);
    }
  }
}

export default BattlefieldSiegeVehicles;
