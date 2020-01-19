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
export declare namespace CeosToEquipmentVariants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        get ceosKey(): Ceos.Entry | undefined;
        get maleVmd(): Variants.Entry | undefined;
        get femaleVmd(): Variants.Entry | undefined;
        get armour(): UnitArmourTypes.Entry | undefined;
        get primaryMeleeWeapon(): MeleeWeapons.Entry | undefined;
        get shield(): UnitShieldTypes.Entry | undefined;
        get primaryMissileWeapon(): MissileWeapons.Entry | undefined;
        get mount(): Mounts.Entry | undefined;
        get manAnimation(): BattleAnimationsTable.Entry | undefined;
        get mountAnimation(): BattleAnimationsTable.Entry | undefined;
        get gameMode(): GameModes.Entry | undefined;
        get secondaryWeaponAnimation(): BattleAnimationsTable.Entry | undefined;
    }
}
export default CeosToEquipmentVariants;
