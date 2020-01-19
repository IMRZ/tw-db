import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PostAnnexationOptions } from "./PostAnnexationOptions";
export declare namespace CampaignGroupPostAnnexationOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _postAnnexationOption: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get postAnnexationOption(): PostAnnexationOptions.Entry | undefined;
    }
}
export default CampaignGroupPostAnnexationOptions;
