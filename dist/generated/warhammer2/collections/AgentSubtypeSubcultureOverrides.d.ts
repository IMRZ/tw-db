import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { MainUnits } from "./MainUnits";
import { Agents } from "./Agents";
export declare namespace AgentSubtypeSubcultureOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subtype: string;
        readonly _subculture: string;
        readonly _associatedUnitOverride: string;
        readonly _agent: string;
        readonly onscreenName: string;
        readonly description: string;
        readonly smallIcon: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly subtype: AgentSubtypes.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
        readonly associatedUnitOverride: MainUnits.Entry | undefined;
        readonly agent: Agents.Entry | undefined;
    }
}
export default AgentSubtypeSubcultureOverrides;
