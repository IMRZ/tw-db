import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedEvents } from "./EventFeedEvents";
export declare namespace EventFeedSummaryEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _event: string;
        readonly title: string;
        readonly icon: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly event: EventFeedEvents.Entry | undefined;
    }
}
export default EventFeedSummaryEvents;
