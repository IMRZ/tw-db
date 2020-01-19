import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CharacterAssignments } from "./CharacterAssignments";
export declare namespace CampaignGroupCharacterAssignments {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _assignment: string;
        readonly isTargetTypeDefault: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get assignment(): CharacterAssignments.Entry | undefined;
    }
}
export default CampaignGroupCharacterAssignments;
