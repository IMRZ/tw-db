import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Factions } from "./Factions";
import { FactionFeatureForests } from "./FactionFeatureForests";
export declare namespace CampaignFactionFeatureForestOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaign: string;
        readonly _faction: string;
        readonly _featureForest: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get featureForest(): FactionFeatureForests.Entry | undefined;
    }
}
export default CampaignFactionFeatureForestOverrides;
