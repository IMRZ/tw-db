import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { CampaignEffectScopeCharacterUnitRelationships } from "./CampaignEffectScopeCharacterUnitRelationships";
export declare namespace CampaignEffectScopeCharacterUnitRelationshipJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignEffectScopeKey: string;
        readonly _unitRelationshipKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignEffectScopeKey: CampaignEffectScopes.Entry | undefined;
        readonly unitRelationshipKey: CampaignEffectScopeCharacterUnitRelationships.Entry | undefined;
    }
}
export default CampaignEffectScopeCharacterUnitRelationshipJunctions;
