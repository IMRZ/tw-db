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
        get agent(): Agents.Entry | undefined;
        get ability(): Abilities.Entry | undefined;
        get attribute(): AgentAttributes.Entry | undefined;
        get criticalFailure(): ActionResults.Entry | undefined;
        get failure(): ActionResults.Entry | undefined;
        get opportuneFailure(): ActionResults.Entry | undefined;
        get success(): ActionResults.Entry | undefined;
        get criticalSuccess(): ActionResults.Entry | undefined;
        get cannotFail(): ActionResults.Entry | undefined;
        get yourMessageEventsMale(): AgentActionMessageEvents.Entry | undefined;
        get yourMessageEventsFemale(): AgentActionMessageEvents.Entry | undefined;
        get theirMessageEventsMale(): AgentActionMessageEvents.Entry | undefined;
        get theirMessageEventsFemale(): AgentActionMessageEvents.Entry | undefined;
        get enabledByEffect(): Effects.Entry | undefined;
    }
}
export default AgentActions;
