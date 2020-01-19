import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntities } from "./BattleEntities";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
export declare namespace Mens {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _battleEntity: string;
        readonly _animation: string;
        readonly _additionalAnimation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get battleEntity(): BattleEntities.Entry | undefined;
        get animation(): BattleAnimationsTable.Entry | undefined;
        get additionalAnimation(): BattleAnimationsTable.Entry | undefined;
    }
}
export default Mens;
