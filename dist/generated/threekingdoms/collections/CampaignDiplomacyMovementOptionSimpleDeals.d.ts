import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyMovementOptions } from "./CampaignDiplomacyMovementOptions";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CampaignDiplomacyMovementOptionSimpleDeals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _movementOption: string;
        readonly _proposerVariable: string;
        readonly _recipientVariable: string;
        readonly _component: string;
        constructor(collectionCache: CollectionCache, values: any);
        get movementOption(): CampaignDiplomacyMovementOptions.Entry | undefined;
        get proposerVariable(): CampaignDiplomacyVariables.Entry | undefined;
        get recipientVariable(): CampaignDiplomacyVariables.Entry | undefined;
        get component(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CampaignDiplomacyMovementOptionSimpleDeals;
