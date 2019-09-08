import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignRogueArmySpawnGroups } from "./CampaignRogueArmySpawnGroups";
export declare namespace CampaignRogueArmySpawnLocations {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _group: string;
        readonly positionX: number;
        readonly positionY: number;
        readonly radius: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly group: CampaignRogueArmySpawnGroups.Entry | undefined;
    }
}
export default CampaignRogueArmySpawnLocations;
