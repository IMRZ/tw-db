import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Factions } from "./Factions";
export declare namespace CampaignGroupRebelShadowFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _shadowFaction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get shadowFaction(): Factions.Entry | undefined;
    }
}
export default CampaignGroupRebelShadowFactions;
