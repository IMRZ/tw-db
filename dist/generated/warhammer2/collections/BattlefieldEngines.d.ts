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
        get engineType(): GunTypesEnum.Entry | undefined;
        get model(): WarscapeAnimated.Entry | undefined;
        get gunAnimationTable(): BattleAnimationsTable.Entry | undefined;
        get missileWeapon(): MissileWeapons.Entry | undefined;
        get destructionAnimation(): WarscapeAnimated.Entry | undefined;
        get battleEntity(): BattleEntities.Entry | undefined;
        get variant(): Variants.Entry | undefined;
        get firstPerson(): FirstPersonEngines.Entry | undefined;
    }
}
export default BattlefieldEngines;
