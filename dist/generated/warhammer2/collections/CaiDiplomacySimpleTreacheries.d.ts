import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDiplomaticEvents } from "./CaiPersonalityDiplomaticEvents";
export declare namespace CaiDiplomacySimpleTreacheries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _event: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get event(): CaiPersonalityDiplomaticEvents.Entry | undefined;
    }
}
export default CaiDiplomacySimpleTreacheries;
