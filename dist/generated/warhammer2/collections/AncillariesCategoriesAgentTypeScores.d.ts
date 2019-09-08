import { CollectionCache, CollectionKey } from "../../../common";
import { AncillariesCategories } from "./AncillariesCategories";
import { Agents } from "./Agents";
export declare namespace AncillariesCategoriesAgentTypeScores {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _category: string;
        readonly _agentType: string;
        readonly score: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: AncillariesCategories.Entry | undefined;
        readonly agentType: Agents.Entry | undefined;
    }
}
export default AncillariesCategoriesAgentTypeScores;
