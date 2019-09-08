import { CollectionCache, CollectionKey } from "../../../common";
import { CdirCampaignJunctions } from "./CdirCampaignJunctions";
import { CdirFactionJunctions } from "./CdirFactionJunctions";
import { CdirConfigValues } from "./CdirConfigValues";
export declare namespace CdirConfigs {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignKey: string;
        readonly _factionKey: string;
        readonly _cdirConfigKey: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignKey: CdirCampaignJunctions.Entry | undefined;
        readonly factionKey: CdirFactionJunctions.Entry | undefined;
        readonly cdirConfigKey: CdirConfigValues.Entry | undefined;
    }
}
export default CdirConfigs;
