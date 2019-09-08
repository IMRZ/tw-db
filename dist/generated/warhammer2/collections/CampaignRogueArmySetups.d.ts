import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { CampaignRogueArmyGroups } from "./CampaignRogueArmyGroups";
export declare namespace CampaignRogueArmySetups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly difficultyLevel: number;
        readonly _group: string;
        readonly budget: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly faction: Factions.Entry | undefined;
        readonly group: CampaignRogueArmyGroups.Entry | undefined;
    }
}
export default CampaignRogueArmySetups;
