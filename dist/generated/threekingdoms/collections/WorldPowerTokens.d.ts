import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { CampaignDiplomacyAutomaticDealSituations } from "./CampaignDiplomacyAutomaticDealSituations";
import { Factions } from "./Factions";
export declare namespace WorldPowerTokens {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly _owningFactionEffectBundle: string;
        readonly _gainedDiplomaticDeal: string;
        readonly _gainedDiplomaticDealFaction: string;
        readonly _lostDiplomaticDeal: string;
        readonly _lostDiplomaticDealFaction: string;
        readonly localisedTitle: string;
        readonly localisedDescription: string;
        readonly captureChanceOnCapitalConquest: number;
        constructor(collectionCache: CollectionCache, values: any);
        get owningFactionEffectBundle(): EffectBundles.Entry | undefined;
        get gainedDiplomaticDeal(): CampaignDiplomacyAutomaticDealSituations.Entry | undefined;
        get gainedDiplomaticDealFaction(): Factions.Entry | undefined;
        get lostDiplomaticDeal(): CampaignDiplomacyAutomaticDealSituations.Entry | undefined;
        get lostDiplomaticDealFaction(): Factions.Entry | undefined;
    }
}
export default WorldPowerTokens;
