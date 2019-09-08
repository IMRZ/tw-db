import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedGroups } from "./EventFeedGroups";
export declare namespace EventFeedGroupMembers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly member: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly group: EventFeedGroups.Entry | undefined;
    }
}
export default EventFeedGroupMembers;
