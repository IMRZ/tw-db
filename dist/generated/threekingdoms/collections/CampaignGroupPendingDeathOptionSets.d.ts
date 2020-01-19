import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CharacterPendingDeathOptionSets } from "./CharacterPendingDeathOptionSets";
export declare namespace CampaignGroupPendingDeathOptionSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _optionSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get optionSet(): CharacterPendingDeathOptionSets.Entry | undefined;
    }
}
export default CampaignGroupPendingDeathOptionSets;
