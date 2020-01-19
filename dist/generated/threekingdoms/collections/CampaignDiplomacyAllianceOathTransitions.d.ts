import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAllianceOaths } from "./CampaignDiplomacyAllianceOaths";
export declare namespace CampaignDiplomacyAllianceOathTransitions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _oathFrom: string;
        readonly _oathTo: string;
        constructor(collectionCache: CollectionCache, values: any);
        get oathFrom(): CampaignDiplomacyAllianceOaths.Entry | undefined;
        get oathTo(): CampaignDiplomacyAllianceOaths.Entry | undefined;
    }
}
export default CampaignDiplomacyAllianceOathTransitions;
