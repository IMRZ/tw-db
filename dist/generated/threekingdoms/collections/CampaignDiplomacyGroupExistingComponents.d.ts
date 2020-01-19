import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";
import { CampaignDiplomacyExistingComponents } from "./CampaignDiplomacyExistingComponents";
import { CampaignDiplomacyTreatyComponentStates } from "./CampaignDiplomacyTreatyComponentStates";
export declare namespace CampaignDiplomacyGroupExistingComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _group: string;
        readonly _existingComponent: string;
        readonly _componentState: string;
        constructor(collectionCache: CollectionCache, values: any);
        get group(): CampaignDiplomacyGroups.Entry | undefined;
        get existingComponent(): CampaignDiplomacyExistingComponents.Entry | undefined;
        get componentState(): CampaignDiplomacyTreatyComponentStates.Entry | undefined;
    }
}
export default CampaignDiplomacyGroupExistingComponents;
