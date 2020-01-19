import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { FactionPotentialBonusValuePlayerFilters } from "./FactionPotentialBonusValuePlayerFilters";
export declare namespace CampaignFactionPotentialHandicapEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly factionPotentialMin: number;
        readonly factionPotentialMax: number;
        readonly _effect: string;
        readonly _effectScope: string;
        readonly campaignKey: string;
        readonly valueMin: number;
        readonly valueMax: number;
        readonly _appliedTo: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
        get appliedTo(): FactionPotentialBonusValuePlayerFilters.Entry | undefined;
    }
}
export default CampaignFactionPotentialHandicapEffects;
