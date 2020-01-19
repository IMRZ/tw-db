import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationProposedComponents } from "./CampaignDiplomacyFollowupNegotiationProposedComponents";
import { Factions } from "./Factions";
export declare namespace CampaignDiplomacyFollowupNegotiationProposedComponentFactionParameters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly parameterIndex: number;
        readonly _factionParameter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CampaignDiplomacyFollowupNegotiationProposedComponents.Entry | undefined;
        get factionParameter(): Factions.Entry | undefined;
    }
}
export default CampaignDiplomacyFollowupNegotiationProposedComponentFactionParameters;
