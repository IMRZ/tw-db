import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionOptions } from "./SettlementSiegeActionOptions";
import { CampaignVfxCampaignVfxEventIds } from "./CampaignVfxCampaignVfxEventIds";
export declare namespace SettlementSiegeActionOptionCampaignVfxEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _settlementSiegeActionOption: string;
        readonly _campaignVfxEvent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get settlementSiegeActionOption(): SettlementSiegeActionOptions.Entry | undefined;
        get campaignVfxEvent(): CampaignVfxCampaignVfxEventIds.Entry | undefined;
    }
}
export default SettlementSiegeActionOptionCampaignVfxEvents;
