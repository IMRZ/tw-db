import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPostBattleCaptiveOptionIds } from "./CampaignPostBattleCaptiveOptionIds";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";
import { ResourceCosts } from "./ResourceCosts";
export declare namespace CampaignPostBattleCaptiveOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _captiveOption: string;
        readonly _campaignGroup: string;
        readonly _effectBundle: string;
        readonly onscreenName: string;
        readonly effectBundleTurns: number;
        readonly iconPath: string;
        readonly description: string;
        readonly _resourceTransaction: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly captiveOption: CampaignPostBattleCaptiveOptionIds.Entry | undefined;
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly effectBundle: EffectBundles.Entry | undefined;
        readonly resourceTransaction: ResourceCosts.Entry | undefined;
    }
}
export default CampaignPostBattleCaptiveOptions;
