import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";
export declare namespace CampaignMissionObjectiveTreatyComponentSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _treatyComponents: string;
        readonly descriptionSingular: string;
        readonly descriptionNotSingular: string;
        readonly descriptionAny: string;
        readonly descriptionNone: string;
        readonly descriptionOneOf: string;
        readonly descriptionAllOf: string;
        readonly descriptionNoneOf: string;
        readonly descriptionNOf: string;
        readonly descriptionNIncluding: string;
        readonly descriptionN: string;
        readonly descriptionLessThanNOf: string;
        readonly descriptionLessThanNIncluding: string;
        readonly descriptionLessThanN: string;
        readonly descriptionAllHumanPlayers: string;
        readonly descriptionNoHumanPlayers: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treatyComponents(): CampaignDiplomacyTreatyComponentSets.Entry | undefined;
    }
}
export default CampaignMissionObjectiveTreatyComponentSets;
