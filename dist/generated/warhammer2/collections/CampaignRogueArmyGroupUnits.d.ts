import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignRogueArmyGroups } from "./CampaignRogueArmyGroups";
import { MainUnits } from "./MainUnits";
export declare namespace CampaignRogueArmyGroupUnits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _group: string;
        readonly _unit: string;
        readonly xp: number;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignRogueArmyGroups.Entry | undefined;
        get unit(): MainUnits.Entry | undefined;
    }
}
export default CampaignRogueArmyGroupUnits;
