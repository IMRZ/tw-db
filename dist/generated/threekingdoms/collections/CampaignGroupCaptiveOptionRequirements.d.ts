import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CaptiveOptions } from "./CaptiveOptions";
import { CaptiveOptionRequirements } from "./CaptiveOptionRequirements";
export declare namespace CampaignGroupCaptiveOptionRequirements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _captiveOption: string;
        readonly _requirements: string;
        readonly priority: number;
        readonly displayText: string;
        readonly enablesOption: boolean;
        readonly customTooltip: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get captiveOption(): CaptiveOptions.Entry | undefined;
        get requirements(): CaptiveOptionRequirements.Entry | undefined;
    }
}
export default CampaignGroupCaptiveOptionRequirements;
