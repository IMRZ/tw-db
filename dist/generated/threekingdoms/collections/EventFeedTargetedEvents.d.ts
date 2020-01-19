import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedEvents } from "./EventFeedEvents";
import { EventFeedGroups } from "./EventFeedGroups";
import { EventFeedStrings } from "./EventFeedStrings";
export declare namespace EventFeedTargetedEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _event: string;
        readonly _target: string;
        readonly persistent: boolean;
        readonly instantOpen: boolean;
        readonly title: string;
        readonly _primaryDetail: string;
        readonly icon: string;
        readonly _located: string;
        readonly _targetCriteria: string;
        readonly autoDismiss: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get event(): EventFeedEvents.Entry | undefined;
        get target(): EventFeedGroups.Entry | undefined;
        get primaryDetail(): EventFeedStrings.Entry | undefined;
        get located(): EventFeedGroups.Entry | undefined;
        get targetCriteria(): EventFeedGroups.Entry | undefined;
    }
}
export default EventFeedTargetedEvents;
