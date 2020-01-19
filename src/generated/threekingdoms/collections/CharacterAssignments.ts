
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterAssignmentTargets } from "./CharacterAssignmentTargets";
import { CampaignPayloads } from "./CampaignPayloads";
import { ResourceTransactions } from "./ResourceTransactions";
import { CharacterAssignmentConstraintSets } from "./CharacterAssignmentConstraintSets";

export namespace CharacterAssignments {
  export const KEY = new CollectionKey("character_assignments");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _targetType: string;
    readonly _initiationPayload: string;
    readonly _initiationCost: string;
    readonly _maintenanceCost: string;
    readonly duration: number;
    readonly recallDuration: number;
    readonly _constraints: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._targetType = values["target_type"];
      this._initiationPayload = values["initiation_payload"];
      this._initiationCost = values["initiation_cost"];
      this._maintenanceCost = values["maintenance_cost"];
      this.duration = values["duration"];
      this.recallDuration = values["recall_duration"];
      this._constraints = values["constraints"];
    }
    
    get targetType(): CharacterAssignmentTargets.Entry | undefined {
      const collection = <CharacterAssignmentTargets.Entry[]>this.collectionCache.getCollection(CharacterAssignmentTargets.KEY, CharacterAssignmentTargets.Entry);
      return collection.find(entry => entry.key === this._targetType);
    }
    
    get initiationPayload(): CampaignPayloads.Entry | undefined {
      const collection = <CampaignPayloads.Entry[]>this.collectionCache.getCollection(CampaignPayloads.KEY, CampaignPayloads.Entry);
      return collection.find(entry => entry.key === this._initiationPayload);
    }
    
    get initiationCost(): ResourceTransactions.Entry | undefined {
      const collection = <ResourceTransactions.Entry[]>this.collectionCache.getCollection(ResourceTransactions.KEY, ResourceTransactions.Entry);
      return collection.find(entry => entry.key === this._initiationCost);
    }
    
    get maintenanceCost(): ResourceTransactions.Entry | undefined {
      const collection = <ResourceTransactions.Entry[]>this.collectionCache.getCollection(ResourceTransactions.KEY, ResourceTransactions.Entry);
      return collection.find(entry => entry.key === this._maintenanceCost);
    }
    
    get constraints(): CharacterAssignmentConstraintSets.Entry | undefined {
      const collection = <CharacterAssignmentConstraintSets.Entry[]>this.collectionCache.getCollection(CharacterAssignmentConstraintSets.KEY, CharacterAssignmentConstraintSets.Entry);
      return collection.find(entry => entry.key === this._constraints);
    }
  }
}

export default CharacterAssignments;
