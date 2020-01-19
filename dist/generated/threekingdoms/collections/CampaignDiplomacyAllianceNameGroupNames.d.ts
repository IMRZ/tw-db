import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAllianceNameGroups } from "./CampaignDiplomacyAllianceNameGroups";
import { CampaignDiplomacyAllianceNames } from "./CampaignDiplomacyAllianceNames";
export declare namespace CampaignDiplomacyAllianceNameGroupNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _name: number;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignDiplomacyAllianceNameGroups.Entry | undefined;
        get name(): CampaignDiplomacyAllianceNames.Entry | undefined;
    }
}
export default CampaignDiplomacyAllianceNameGroupNames;
