
import { CollectionCache, CollectionKey } from "../../../common";
import { Ceos } from "./Ceos";
import { Variants } from "./Variants";
import { UnitArmourTypes } from "./UnitArmourTypes";
import { MeleeWeapons } from "./MeleeWeapons";
import { UnitShieldTypes } from "./UnitShieldTypes";
import { MissileWeapons } from "./MissileWeapons";
import { Mounts } from "./Mounts";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { GameModes } from "./GameModes";

export namespace CeosToEquipmentVariants {
  export const KEY = new CollectionKey("ceos_to_equipment_variants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ceosKey: string;
    readonly _maleVmd: string;
    readonly _femaleVmd: string;
    readonly _armour: string;
    readonly _primaryMeleeWeapon: string;
    readonly _shield: string;
    readonly _primaryMissileWeapon: string;
    readonly _mount: string;
    readonly _manAnimation: string;
    readonly _mountAnimation: string;
    readonly _gameMode: string;
    readonly _secondaryWeaponAnimation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ceosKey = values["ceos_key"];
      this._maleVmd = values["male_vmd"];
      this._femaleVmd = values["female_vmd"];
      this._armour = values["armour"];
      this._primaryMeleeWeapon = values["primary_melee_weapon"];
      this._shield = values["shield"];
      this._primaryMissileWeapon = values["primary_missile_weapon"];
      this._mount = values["mount"];
      this._manAnimation = values["man_animation"];
      this._mountAnimation = values["mount_animation"];
      this._gameMode = values["game_mode"];
      this._secondaryWeaponAnimation = values["secondary_weapon_animation"];
    }
    
    get ceosKey(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceosKey);
    }
    
    get maleVmd(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._maleVmd);
    }
    
    get femaleVmd(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._femaleVmd);
    }
    
    get armour(): UnitArmourTypes.Entry | undefined {
      const collection = <UnitArmourTypes.Entry[]>this.collectionCache.getCollection(UnitArmourTypes.KEY, UnitArmourTypes.Entry);
      return collection.find(entry => entry.key === this._armour);
    }
    
    get primaryMeleeWeapon(): MeleeWeapons.Entry | undefined {
      const collection = <MeleeWeapons.Entry[]>this.collectionCache.getCollection(MeleeWeapons.KEY, MeleeWeapons.Entry);
      return collection.find(entry => entry.key === this._primaryMeleeWeapon);
    }
    
    get shield(): UnitShieldTypes.Entry | undefined {
      const collection = <UnitShieldTypes.Entry[]>this.collectionCache.getCollection(UnitShieldTypes.KEY, UnitShieldTypes.Entry);
      return collection.find(entry => entry.key === this._shield);
    }
    
    get primaryMissileWeapon(): MissileWeapons.Entry | undefined {
      const collection = <MissileWeapons.Entry[]>this.collectionCache.getCollection(MissileWeapons.KEY, MissileWeapons.Entry);
      return collection.find(entry => entry.key === this._primaryMissileWeapon);
    }
    
    get mount(): Mounts.Entry | undefined {
      const collection = <Mounts.Entry[]>this.collectionCache.getCollection(Mounts.KEY, Mounts.Entry);
      return collection.find(entry => entry.key === this._mount);
    }
    
    get manAnimation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._manAnimation);
    }
    
    get mountAnimation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._mountAnimation);
    }
    
    get gameMode(): GameModes.Entry | undefined {
      const collection = <GameModes.Entry[]>this.collectionCache.getCollection(GameModes.KEY, GameModes.Entry);
      return collection.find(entry => entry.key === this._gameMode);
    }
    
    get secondaryWeaponAnimation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._secondaryWeaponAnimation);
    }
  }
}

export default CeosToEquipmentVariants;
