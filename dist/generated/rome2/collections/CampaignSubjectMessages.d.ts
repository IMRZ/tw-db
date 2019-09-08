import { CollectionCache, CollectionKey } from "../../../common";
import { MessageEvents } from "./MessageEvents";
export declare namespace CampaignSubjectMessages {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _messageType: string;
        readonly optionalText: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly messageType: MessageEvents.Entry | undefined;
    }
}
export default CampaignSubjectMessages;
