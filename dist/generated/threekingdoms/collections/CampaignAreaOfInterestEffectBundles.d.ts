import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignAreasOfInterest } from "./CampaignAreasOfInterest";
import { Regions } from "./Regions";
import { EffectBundles } from "./EffectBundles";
export declare namespace CampaignAreaOfInterestEffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignAreaOfInterest: string;
        readonly _region: string;
        readonly _effectBundle: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignAreaOfInterest(): CampaignAreasOfInterest.Entry | undefined;
        get region(): Regions.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default CampaignAreaOfInterestEffectBundles;
