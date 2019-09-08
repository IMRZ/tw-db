import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementClimateTypes } from "./SettlementClimateTypes";
export declare namespace CampaignMapSettlements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly settlementId: string;
        readonly _climateType: string;
        readonly citybarHeightOffset: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly climateType: SettlementClimateTypes.Entry | undefined;
    }
}
export default CampaignMapSettlements;
