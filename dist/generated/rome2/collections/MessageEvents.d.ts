import { CollectionCache, CollectionKey } from "../../../common";
import { MessageEventLayoutTypes } from "./MessageEventLayoutTypes";
export declare namespace MessageEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly event: string;
        readonly _layout: string;
        readonly requiresResponse: boolean;
        readonly instantOpen: boolean;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly layout: MessageEventLayoutTypes.Entry | undefined;
    }
}
export default MessageEvents;
