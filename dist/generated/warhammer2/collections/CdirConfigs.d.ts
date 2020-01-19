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
        get campaignKey(): CdirCampaignJunctions.Entry | undefined;
        get factionKey(): CdirFactionJunctions.Entry | undefined;
        get cdirConfigKey(): CdirConfigValues.Entry | undefined;
    }
}
export default CdirConfigs;
