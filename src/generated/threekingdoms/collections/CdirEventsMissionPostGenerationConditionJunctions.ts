
import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { CdirEventsPostGenerationConditions } from "./CdirEventsPostGenerationConditions";
import { CdirEventsTargets } from "./CdirEventsTargets";
import { CdirEventsPostConditionTypes } from "./CdirEventsPostConditionTypes";
import { CharacterRelationships } from "./CharacterRelationships";

export namespace CdirEventsMissionPostGenerationConditionJunctions {
  export const KEY = new CollectionKey("cdir_events_mission_post_generation_condition_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _mission: string;
    readonly _condition: string;
    readonly _targetA: string;
    readonly _targetB: string;
    readonly _type: string;
    readonly _relationshipOptions: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._mission = values["mission"];
      this._condition = values["condition"];
      this._targetA = values["target_a"];
      this._targetB = values["target_b"];
      this._type = values["type"];
      this._relationshipOptions = values["relationship_options"];
    }
    
    get mission(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._mission);
    }
    
    get condition(): CdirEventsPostGenerationConditions.Entry | undefined {
      const collection = <CdirEventsPostGenerationConditions.Entry[]>this.collectionCache.getCollection(CdirEventsPostGenerationConditions.KEY, CdirEventsPostGenerationConditions.Entry);
      return collection.find(entry => entry.conditionKey === this._condition);
    }
    
    get targetA(): CdirEventsTargets.Entry | undefined {
      const collection = <CdirEventsTargets.Entry[]>this.collectionCache.getCollection(CdirEventsTargets.KEY, CdirEventsTargets.Entry);
      return collection.find(entry => entry.targetKey === this._targetA);
    }
    
    get targetB(): CdirEventsTargets.Entry | undefined {
      const collection = <CdirEventsTargets.Entry[]>this.collectionCache.getCollection(CdirEventsTargets.KEY, CdirEventsTargets.Entry);
      return collection.find(entry => entry.targetKey === this._targetB);
    }
    
    get type(): CdirEventsPostConditionTypes.Entry | undefined {
      const collection = <CdirEventsPostConditionTypes.Entry[]>this.collectionCache.getCollection(CdirEventsPostConditionTypes.KEY, CdirEventsPostConditionTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
    
    get relationshipOptions(): CharacterRelationships.Entry | undefined {
      const collection = <CharacterRelationships.Entry[]>this.collectionCache.getCollection(CharacterRelationships.KEY, CharacterRelationships.Entry);
      return collection.find(entry => entry.key === this._relationshipOptions);
    }
  }
}

export default CdirEventsMissionPostGenerationConditionJunctions;
