import { CollectionCache, CollectionKey } from "../../../common";
import { NameTypes } from "./NameTypes";
import { NamesGroups } from "./NamesGroups";
export declare namespace NameOrders {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _type: string;
        readonly order: number;
        readonly _nameGroup: number;
        constructor(collectionCache: CollectionCache, values: any);
        get type(): NameTypes.Entry | undefined;
        get nameGroup(): NamesGroups.Entry | undefined;
    }
}
export default NameOrders;
