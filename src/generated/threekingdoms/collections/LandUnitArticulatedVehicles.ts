
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntities } from "./BattleEntities";
import { WarscapeAnimated } from "./WarscapeAnimated";

export namespace LandUnitArticulatedVehicles {
  export const KEY = new CollectionKey("land_unit_articulated_vehicles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _articulatedEntity: string;
    readonly _ammoCaissonEntity: string;
    readonly _ammoCaissonModel: string;
    readonly ammoCaissonDestroyedModel: string;
    readonly _ammoCaissonDestruction: string;
    readonly articulationNode1Offset: number;
    readonly articulationNode1Radius: number;
    readonly articulationNode2Offset: number;
    readonly articulationNode2Radius: number;
    readonly articulationNode3Offset: number;
    readonly articulationNode3Radius: number;
    readonly articulationMaxAngle: number;
    readonly headOffset: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._articulatedEntity = values["articulated_entity"];
      this._ammoCaissonEntity = values["ammo_caisson_entity"];
      this._ammoCaissonModel = values["ammo_caisson_model"];
      this.ammoCaissonDestroyedModel = values["ammo_caisson_destroyed_model"];
      this._ammoCaissonDestruction = values["ammo_caisson_destruction"];
      this.articulationNode1Offset = values["articulation_node_1_offset"];
      this.articulationNode1Radius = values["articulation_node_1_radius"];
      this.articulationNode2Offset = values["articulation_node_2_offset"];
      this.articulationNode2Radius = values["articulation_node_2_radius"];
      this.articulationNode3Offset = values["articulation_node_3_offset"];
      this.articulationNode3Radius = values["articulation_node_3_radius"];
      this.articulationMaxAngle = values["articulation_max_angle"];
      this.headOffset = values["head_offset"];
    }
    
    get articulatedEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._articulatedEntity);
    }
    
    get ammoCaissonEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._ammoCaissonEntity);
    }
    
    get ammoCaissonModel(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._ammoCaissonModel);
    }
    
    get ammoCaissonDestruction(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._ammoCaissonDestruction);
    }
  }
}

export default LandUnitArticulatedVehicles;
