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
        get campaignEffectScopeKey(): CampaignEffectScopes.Entry | undefined;
        get forceRelationshipKey(): CampaignEffectScopeCharacterForceRelationships.Entry | undefined;
    }
}
export default CampaignEffectScopeCharacterForceRelationshipJunctions;
