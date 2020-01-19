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
        constructor(collectionCache: CollectionCache, values: any);
        get event(): EventFeedEvents.Entry | undefined;
        get target(): EventFeedGroups.Entry | undefined;
        get group(): CampaignGroups.Entry | undefined;
        get secondaryDetail(): EventFeedStrings.Entry | undefined;
        get flavourText(): EventFeedStrings.Entry | undefined;
        get layout(): MessageEventLayoutTypes.Entry | undefined;
        get layoutData(): EventFeedGroups.Entry | undefined;
        get contextLocated(): EventFeedGroups.Entry | undefined;
    }
}
export default EventFeedMessageEvents;
