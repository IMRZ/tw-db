import { CollectionCache, CollectionKey } from "../../../common";
import { GovernmentTypes } from "./GovernmentTypes";
import { Effects } from "./Effects";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace GovernmentTypesToEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _govType: string;
        readonly _effect: string;
        readonly value: number;
        readonly _effectScope: string;
        constructor(collectionCache: CollectionCache, values: any);
        get govType(): GovernmentTypes.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default GovernmentTypesToEffects;
