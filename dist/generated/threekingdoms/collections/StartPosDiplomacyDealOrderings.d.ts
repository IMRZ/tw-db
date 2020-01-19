import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";
export declare namespace StartPosDiplomacyDealOrderings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly order: number;
        readonly _deal: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): StartPosDiplomacyDeals.Entry | undefined;
    }
}
export default StartPosDiplomacyDealOrderings;
