import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPayloads } from "./CampaignPayloads";
import { LoyaltyEffects } from "./LoyaltyEffects";
import { CampaignPayloadLoyaltyScopes } from "./CampaignPayloadLoyaltyScopes";
import { CeoSets } from "./CeoSets";
export declare namespace CampaignPayloadLoyaltyEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _payload: string;
        readonly _loyaltyEffect: string;
        readonly _scope: string;
        readonly _requiredCharacterCeos: string;
        constructor(collectionCache: CollectionCache, values: any);
        get payload(): CampaignPayloads.Entry | undefined;
        get loyaltyEffect(): LoyaltyEffects.Entry | undefined;
        get scope(): CampaignPayloadLoyaltyScopes.Entry | undefined;
        get requiredCharacterCeos(): CeoSets.Entry | undefined;
    }
}
export default CampaignPayloadLoyaltyEffects;
