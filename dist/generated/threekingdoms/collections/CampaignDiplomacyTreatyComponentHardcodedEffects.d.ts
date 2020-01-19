import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyHardcodedEffects } from "./CampaignDiplomacyHardcodedEffects";
export declare namespace CampaignDiplomacyTreatyComponentHardcodedEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treatyComponent: string;
        readonly _hardcodedEffect: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
        get hardcodedEffect(): CampaignDiplomacyHardcodedEffects.Entry | undefined;
    }
}
export default CampaignDiplomacyTreatyComponentHardcodedEffects;
