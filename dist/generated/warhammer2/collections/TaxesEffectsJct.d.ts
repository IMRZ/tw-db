import { CollectionCache, CollectionKey } from "../../../common";
import { TaxesKeys } from "./TaxesKeys";
import { Effects } from "./Effects";
import { Campaigns } from "./Campaigns";
import { CampaignEffectScopes } from "./CampaignEffectScopes";
export declare namespace TaxesEffectsJct {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _taxName: string;
        readonly _effect: string;
        readonly value: number;
        readonly _optionalCampaignKey: string;
        readonly optionalDifficultyLevel: string;
        readonly aiOnly: boolean;
        readonly _effectScope: string;
        readonly _specificFeatureSet: any;
        constructor(collectionCache: CollectionCache, values: any);
        get taxName(): TaxesKeys.Entry | undefined;
        get effect(): Effects.Entry | undefined;
        get optionalCampaignKey(): Campaigns.Entry | undefined;
        get effectScope(): CampaignEffectScopes.Entry | undefined;
    }
}
export default TaxesEffectsJct;
