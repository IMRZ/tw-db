import { CollectionCache, CollectionKey } from "../../../common";
import { EventFeedEvents } from "./EventFeedEvents";
import { EventFeedGroups } from "./EventFeedGroups";
import { CampaignGroups } from "./CampaignGroups";
import { EventFeedStrings } from "./EventFeedStrings";
import { MessageEventLayoutTypes } from "./MessageEventLayoutTypes";
export declare namespace EventFeedMessageEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _event: string;
        readonly _target: string;
        readonly _group: string;
        readonly _secondaryDetail: string;
        readonly _flavourText: string;
        readonly image: string;
        readonly _layout: string;
        readonly _layoutData: string;
        readonly soundEvent: string;
        readonly _contextLocated: string;
        readonly overrideIcon: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly event: EventFeedEvents.Entry | undefined;
        readonly target: EventFeedGroups.Entry | undefined;
        readonly group: CampaignGroups.Entry | undefined;
        readonly secondaryDetail: EventFeedStrings.Entry | undefined;
        readonly flavourText: EventFeedStrings.Entry | undefined;
        readonly layout: MessageEventLayoutTypes.Entry | undefined;
        readonly layoutData: EventFeedGroups.Entry | undefined;
        readonly contextLocated: EventFeedGroups.Entry | undefined;
    }
}
export default EventFeedMessageEvents;
