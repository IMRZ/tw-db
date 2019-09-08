import { CollectionCache, CollectionKey } from "../../../common";
import { TexcExpansions } from "./TexcExpansions";
export declare namespace TriggerEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly event: string;
        readonly fromUi: boolean;
        readonly _gameExpansionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly gameExpansionKey: TexcExpansions.Entry | undefined;
    }
}
export default TriggerEvents;
