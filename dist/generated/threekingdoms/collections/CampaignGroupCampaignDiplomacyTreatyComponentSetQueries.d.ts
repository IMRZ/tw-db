import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";
export declare namespace CampaignGroupCampaignDiplomacyTreatyComponentSetQueries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly system: string;
        readonly _sourceRequirement: string;
        readonly _sourceVariable: string;
        readonly _destinationRequirement: string;
        readonly _destinationVariable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get sourceRequirement(): CampaignDiplomacyGroups.Entry | undefined;
        get sourceVariable(): CampaignDiplomacyVariables.Entry | undefined;
        get destinationRequirement(): CampaignDiplomacyGroups.Entry | undefined;
        get destinationVariable(): CampaignDiplomacyVariables.Entry | undefined;
    }
}
export default CampaignGroupCampaignDiplomacyTreatyComponentSetQueries;
