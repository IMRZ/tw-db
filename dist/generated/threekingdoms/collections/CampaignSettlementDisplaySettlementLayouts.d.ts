import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapSettlements } from "./CampaignMapSettlements";
import { CampaignSettlementDisplaySettlementLayoutIds } from "./CampaignSettlementDisplaySettlementLayoutIds";
export declare namespace CampaignSettlementDisplaySettlementLayouts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _settlement: string;
        readonly _layout: string;
        constructor(collectionCache: CollectionCache, values: any);
        get settlement(): CampaignMapSettlements.Entry | undefined;
        get layout(): CampaignSettlementDisplaySettlementLayoutIds.Entry | undefined;
    }
}
export default CampaignSettlementDisplaySettlementLayouts;
