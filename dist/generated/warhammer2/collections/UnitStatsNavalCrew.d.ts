import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntities } from "./BattleEntities";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { Projectiles } from "./Projectiles";
export declare namespace UnitStatsNavalCrew {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        get battleEntity(): BattleEntities.Entry | undefined;
        get soldierModel(): WarscapeAnimated.Entry | undefined;
        get manAnimationsTable(): BattleAnimationsTable.Entry | undefined;
        get missileType(): Projectiles.Entry | undefined;
    }
}
export default UnitStatsNavalCrew;
