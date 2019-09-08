import { CollectionCache, CollectionKey } from "../../../common";
import { Events } from "./Events";
import { Effects } from "./Effects";
export declare namespace EventsEffectsJunct {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _event: string;
        readonly _effect: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly event: Events.Entry | undefined;
        readonly effect: Effects.Entry | undefined;
    }
}
export default EventsEffectsJunct;
