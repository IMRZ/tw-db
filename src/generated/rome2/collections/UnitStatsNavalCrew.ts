
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntities } from "./BattleEntities";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { Projectiles } from "./Projectiles";

export namespace UnitStatsNavalCrew {
  export const KEY = new CollectionKey("unit_stats_naval_crew");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly unitType: string;
    readonly coreLoadingSkill: number;
    readonly coreMarksmanship: number;
    readonly meleeAttack: number;
    readonly meleeDefence: number;
    readonly meleeWeaponType: string;
    readonly pistols: boolean;
    readonly ammo: number;
    readonly _battleEntity: string;
    readonly _soldierModel: string;
    readonly _manAnimationsTable: string;
    readonly equipmentTheme: string;
    readonly armourAudio: string;
    readonly armour: number;
    readonly spacing: number;
    readonly discipline: number;
    readonly _missileType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.unitType = values["unit_type"];
      this.coreLoadingSkill = values["core_loading_skill"];
      this.coreMarksmanship = values["core_marksmanship"];
      this.meleeAttack = values["melee_attack"];
      this.meleeDefence = values["melee_defence"];
      this.meleeWeaponType = values["melee_weapon_type"];
      this.pistols = !!values["pistols"];
      this.ammo = values["ammo"];
      this._battleEntity = values["battle_entity"];
      this._soldierModel = values["soldier_model"];
      this._manAnimationsTable = values["man_animations_table"];
      this.equipmentTheme = values["equipment_theme"];
      this.armourAudio = values["armour_audio"];
      this.armour = values["armour"];
      this.spacing = values["spacing"];
      this.discipline = values["discipline"];
      this._missileType = values["missile_type"];
    }
    
    get battleEntity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._battleEntity);
    }
    
    get soldierModel(): WarscapeAnimated.Entry | undefined {
      const collection = <WarscapeAnimated.Entry[]>this.collectionCache.getCollection(WarscapeAnimated.KEY, WarscapeAnimated.Entry);
      return collection.find(entry => entry.key === this._soldierModel);
    }
    
    get manAnimationsTable(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._manAnimationsTable);
    }
    
    get missileType(): Projectiles.Entry | undefined {
      const collection = <Projectiles.Entry[]>this.collectionCache.getCollection(Projectiles.KEY, Projectiles.Entry);
      return collection.find(entry => entry.key === this._missileType);
    }
  }
}

export default UnitStatsNavalCrew;
