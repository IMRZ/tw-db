import { CollectionCache, CollectionKey } from "../../../common";
import { Cursors } from "./Cursors";
import { CursorMouseEvents } from "./CursorMouseEvents";
export declare namespace CursorTransitions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _initiatingCursor: string;
        readonly _resultingCursor: string;
        readonly _mouseEvent: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly initiatingCursor: Cursors.Entry | undefined;
        readonly resultingCursor: Cursors.Entry | undefined;
        readonly mouseEvent: CursorMouseEvents.Entry | undefined;
    }
}
export default CursorTransitions;
