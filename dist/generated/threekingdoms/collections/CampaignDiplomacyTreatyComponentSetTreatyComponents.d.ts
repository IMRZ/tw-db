import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyTreatyComponentSetTreatyComponentDirections } from "./CampaignDiplomacyTreatyComponentSetTreatyComponentDirections";
export declare namespace CampaignDiplomacyTreatyComponentSetTreatyComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _set: string;
        readonly _treatyComponent: string;
        readonly _direction: string;
        constructor(collectionCache: CollectionCache, values: any);
        get set(): CampaignDiplomacyTreatyComponentSets.Entry | undefined;
        get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get direction(): CampaignDiplomacyTreatyComponentSetTreatyComponentDirections.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentSetTreatyComponents;
