import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
export declare namespace CampaignGroupCharacterGenerationTemplates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _characterGenerationTemplate: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get characterGenerationTemplate(): CharacterGenerationTemplates.Entry | undefined;
    }
}
export default CampaignGroupCharacterGenerationTemplates;
