import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosFactions } from "./StartPosFactions";
import { CaiPersonalityDiplomaticEvents } from "./CaiPersonalityDiplomaticEvents";
export declare namespace StartPosPastEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _source: number;
        readonly _target: number;
        readonly _event: string;
        readonly turnsAgo: number;
        readonly unique: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly source: StartPosFactions.Entry | undefined;
        readonly target: StartPosFactions.Entry | undefined;
        readonly event: CaiPersonalityDiplomaticEvents.Entry | undefined;
    }
}
export default StartPosPastEvents;
