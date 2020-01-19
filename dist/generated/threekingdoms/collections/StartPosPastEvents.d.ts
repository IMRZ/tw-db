import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";
export declare namespace StartPosPastEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _source: number;
        readonly _target: number;
        readonly _eventSource: string;
        readonly turnsAgo: number;
        readonly unique: boolean;
        readonly _eventTarget: string;
        constructor(collectionCache: CollectionCache, values: any);
        get source(): StartPosFactions.Entry | undefined;
        get target(): StartPosFactions.Entry | undefined;
        get eventSource(): CaiDiplomacyEvents.Entry | undefined;
        get eventTarget(): CaiDiplomacyEvents.Entry | undefined;
    }
}
export default StartPosPastEvents;
