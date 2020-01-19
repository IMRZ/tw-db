import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyAllianceNameGroups } from "./CampaignDiplomacyAllianceNameGroups";
export declare namespace CampaignDiplomacyTreatyComponentAllianceNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treatyComponent: string;
        readonly _allianceNameGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get allianceNameGroup(): CampaignDiplomacyAllianceNameGroups.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentAllianceNames;
