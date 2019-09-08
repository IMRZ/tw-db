import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleVortexCollisionResponses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly vortexCollisionType: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleVortexCollisionResponses;
