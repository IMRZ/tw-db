import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Cultures } from "./Cultures";
import { CeoTemplateManagers } from "./CeoTemplateManagers";
import { Agents } from "./Agents";
import { AgentSubtypes } from "./AgentSubtypes";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
export declare namespace CeoTemplateManagerCampaignLookups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaign: string;
        readonly _faction: string;
        readonly _subculture: string;
        readonly _culture: string;
        readonly _templateManager: string;
        readonly autoId: number;
        readonly _agent: string;
        readonly _agentSubtype: string;
        readonly _characterGenerationTemplate: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaign(): Campaigns.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get templateManager(): CeoTemplateManagers.Entry | undefined;
        get agent(): Agents.Entry | undefined;
        get agentSubtype(): AgentSubtypes.Entry | undefined;
        get characterGenerationTemplate(): CharacterGenerationTemplates.Entry | undefined;
    }
}
export default CeoTemplateManagerCampaignLookups;
