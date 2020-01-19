import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CcpUnitVsUnitDeltas {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly attacker: string;
        readonly defender: string;
        readonly cpDeltaVsDefender: number;
        readonly cpDeltaVsAttacker: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CcpUnitVsUnitDeltas;
