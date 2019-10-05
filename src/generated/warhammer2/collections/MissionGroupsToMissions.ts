
import { CollectionCache, CollectionKey } from "../../../common";
import { Missions } from "./Missions";
import { MissionGroups } from "./MissionGroups";

export namespace MissionGroupsToMissions {
  export const KEY = new CollectionKey("mission_groups_to_missions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _mission: string;
    readonly _group: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._mission = values["mission"];
      this._group = values["group"];
      this.order = values["order"];
    }
    
    get mission(): Missions.Entry | undefined {
      const collection = <Missions.Entry[]>this.collectionCache.getCollection(Missions.KEY, Missions.Entry);
      return collection.find(entry => entry.key === this._mission);
    }
    
    get group(): MissionGroups.Entry | undefined {
      const collection = <MissionGroups.Entry[]>this.collectionCache.getCollection(MissionGroups.KEY, MissionGroups.Entry);
      return collection.find(entry => entry.groupKey === this._group);
    }
  }
}

export default MissionGroupsToMissions;
