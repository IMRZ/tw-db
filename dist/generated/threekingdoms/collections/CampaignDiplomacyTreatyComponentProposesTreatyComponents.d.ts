import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyExistingComponents } from "./CampaignDiplomacyExistingComponents";
export declare namespace CampaignDiplomacyTreatyComponentProposesTreatyComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _originalComponent: string;
        readonly _proposesAdditionalComponent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get originalComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get proposesAdditionalComponent(): CampaignDiplomacyExistingComponents.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentProposesTreatyComponents;
