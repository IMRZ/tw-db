import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiDiplomacyParticipants {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly participant: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiDiplomacyParticipants;
