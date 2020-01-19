import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { SettlementSiegeActionOutcomes } from "./SettlementSiegeActionOutcomes";
import { CampaignPostBattleCaptiveOptionIds } from "./CampaignPostBattleCaptiveOptionIds";
import { SettlementSiegeActionEffects } from "./SettlementSiegeActionEffects";
import { SettlementSiegeActionOptionTooltips } from "./SettlementSiegeActionOptionTooltips";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";
export declare namespace SettlementSiegeActionOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly settlementSiegeActionOption: string;
        readonly _group: string;
        readonly _outcome: string;
        readonly _captivesOption: string;
        readonly _effects: string;
        readonly icon: string;
        readonly _tooltip: string;
        readonly _currentOwnerEvent: string;
        readonly _newOwnerEvent: string;
        readonly displayOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignGroups.Entry | undefined;
        get outcome(): SettlementSiegeActionOutcomes.Entry | undefined;
        get captivesOption(): CampaignPostBattleCaptiveOptionIds.Entry | undefined;
        get effects(): SettlementSiegeActionEffects.Entry | undefined;
        get tooltip(): SettlementSiegeActionOptionTooltips.Entry | undefined;
        get currentOwnerEvent(): CaiDiplomacyEvents.Entry | undefined;
        get newOwnerEvent(): CaiDiplomacyEvents.Entry | undefined;
    }
}
export default SettlementSiegeActionOptions;
