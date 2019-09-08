import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";
import { DiplomacyComponents } from "./DiplomacyComponents";
import { StartPosDiplomacyDetails } from "./StartPosDiplomacyDetails";
export declare namespace StartPosDiplomacyDealComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _deal: string;
        readonly _component: string;
        readonly _details: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly deal: StartPosDiplomacyDeals.Entry | undefined;
        readonly component: DiplomacyComponents.Entry | undefined;
        readonly details: StartPosDiplomacyDetails.Entry | undefined;
    }
}
export default StartPosDiplomacyDealComponents;
