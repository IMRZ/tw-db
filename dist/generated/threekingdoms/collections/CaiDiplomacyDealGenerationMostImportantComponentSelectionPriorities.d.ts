import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CaiDiplomacyDealGenerationMostImportantComponentSelectionPriorities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treatyKey: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get treatyKey(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CaiDiplomacyDealGenerationMostImportantComponentSelectionPriorities;
