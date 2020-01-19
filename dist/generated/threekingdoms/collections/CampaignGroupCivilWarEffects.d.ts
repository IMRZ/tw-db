import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";
export declare namespace CampaignGroupCivilWarEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _startEffects: string;
        readonly startEffectDuration: number;
        readonly _persistentEffects: string;
        readonly _winEffects: string;
        readonly winEffectDuration: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get startEffects(): EffectBundles.Entry | undefined;
        get persistentEffects(): EffectBundles.Entry | undefined;
        get winEffects(): EffectBundles.Entry | undefined;
    }
}
export default CampaignGroupCivilWarEffects;
