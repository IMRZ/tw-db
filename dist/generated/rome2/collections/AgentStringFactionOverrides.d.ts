import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Factions } from "./Factions";
import { Genders } from "./Genders";
export declare namespace AgentStringFactionOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agent: string;
        readonly _faction: string;
        readonly _gender: string;
        readonly nameOverride: string;
        readonly descriptionOverride: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agent(): Agents.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get gender(): Genders.Entry | undefined;
    }
}
export default AgentStringFactionOverrides;
