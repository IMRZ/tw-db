import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace CharacterSkillCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly minIndent: number;
        readonly maxIndent: number;
        readonly order: number;
        readonly colR: number;
        readonly colG: number;
        readonly colB: number;
        readonly _agentSubtypeOverride: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agentSubtypeOverride(): AgentSubtypes.Entry | undefined;
    }
}
export default CharacterSkillCategories;
