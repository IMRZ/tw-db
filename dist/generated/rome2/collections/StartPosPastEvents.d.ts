import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { CaiPersonalityDiplomaticEvents } from "./CaiPersonalityDiplomaticEvents";
export declare namespace StartPosPastEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _source: string;
        readonly _target: string;
        readonly _event: string;
        readonly turnsAgo: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly source: Factions.Entry | undefined;
        readonly target: Factions.Entry | undefined;
        readonly event: CaiPersonalityDiplomaticEvents.Entry | undefined;
    }
}
export default StartPosPastEvents;
