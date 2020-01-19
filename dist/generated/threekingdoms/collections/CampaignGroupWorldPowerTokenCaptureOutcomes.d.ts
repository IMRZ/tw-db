import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { WorldPowerTokenCaptureOutcomes } from "./WorldPowerTokenCaptureOutcomes";
export declare namespace CampaignGroupWorldPowerTokenCaptureOutcomes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _outcome: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get outcome(): WorldPowerTokenCaptureOutcomes.Entry | undefined;
    }
}
export default CampaignGroupWorldPowerTokenCaptureOutcomes;
