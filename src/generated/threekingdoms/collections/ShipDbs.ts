
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpacings } from "./UnitSpacings";
import { BattleEntities } from "./BattleEntities";
import { ModelsNaval } from "./ModelsNaval";

export namespace ShipDbs {
  export const KEY = new CollectionKey("ship_dbs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _spacing: string;
    readonly _entity: string;
    readonly _model: string;
    readonly hitPoints: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._spacing = values["spacing"];
      this._entity = values["entity"];
      this._model = values["model"];
      this.hitPoints = values["hit_points"];
    }
    
    get spacing(): UnitSpacings.Entry | undefined {
      const collection = <UnitSpacings.Entry[]>this.collectionCache.getCollection(UnitSpacings.KEY, UnitSpacings.Entry);
      return collection.find(entry => entry.key === this._spacing);
    }
    
    get entity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._entity);
    }
    
    get model(): ModelsNaval.Entry | undefined {
      const collection = <ModelsNaval.Entry[]>this.collectionCache.getCollection(ModelsNaval.KEY, ModelsNaval.Entry);
      return collection.find(entry => entry.key === this._model);
    }
  }
}

export default ShipDbs;
