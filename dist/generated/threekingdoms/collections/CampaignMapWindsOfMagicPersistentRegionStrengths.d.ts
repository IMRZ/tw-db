import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { CampaignMapWindsOfMagicStrengths } from "./CampaignMapWindsOfMagicStrengths";
export declare namespace CampaignMapWindsOfMagicPersistentRegionStrengths {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _region: string;
        readonly _strength: string;
        constructor(collectionCache: CollectionCache, values: any);
        get region(): Regions.Entry | undefined;
        get strength(): CampaignMapWindsOfMagicStrengths.Entry | undefined;
    }
}
export default CampaignMapWindsOfMagicPersistentRegionStrengths;
