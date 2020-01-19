import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CcpSituationDeltas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly attacker: string;
        readonly defender: string;
        readonly flankingDelta: number;
        readonly forestDelta: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CcpSituationDeltas;
