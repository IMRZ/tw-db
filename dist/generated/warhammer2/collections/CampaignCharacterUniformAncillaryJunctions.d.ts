import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
import { Ancillaries } from "./Ancillaries";
import { AgentUniforms } from "./AgentUniforms";
export declare namespace CampaignCharacterUniformAncillaryJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _artSet: string;
        readonly _ancillary: string;
        readonly _uniform: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly artSet: CampaignCharacterArtSets.Entry | undefined;
        readonly ancillary: Ancillaries.Entry | undefined;
        readonly uniform: AgentUniforms.Entry | undefined;
    }
}
export default CampaignCharacterUniformAncillaryJunctions;
