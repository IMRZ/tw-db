
import { CollectionCache, CollectionKey } from "../../../common";
import { Incidents } from "./Incidents";
import { CdirEventsPostGenerationConditions } from "./CdirEventsPostGenerationConditions";
import { CdirEventsTargets } from "./CdirEventsTargets";
import { CdirEventsPostConditionTypes } from "./CdirEventsPostConditionTypes";
import { CharacterRelationships } from "./CharacterRelationships";

export namespace CdirEventsIncidentPostGenerationConditionJunctions {
  export const KEY = new CollectionKey("cdir_events_incident_post_generation_condition_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _incident: string;
    readonly _condition: string;
    readonly _targetA: string;
    readonly _targetB: string;
    readonly _type: string;
    readonly _relationshipOptions: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._incident = values["incident"];
      this._condition = values["condition"];
      this._targetA = values["target_a"];
      this._targetB = values["target_b"];
      this._type = values["type"];
      this._relationshipOptions = values["relationship_options"];
    }
    
    get incident(): Incidents.Entry | undefined {
      const collection = <Incidents.Entry[]>this.collectionCache.getCollection(Incidents.KEY, Incidents.Entry);
      return collection.find(entry => entry.key === this._incident);
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

export default CdirEventsIncidentPostGenerationConditionJunctions;
