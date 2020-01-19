import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionOptions } from "./SettlementSiegeActionOptions";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";
export declare namespace SettlementSiegeActionOptionGiftSettlementToFactionWithWhomWeHaveTreatyComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _settlementSiegeActionOption: string;
        readonly _treatyComponentSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get settlementSiegeActionOption(): SettlementSiegeActionOptions.Entry | undefined;
        get treatyComponentSet(): CampaignDiplomacyTreatyComponentSets.Entry | undefined;
    }
}
export default SettlementSiegeActionOptionGiftSettlementToFactionWithWhomWeHaveTreatyComponents;
