import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterRelationships } from "./CharacterRelationships";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";
export declare namespace CharacterRelationshipToCampaignStatisticsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _characterRelationship: string;
        readonly _campaignStatistic: string;
        constructor(collectionCache: CollectionCache, values: any);
        get characterRelationship(): CharacterRelationships.Entry | undefined;
        get campaignStatistic(): CampaignStatisticsEnums.Entry | undefined;
    }
}
export default CharacterRelationshipToCampaignStatisticsJunctions;
