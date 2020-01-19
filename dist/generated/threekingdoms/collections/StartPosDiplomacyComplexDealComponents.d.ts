import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyComplexDeals } from "./StartPosDiplomacyComplexDeals";
import { StartPosFactions } from "./StartPosFactions";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace StartPosDiplomacyComplexDealComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _deal: string;
        readonly _proposer: number;
        readonly _recipient: number;
        readonly _component: string;
        constructor(collectionCache: CollectionCache, values: any);
        get deal(): StartPosDiplomacyComplexDeals.Entry | undefined;
        get proposer(): StartPosFactions.Entry | undefined;
        get recipient(): StartPosFactions.Entry | undefined;
        get component(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default StartPosDiplomacyComplexDealComponents;
