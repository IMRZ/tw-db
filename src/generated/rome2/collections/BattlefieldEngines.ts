
import { CollectionCache, CollectionKey } from "../../../common";
import { GunTypesEnum } from "./GunTypesEnum";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { MissileWeapons } from "./MissileWeapons";
import { WarscapeRigid } from "./WarscapeRigid";
import { BattleEntities } from "./BattleEntities";

export namespace BattlefieldEngines {
  export const KEY = new CollectionKey("battlefield_engines");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _engineType: string;
    readonly _model: string;
    readonly _gunAnimationTable: string;
    readonly _missileWeapon: string;
    readonly _destructionAnimation: string;
    readonly _destroyedModel: string;
    readonly _battleEntity: string;
    readonly canMove: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._engineType = values["engine_type"];
      this._model = values["model"];
      this._gunAnimationTable = values["gun_animation_table"];
      this._missileWeapon = values["missile_weapon"];
      this._destructionAnimation = values["destruction_animation"];
      this._destroyedModel = values["destroyed_model"];
      this._battleEntity = values["battle_entity"];
      this.canMove = !!values["can_move"];
    }
    
    get engineType(): GunTypesEnum.Entry | undefined {
      const collection = <GunTypesEnum.Entry[]>this.collectionCache.getCollection(GunTypesEnum.KEY, GunTypesEnum.Entry);
      return collection.find(entry => entry.key === this._engineType);
    }
    
    get model(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._model);
    }
    
    get gunAnimationTable(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._gunAnimationTable);
    }
    
    get missileWeapon(): MissileWeapons.Entry | undefined {
      const collection = <MissileWeapons.Entry[]>this.collectionCache.getCollection(MissileWeapons.KEY, MissileWeapons.Entry);
      return collection.find(entry => entry.key === this._missileWeapon);
    }
    
    get destructionAnimation(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._destructionAnimation);
    }
    
    get destroyedModel(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._destroyedModel);
    }
    
    get battleEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._battleEntity);
    }
  }
}

export default BattlefieldEngines;
