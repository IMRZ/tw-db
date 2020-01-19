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
        get type(): NameTypes.Entry | undefined;
        get faction(): Factions.Entry | undefined;
    }
}
export default NameOrderOverrides;
