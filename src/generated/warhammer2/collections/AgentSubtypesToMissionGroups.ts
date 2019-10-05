
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { MissionGroups } from "./MissionGroups";
import { EffectBundles } from "./EffectBundles";

export namespace AgentSubtypesToMissionGroups {
  export const KEY = new CollectionKey("agent_subtypes_to_mission_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agent: string;
    readonly _missionGroup: string;
    readonly videoPath: string;
    readonly _effectBundle: string;
    readonly _battleEffect: string;
    readonly imagePath: string;
    readonly order: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agent = values["agent"];
      this._missionGroup = values["mission_group"];
      this.videoPath = values["video_path"];
      this._effectBundle = values["effect_bundle"];
      this._battleEffect = values["battle_effect"];
      this.imagePath = values["image_path"];
      this.order = values["order"];
    }
    
    get agent(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
    
    get missionGroup(): MissionGroups.Entry | undefined {
      const collection = <MissionGroups.Entry[]>this.collectionCache.getCollection(MissionGroups.KEY, MissionGroups.Entry);
      return collection.find(entry => entry.groupKey === this._missionGroup);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get battleEffect(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._battleEffect);
    }
  }
}

export default AgentSubtypesToMissionGroups;
