
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntities } from "./BattleEntities";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { WarscapeRigid } from "./WarscapeRigid";

export namespace LandUnitArticulatedVehicles {
  export const KEY = new CollectionKey("land_unit_articulated_vehicles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _articulatedEntity: string;
    readonly _ammoCaissonEntity: string;
    readonly _ammoCaissonModel: string;
    readonly _ammoCaissonDestroyedModel: string;
    readonly _ammoCaissonDestruction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._articulatedEntity = values["articulated_entity"];
      this._ammoCaissonEntity = values["ammo_caisson_entity"];
      this._ammoCaissonModel = values["ammo_caisson_model"];
      this._ammoCaissonDestroyedModel = values["ammo_caisson_destroyed_model"];
      this._ammoCaissonDestruction = values["ammo_caisson_destruction"];
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
    
    get ammoCaissonDestroyedModel(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._ammoCaissonDestroyedModel);
    }
    
    get ammoCaissonDestruction(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._ammoCaissonDestruction);
    }
  }
}

export default LandUnitArticulatedVehicles;
