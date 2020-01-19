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
        get campaignEffectScopeKey(): CampaignEffectScopes.Entry | undefined;
        get unitRelationshipKey(): CampaignEffectScopeCharacterUnitRelationships.Entry | undefined;
    }
}
export default CampaignEffectScopeCharacterUnitRelationshipJunctions;
