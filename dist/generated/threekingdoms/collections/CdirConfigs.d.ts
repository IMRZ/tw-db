import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CdirConfigValues } from "./CdirConfigValues";
export declare namespace CdirConfigs {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _cdirConfigKey: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get cdirConfigKey(): CdirConfigValues.Entry | undefined;
    }
}
export default CdirConfigs;
