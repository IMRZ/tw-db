import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponentSets } from "./CampaignDiplomacyTreatyComponentSets";
export declare namespace CdirEventDiplomaticConditions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _treatyComponentSet: string;
        readonly validForRebels: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get treatyComponentSet(): CampaignDiplomacyTreatyComponentSets.Entry | undefined;
    }
}
export default CdirEventDiplomaticConditions;
