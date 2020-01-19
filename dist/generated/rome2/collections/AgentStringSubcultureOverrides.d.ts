import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Genders } from "./Genders";
export declare namespace AgentStringSubcultureOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agent: string;
        readonly _subculture: string;
        readonly _gender: string;
        readonly nameOverride: string;
        readonly descriptionOverride: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agent(): Agents.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
        get gender(): Genders.Entry | undefined;
    }
}
export default AgentStringSubcultureOverrides;
