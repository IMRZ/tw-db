import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapSettlements } from "./CampaignMapSettlements";
export declare namespace CampaignSettlementDisplaySettlementRotations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _settlement: string;
        readonly rotation: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly settlement: CampaignMapSettlements.Entry | undefined;
    }
}
export default CampaignSettlementDisplaySettlementRotations;
