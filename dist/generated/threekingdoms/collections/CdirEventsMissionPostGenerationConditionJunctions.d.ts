import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsPostGenerationConditions } from "./CdirEventsPostGenerationConditions";
import { CdirEventsTargets } from "./CdirEventsTargets";
import { CdirEventsPostConditionTypes } from "./CdirEventsPostConditionTypes";
import { CharacterRelationships } from "./CharacterRelationships";
export declare namespace CdirEventsMissionPostGenerationConditionJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _mission: string;
        readonly _condition: string;
        readonly _targetA: string;
        readonly _targetB: string;
        readonly _type: string;
        readonly _relationshipOptions: string;
        constructor(collectionCache: CollectionCache, values: any);
        get mission(): Missions.Entry | undefined;
        get condition(): CdirEventsPostGenerationConditions.Entry | undefined;
        get targetA(): CdirEventsTargets.Entry | undefined;
        get targetB(): CdirEventsTargets.Entry | undefined;
        get type(): CdirEventsPostConditionTypes.Entry | undefined;
        get relationshipOptions(): CharacterRelationships.Entry | undefined;
    }
}
export default CdirEventsMissionPostGenerationConditionJunctions;
