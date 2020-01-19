import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { PooledResources } from "./PooledResources";
import { Campaigns } from "./Campaigns";
export declare namespace UiPrimaryFactionPooledResources {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _pooledResource: string;
        readonly _optionalCampaignKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get pooledResource(): PooledResources.Entry | undefined;
        get optionalCampaignKey(): Campaigns.Entry | undefined;
    }
}
export default UiPrimaryFactionPooledResources;
