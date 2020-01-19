import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopeTerritories } from "./CampaignEffectScopeTerritories";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";
export declare namespace CampaignEffectScopeTerritoryDiplomacyTreatyComponentSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _territory: string;
        readonly _diplomacyTreatyComponentSet: string;
        readonly territoryFactionHasSupersetOfSpecifiedSet: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get territory(): CampaignEffectScopeTerritories.Entry | undefined;
        get diplomacyTreatyComponentSet(): CampaignDiplomacyTreatyComponentSets.Entry | undefined;
    }
}
export default CampaignEffectScopeTerritoryDiplomacyTreatyComponentSets;
