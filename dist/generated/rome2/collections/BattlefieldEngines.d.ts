import { CollectionCache, CollectionKey } from "../../../common";
import { GunTypesEnum } from "./GunTypesEnum";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { MissileWeapons } from "./MissileWeapons";
import { WarscapeRigid } from "./WarscapeRigid";
import { BattleEntities } from "./BattleEntities";
export declare namespace BattlefieldEngines {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _engineType: string;
        readonly _model: string;
        readonly _gunAnimationTable: string;
        readonly _missileWeapon: string;
        readonly _destructionAnimation: string;
        readonly _destroyedModel: string;
        readonly _battleEntity: string;
        readonly canMove: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly engineType: GunTypesEnum.Entry | undefined;
        readonly model: WarscapeAnimated.Entry | undefined;
        readonly gunAnimationTable: BattleAnimationsTable.Entry | undefined;
        readonly missileWeapon: MissileWeapons.Entry | undefined;
        readonly destructionAnimation: WarscapeAnimated.Entry | undefined;
        readonly destroyedModel: WarscapeRigid.Entry | undefined;
        readonly battleEntity: BattleEntities.Entry | undefined;
    }
}
export default BattlefieldEngines;
