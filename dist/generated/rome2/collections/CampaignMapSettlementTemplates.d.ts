import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignMapSettlementTemplates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly templateName: string;
        readonly slotTotal: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignMapSettlementTemplates;
