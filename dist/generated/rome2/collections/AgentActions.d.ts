import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Abilities } from "./Abilities";
import { AgentAttributes } from "./AgentAttributes";
import { ActionResults } from "./ActionResults";
import { AgentActionMessageEvents } from "./AgentActionMessageEvents";
import { Effects } from "./Effects";
export declare namespace AgentActions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agent: string;
        readonly _ability: string;
        readonly _attribute: string;
        readonly _criticalFailure: string;
        readonly _failure: string;
        readonly _opportuneFailure: string;
        readonly _success: string;
        readonly _criticalSuccess: string;
        readonly _cannotFail: string;
        readonly localisedActionName: string;
        readonly localisedActionDescription: string;
        readonly _yourMessageEventsMale: string;
        readonly _yourMessageEventsFemale: string;
        readonly _theirMessageEventsMale: string;
        readonly _theirMessageEventsFemale: string;
        readonly _enabledByEffect: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agent: Agents.Entry | undefined;
        readonly ability: Abilities.Entry | undefined;
        readonly attribute: AgentAttributes.Entry | undefined;
        readonly criticalFailure: ActionResults.Entry | undefined;
        readonly failure: ActionResults.Entry | undefined;
        readonly opportuneFailure: ActionResults.Entry | undefined;
        readonly success: ActionResults.Entry | undefined;
        readonly criticalSuccess: ActionResults.Entry | undefined;
        readonly cannotFail: ActionResults.Entry | undefined;
        readonly yourMessageEventsMale: AgentActionMessageEvents.Entry | undefined;
        readonly yourMessageEventsFemale: AgentActionMessageEvents.Entry | undefined;
        readonly theirMessageEventsMale: AgentActionMessageEvents.Entry | undefined;
        readonly theirMessageEventsFemale: AgentActionMessageEvents.Entry | undefined;
        readonly enabledByEffect: Effects.Entry | undefined;
    }
}
export default AgentActions;
