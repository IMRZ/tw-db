import { CollectionCache, CollectionKey } from "../../../common";
import { VictoryTypes } from "./VictoryTypes";
export declare namespace VictoryTypeLinks {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _from: string;
        readonly _to: string;
        constructor(collectionCache: CollectionCache, values: any);
        get from(): VictoryTypes.Entry | undefined;
        get to(): VictoryTypes.Entry | undefined;
    }
}
export default VictoryTypeLinks;
