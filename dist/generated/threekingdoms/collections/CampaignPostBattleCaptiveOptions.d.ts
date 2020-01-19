import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignPostBattleCaptiveOptionIds } from "./CampaignPostBattleCaptiveOptionIds";
import { CampaignGroups } from "./CampaignGroups";
import { EffectBundles } from "./EffectBundles";
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
        readonly soundEvent: string;
        readonly moralePenaltyPerArmy: number;
        constructor(collectionCache: CollectionCache, values: any);
        get captiveOption(): CampaignPostBattleCaptiveOptionIds.Entry | undefined;
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default CampaignPostBattleCaptiveOptions;
