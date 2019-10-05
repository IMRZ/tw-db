import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
import { AgentUniforms } from "./AgentUniforms";
import { CampaignAnimSetEnums } from "./CampaignAnimSetEnums";
export declare namespace CampaignCharacterArts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _artSetId: string;
        readonly level: number;
        readonly season: string;
        readonly age: number;
        readonly portrait: string;
        readonly _uniform: string;
        readonly card: string;
        readonly info: string;
        readonly _seaUniform: string;
        readonly _navyUniform: string;
        readonly _landAnimation: string;
        readonly _seaAnimation: string;
        readonly _navyAnimation: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly artSetId: CampaignCharacterArtSets.Entry | undefined;
        readonly uniform: AgentUniforms.Entry | undefined;
        readonly seaUniform: AgentUniforms.Entry | undefined;
        readonly navyUniform: AgentUniforms.Entry | undefined;
        readonly landAnimation: CampaignAnimSetEnums.Entry | undefined;
        readonly seaAnimation: CampaignAnimSetEnums.Entry | undefined;
        readonly navyAnimation: CampaignAnimSetEnums.Entry | undefined;
    }
}
export default CampaignCharacterArts;