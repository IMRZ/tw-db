import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyDurations } from "./CampaignDiplomacyTreatyDurations";
import { CampaignDiplomacyComponentDimensionalities } from "./CampaignDiplomacyComponentDimensionalities";
import { CampaignDiplomacyRequirementSets } from "./CampaignDiplomacyRequirementSets";
export declare namespace CampaignDiplomacyTreatyComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _duration: string;
        readonly _dimensionality: string;
        readonly _requirementSet: string;
        readonly appliedBidirectionally: boolean;
        readonly onscreenName: string;
        readonly isThreat: boolean;
        readonly displayPriority: number;
        readonly opponentIsProposer: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get duration(): CampaignDiplomacyTreatyDurations.Entry | undefined;
        get dimensionality(): CampaignDiplomacyComponentDimensionalities.Entry | undefined;
        get requirementSet(): CampaignDiplomacyRequirementSets.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponents;
