import { CollectionCache, CollectionKey } from "../../../common";
import { ContextualDiplomacyEventSets } from "./ContextualDiplomacyEventSets";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";
import { ContextualDiplomacyEventScopes } from "./ContextualDiplomacyEventScopes";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";
export declare namespace ContextualDiplomacyEventSetItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _set: string;
        readonly _requiredTreatyComponents: string;
        readonly _scope: string;
        readonly _scopeRequiredTreatyComponents: string;
        readonly _diplomacyEvent: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get set(): ContextualDiplomacyEventSets.Entry | undefined;
        get requiredTreatyComponents(): CampaignDiplomacyTreatyComponentSets.Entry | undefined;
        get scope(): ContextualDiplomacyEventScopes.Entry | undefined;
        get scopeRequiredTreatyComponents(): CampaignDiplomacyTreatyComponentSets.Entry | undefined;
        get diplomacyEvent(): CaiDiplomacyEvents.Entry | undefined;
    }
}
export default ContextualDiplomacyEventSetItems;
