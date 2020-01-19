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
        get factionKey(): Factions.Entry | undefined;
        get mpCoopGroup(): CampaignMpCoopGroups.Entry | undefined;
    }
}
export default CampaignMpCoopGroupsToFactions;
