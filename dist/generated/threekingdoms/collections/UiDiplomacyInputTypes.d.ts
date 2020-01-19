import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiDiplomacyInputTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly panelPath: string;
        readonly ignoreDealEvaluation: boolean;
        readonly ignoreAvailability: boolean;
        readonly showTradeInformation: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiDiplomacyInputTypes;
