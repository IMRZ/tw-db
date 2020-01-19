import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace VictoryTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly victoryType: string;
        readonly displayName: string;
        readonly treeY: number;
        readonly treeX: number;
        readonly icon: string;
        readonly lengthType: string;
        readonly isMpCoopCompletable: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default VictoryTypes;
