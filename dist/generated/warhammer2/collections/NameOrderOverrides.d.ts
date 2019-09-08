import { CollectionCache, CollectionKey } from "../../../common";
import { NameTypes } from "./NameTypes";
import { Factions } from "./Factions";
export declare namespace NameOrderOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _type: string;
        readonly order: number;
        readonly _faction: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly type: NameTypes.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
    }
}
export default NameOrderOverrides;
