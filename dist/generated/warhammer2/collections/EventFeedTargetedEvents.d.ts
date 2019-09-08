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
        constructor(collectionCache: CollectionCache, values: any);
        readonly event: EventFeedEvents.Entry | undefined;
        readonly target: EventFeedGroups.Entry | undefined;
        readonly primaryDetail: EventFeedStrings.Entry | undefined;
        readonly located: EventFeedGroups.Entry | undefined;
        readonly targetCriteria: EventFeedGroups.Entry | undefined;
    }
}
export default EventFeedTargetedEvents;
