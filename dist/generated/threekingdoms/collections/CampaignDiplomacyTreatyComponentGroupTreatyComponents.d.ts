import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponentGroups } from "./CampaignDiplomacyTreatyComponentGroups";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CampaignDiplomacyTreatyComponentGroupTreatyComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _component: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignDiplomacyTreatyComponentGroups.Entry | undefined;
        get component(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentGroupTreatyComponents;
