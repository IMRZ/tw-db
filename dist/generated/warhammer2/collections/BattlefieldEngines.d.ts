import { CollectionCache, CollectionKey } from "../../../common";
import { GunTypesEnum } from "./GunTypesEnum";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { MissileWeapons } from "./MissileWeapons";
import { BattleEntities } from "./BattleEntities";
import { Variants } from "./Variants";
import { FirstPersonEngines } from "./FirstPersonEngines";
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
        readonly destructMeta: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly engineType: GunTypesEnum.Entry | undefined;
        readonly model: WarscapeAnimated.Entry | undefined;
        readonly gunAnimationTable: BattleAnimationsTable.Entry | undefined;
        readonly missileWeapon: MissileWeapons.Entry | undefined;
        readonly destructionAnimation: WarscapeAnimated.Entry | undefined;
        readonly battleEntity: BattleEntities.Entry | undefined;
        readonly variant: Variants.Entry | undefined;
        readonly firstPerson: FirstPersonEngines.Entry | undefined;
    }
}
export default BattlefieldEngines;
