import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CaptiveOptionSets } from "./CaptiveOptionSets";
export declare namespace CampaignGroupCaptiveOptionSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _captiveOptionSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get captiveOptionSet(): CaptiveOptionSets.Entry | undefined;
    }
}
export default CampaignGroupCaptiveOptionSets;
