import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Plagues } from "./Plagues";
import { EffectBundles } from "./EffectBundles";
export declare namespace CampaignGroupPlagueRegionEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _plague: string;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get plague(): Plagues.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default CampaignGroupPlagueRegionEffects;
