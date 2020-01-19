import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyExistingComponents } from "./CampaignDiplomacyExistingComponents";
import { CampaignDiplomacyNegotiationResponses } from "./CampaignDiplomacyNegotiationResponses";
import { CampaignDiplomacyVoteFilters } from "./CampaignDiplomacyVoteFilters";
import { CampaignDiplomacySelectionFilters } from "./CampaignDiplomacySelectionFilters";
export declare namespace CampaignDiplomacyTreatyComponentRequiredTreaties {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly _requirement: string;
        readonly _proposerResponse: string;
        readonly _recipientResponse: string;
        readonly generationPriority: number;
        readonly key: string;
        readonly _dealWas: string;
        readonly applicationPriority: number;
        readonly _proposerVoteFilter: string;
        readonly _recipientVoteFilter: string;
        readonly _proposerSelectionFilter: string;
        readonly _recipientSelectionFilter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get requirement(): CampaignDiplomacyExistingComponents.Entry | undefined;
        get proposerResponse(): CampaignDiplomacyNegotiationResponses.Entry | undefined;
        get recipientResponse(): CampaignDiplomacyNegotiationResponses.Entry | undefined;
        get dealWas(): CampaignDiplomacyNegotiationResponses.Entry | undefined;
        get proposerVoteFilter(): CampaignDiplomacyVoteFilters.Entry | undefined;
        get recipientVoteFilter(): CampaignDiplomacyVoteFilters.Entry | undefined;
        get proposerSelectionFilter(): CampaignDiplomacySelectionFilters.Entry | undefined;
        get recipientSelectionFilter(): CampaignDiplomacySelectionFilters.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentRequiredTreaties;
