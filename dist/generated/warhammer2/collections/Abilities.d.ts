import { CollectionCache, CollectionKey } from "../../../common";
import { AgentAbilityCategories } from "./AgentAbilityCategories";
export declare namespace Abilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly ability: string;
        readonly onScreenName: string;
        readonly onScreenDescription: string;
        readonly _category: string;
        readonly onScreenTarget: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: AgentAbilityCategories.Entry | undefined;
    }
}
export default Abilities;
