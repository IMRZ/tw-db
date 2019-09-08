import { CollectionCache, CollectionKey } from "../../../common";
import { ChariotTypesEnums } from "./ChariotTypesEnums";
import { WarscapeAnimated } from "./WarscapeAnimated";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { WarscapeRigid } from "./WarscapeRigid";
import { BattleEntities } from "./BattleEntities";
export declare namespace BattlefieldChariots {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _chariotType: string;
        readonly _model: string;
        readonly _chariotAnimationTable: string;
        readonly _destructionAnimation: string;
        readonly _destroyedModel: string;
        readonly _battleEntity: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly chariotType: ChariotTypesEnums.Entry | undefined;
        readonly model: WarscapeAnimated.Entry | undefined;
        readonly chariotAnimationTable: BattleAnimationsTable.Entry | undefined;
        readonly destructionAnimation: WarscapeAnimated.Entry | undefined;
        readonly destroyedModel: WarscapeRigid.Entry | undefined;
        readonly battleEntity: BattleEntities.Entry | undefined;
    }
}
export default BattlefieldChariots;
