import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignRogueArmySpawnGroups } from "./CampaignRogueArmySpawnGroups";
import { Regions } from "./Regions";
export declare namespace CampaignRogueArmySpawnRegions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _group: string;
        readonly _region: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly group: CampaignRogueArmySpawnGroups.Entry | undefined;
        readonly region: Regions.Entry | undefined;
    }
}
export default CampaignRogueArmySpawnRegions;
