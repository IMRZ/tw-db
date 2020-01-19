
import { CollectionCache, CollectionKey } from "../../../common";
import { GunTypesEnum } from "./GunTypesEnum";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { MissileWeapons } from "./MissileWeapons";
import { BattleEntities } from "./BattleEntities";
import { Variants } from "./Variants";
import { FirstPersonEngines } from "./FirstPersonEngines";

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
    readonly destroyedModel: string;
    readonly _battleEntity: string;
    readonly assetFolder: string;
    readonly _variant: string;
    readonly draughtAttachmentPoint: string;
    readonly techFolder: string;
    readonly riderAttachmentPoint: string;
    readonly _firstPerson: string;
    readonly destructModel: string;
    readonly destructAnim: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._engineType = values["engine_type"];
      this._model = values["model"];
      this._gunAnimationTable = values["gun_animation_table"];
      this._missileWeapon = values["missile_weapon"];
      this._destructionAnimation = values["destruction_animation"];
      this.destroyedModel = values["destroyed_model"];
      this._battleEntity = values["battle_entity"];
      this.assetFolder = values["asset_folder"];
      this._variant = values["variant"];
      this.draughtAttachmentPoint = values["draught_attachment_point"];
      this.techFolder = values["tech_folder"];
      this.riderAttachmentPoint = values["rider_attachment_point"];
      this._firstPerson = values["first_person"];
      this.destructModel = values["destruct_model"];
      this.destructAnim = values["destruct_anim"];
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
    
    get battleEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._battleEntity);
    }
    
    get variant(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._variant);
    }
    
    get firstPerson(): FirstPersonEngines.Entry | undefined {
      const collection = <FirstPersonEngines.Entry[]>this.collectionCache.getCollection(FirstPersonEngines.KEY, FirstPersonEngines.Entry);
      return collection.find(entry => entry.key === this._firstPerson);
    }
  }
}

export default BattlefieldEngines;
