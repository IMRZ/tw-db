import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CaiDiplomacyEvents } from "./CaiDiplomacyEvents";
export declare namespace CaiDiplomacyComponentEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _diplomaticComponent: string;
        readonly _signedProposer: string;
        readonly _signedRecipient: string;
        readonly _pastProposer: string;
        readonly _pastRecipient: string;
        readonly _cancelled: string;
        readonly _broken: string;
        readonly _brokenEarly: string;
        constructor(collectionCache: CollectionCache, values: any);
        get diplomaticComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get signedProposer(): CaiDiplomacyEvents.Entry | undefined;
        get signedRecipient(): CaiDiplomacyEvents.Entry | undefined;
        get pastProposer(): CaiDiplomacyEvents.Entry | undefined;
        get pastRecipient(): CaiDiplomacyEvents.Entry | undefined;
        get cancelled(): CaiDiplomacyEvents.Entry | undefined;
        get broken(): CaiDiplomacyEvents.Entry | undefined;
        get brokenEarly(): CaiDiplomacyEvents.Entry | undefined;
    }
}
export default CaiDiplomacyComponentEvents;
