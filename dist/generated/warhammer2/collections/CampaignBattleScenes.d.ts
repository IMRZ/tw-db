import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace CampaignBattleScenes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly colour: number;
        readonly _culture: string;
        readonly bmd: string;
        readonly environment: string;
        readonly _agentSubtypeOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly culture: Cultures.Entry | undefined;
        readonly agentSubtypeOverride: AgentSubtypes.Entry | undefined;
    }
}
export default CampaignBattleScenes;
