import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Genders } from "./Genders";
import { Religions } from "./Religions";
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
        readonly id: number;
        readonly _religion: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agent: Agents.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
        readonly gender: Genders.Entry | undefined;
        readonly religion: Religions.Entry | undefined;
    }
}
export default AgentStringSubcultureOverrides;
