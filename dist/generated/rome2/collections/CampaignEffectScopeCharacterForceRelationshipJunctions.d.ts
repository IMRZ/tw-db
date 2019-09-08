import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
import { CampaignEffectScopeCharacterForceRelationships } from "./CampaignEffectScopeCharacterForceRelationships";
export declare namespace CampaignEffectScopeCharacterForceRelationshipJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignEffectScopeKey: string;
        readonly _forceRelationshipKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignEffectScopeKey: CampaignEffectScopes.Entry | undefined;
        readonly forceRelationshipKey: CampaignEffectScopeCharacterForceRelationships.Entry | undefined;
    }
}
export default CampaignEffectScopeCharacterForceRelationshipJunctions;
