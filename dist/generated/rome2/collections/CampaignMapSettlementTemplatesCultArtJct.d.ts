import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapSettlementTemplates } from "./CampaignMapSettlementTemplates";
import { Cultures } from "./Cultures";
export declare namespace CampaignMapSettlementTemplatesCultArtJct {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _settlementTemplate: string;
        readonly _culture: string;
        readonly artpiece: string;
        constructor(collectionCache: CollectionCache, values: any);
        get settlementTemplate(): CampaignMapSettlementTemplates.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
    }
}
export default CampaignMapSettlementTemplatesCultArtJct;
