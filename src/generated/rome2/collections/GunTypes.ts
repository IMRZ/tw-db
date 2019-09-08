
import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { WarscapeRigid } from "./WarscapeRigid";
import { BattleEntities } from "./BattleEntities";

export namespace GunTypes {
  export const KEY = new CollectionKey("gun_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly gunType: string;
    readonly _battleEntity: any;
    readonly _model: string;
    readonly _gunAnimationsTable: string;
    readonly equipmentTable: string;
    readonly _destroyedModel: string;
    readonly _destructionAnimation: any;
    readonly _engineType: any;
    readonly _gunMountEntity: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.gunType = values["gun_type"];
      this._battleEntity = values["battle_entity"];
      this._model = values["model"];
      this._gunAnimationsTable = values["gun_animations_table"];
      this.equipmentTable = values["equipment_table"];
      this._destroyedModel = values["destroyed_model"];
      this._destructionAnimation = values["destruction_animation"];
      this._engineType = values["engine_type"];
      this._gunMountEntity = values["gun_mount_entity"];
    }
    
    get model(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._model);
    }
    
    get gunAnimationsTable(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._gunAnimationsTable);
    }
    
    get destroyedModel(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._destroyedModel);
    }
    
    get gunMountEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._gunMountEntity);
    }
  }
}

export default GunTypes;
