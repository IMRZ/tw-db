import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignGroupMemberCriteriaCharacterGenerationTemplateContexts } from "./CampaignGroupMemberCriteriaCharacterGenerationTemplateContexts";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
export declare namespace CampaignGroupMemberCriteriaCharacterGenerationTemplates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _member: string;
        readonly _context: string;
        readonly _value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get member(): CampaignGroupMembers.Entry | undefined;
        get context(): CampaignGroupMemberCriteriaCharacterGenerationTemplateContexts.Entry | undefined;
        get value(): CharacterGenerationTemplates.Entry | undefined;
    }
}
export default CampaignGroupMemberCriteriaCharacterGenerationTemplates;
