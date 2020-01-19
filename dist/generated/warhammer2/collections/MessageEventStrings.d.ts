import { CollectionCache, CollectionKey } from "../../../common";
import { MessageEvents } from "./MessageEvents";
import { Cultures } from "./Cultures";
import { MessageEventText } from "./MessageEventText";
import { Campaigns } from "./Campaigns";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace MessageEventStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _event: string;
        readonly _culture: string;
        readonly title: string;
        readonly _text: string;
        readonly image: string;
        readonly icon: string;
        readonly soundEvent: string;
        readonly _optionalCampaignKey: string;
        readonly _optionalSubculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get event(): MessageEvents.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get text(): MessageEventText.Entry | undefined;
        get optionalCampaignKey(): Campaigns.Entry | undefined;
        get optionalSubculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default MessageEventStrings;
