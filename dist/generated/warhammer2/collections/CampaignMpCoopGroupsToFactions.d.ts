import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { CampaignMpCoopGroups } from "./CampaignMpCoopGroups";
export declare namespace CampaignMpCoopGroupsToFactions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionKey: string;
        readonly _mpCoopGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly factionKey: Factions.Entry | undefined;
        readonly mpCoopGroup: CampaignMpCoopGroups.Entry | undefined;
    }
}
export default CampaignMpCoopGroupsToFactions;
