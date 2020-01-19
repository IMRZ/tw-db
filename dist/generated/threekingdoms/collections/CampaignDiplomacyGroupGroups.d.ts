import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";
export declare namespace CampaignDiplomacyGroupGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _parentGroup: string;
        readonly _childGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get parentGroup(): CampaignDiplomacyGroups.Entry | undefined;
        get childGroup(): CampaignDiplomacyGroups.Entry | undefined;
    }
}
export default CampaignDiplomacyGroupGroups;
