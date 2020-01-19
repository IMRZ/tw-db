
import { CollectionCache, CollectionKey } from "../../../common";
import { ModelsSieges } from "./ModelsSieges";
import { BattleEntities } from "./BattleEntities";
import { BattlefieldEnginesAutonomous } from "./BattlefieldEnginesAutonomous";
import { AudioEntityTypes } from "./AudioEntityTypes";
import { UiSiegeItemDetails } from "./UiSiegeItemDetails";

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
    readonly uses8MWall: boolean;
    readonly uses15MWall: boolean;
    readonly specialEditionMask: number;
    readonly ignitionThreshold: number;
    readonly attackDamage: number;
    readonly sortOrder: number;
    readonly _audioType: string;
    readonly autoresolverEffectiveness: number;
    readonly _uiSiegeItemDetails: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._model = values["model"];
      this.hitPoints = values["hit_points"];
      this._battleEntity = values["battle_entity"];
      this.gunType = values["gun_type"];
      this.dockingClearance = values["docking_clearance"];
      this._engine = values["engine"];
      this.uses8MWall = !!values["uses_8m_wall"];
      this.uses15MWall = !!values["uses_15m_wall"];
      this.specialEditionMask = values["special_edition_mask"];
      this.ignitionThreshold = values["ignition_threshold"];
      this.attackDamage = values["attack_damage"];
      this.sortOrder = values["sort_order"];
      this._audioType = values["audio_type"];
      this.autoresolverEffectiveness = values["autoresolver_effectiveness"];
      this._uiSiegeItemDetails = values["ui_siege_item_details"];
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
    
    get uiSiegeItemDetails(): UiSiegeItemDetails.Entry | undefined {
      const collection = <UiSiegeItemDetails.Entry[]>this.collectionCache.getCollection(UiSiegeItemDetails.KEY, UiSiegeItemDetails.Entry);
      return collection.find(entry => entry.key === this._uiSiegeItemDetails);
    }
  }
}

export default BattlefieldSiegeVehicles;
