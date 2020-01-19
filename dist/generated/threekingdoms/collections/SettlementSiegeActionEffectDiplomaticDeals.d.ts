import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";
import { CampaignDiplomacyAutomaticDealSituations } from "./CampaignDiplomacyAutomaticDealSituations";
export declare namespace SettlementSiegeActionEffectDiplomaticDeals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effectGroup: string;
        readonly _diplomaticDeal: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined;
        get diplomaticDeal(): CampaignDiplomacyAutomaticDealSituations.Entry | undefined;
    }
}
export default SettlementSiegeActionEffectDiplomaticDeals;
