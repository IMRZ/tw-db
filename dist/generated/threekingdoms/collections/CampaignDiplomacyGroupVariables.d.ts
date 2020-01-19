import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";
export declare namespace CampaignDiplomacyGroupVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _variable: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignDiplomacyGroups.Entry | undefined;
        get variable(): CampaignDiplomacyVariables.Entry | undefined;
    }
}
export default CampaignDiplomacyGroupVariables;
