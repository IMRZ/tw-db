import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { CampaignMapSettlementTemplates } from "./CampaignMapSettlementTemplates";
import { Slots } from "./Slots";
export declare namespace CampaignMapSettlements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly settlementId: string;
        readonly _region: string;
        readonly defaultOnscreenName: string;
        readonly _templateName: string;
        readonly slotCount: number;
        readonly _slotType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly region: Regions.Entry | undefined;
        readonly templateName: CampaignMapSettlementTemplates.Entry | undefined;
        readonly slotType: Slots.Entry | undefined;
    }
}
export default CampaignMapSettlements;
