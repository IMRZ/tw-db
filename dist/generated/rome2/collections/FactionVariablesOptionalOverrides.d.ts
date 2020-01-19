import { CollectionCache, CollectionKey } from "../../../common";
import { FactionVariables } from "./FactionVariables";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
export declare namespace FactionVariablesOptionalOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _factionVariableKey: string;
        readonly _factionKey: string;
        readonly _campaignKey: string;
        readonly difficultyLevel: string;
        readonly campaignType: string;
        readonly value: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factionVariableKey(): FactionVariables.Entry | undefined;
        get factionKey(): Factions.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
    }
}
export default FactionVariablesOptionalOverrides;
