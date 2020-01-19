import { CollectionCache, CollectionKey } from "../../../common";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { WarscapeRigid } from "./WarscapeRigid";
import { BattleEntities } from "./BattleEntities";
export declare namespace GunTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly gunType: string;
        readonly _battleEntity: any;
        readonly _model: string;
        readonly _gunAnimationsTable: string;
        readonly equipmentTable: string;
        readonly _destroyedModel: string;
        readonly _destructionAnimation: any;
        readonly _engineType: any;
        readonly _gunMountEntity: string;
        constructor(collectionCache: CollectionCache, values: any);
        get model(): WarscapeAnimated.Entry | undefined;
        get gunAnimationsTable(): BattleAnimationsTable.Entry | undefined;
        get destroyedModel(): WarscapeRigid.Entry | undefined;
        get gunMountEntity(): BattleEntities.Entry | undefined;
    }
}
export default GunTypes;
