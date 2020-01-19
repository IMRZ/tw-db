
import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { BuildingLevels } from "./BuildingLevels";
import { CharacterSkills } from "./CharacterSkills";
import { Resources } from "./Resources";
import { Religions } from "./Religions";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace CampaignUnitRequirements {
  export const KEY = new CollectionKey("campaign_unit_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _tech1: string;
    readonly _tech2: string;
    readonly _building1: string;
    readonly _building2: string;
    readonly _skill1: string;
    readonly _skill2: string;
    readonly _resource1: string;
    readonly _resource2: string;
    readonly _religion: string;
    readonly mustBeWorldLeader: boolean;
    readonly minimumCharacterRank: number;
    readonly _agentSubtype: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._tech1 = values["tech1"];
      this._tech2 = values["tech2"];
      this._building1 = values["building1"];
      this._building2 = values["building2"];
      this._skill1 = values["skill1"];
      this._skill2 = values["skill2"];
      this._resource1 = values["resource1"];
      this._resource2 = values["resource2"];
      this._religion = values["religion"];
      this.mustBeWorldLeader = !!values["must_be_world_leader"];
      this.minimumCharacterRank = values["minimum_character_rank"];
      this._agentSubtype = values["agent_subtype"];
    }
    
    get tech1(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._tech1);
    }
    
    get tech2(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._tech2);
    }
    
    get building1(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building1);
    }
    
    get building2(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._building2);
    }
    
    get skill1(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._skill1);
    }
    
    get skill2(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._skill2);
    }
    
    get resource1(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resource1);
    }
    
    get resource2(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resource2);
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
  }
}

export default CampaignUnitRequirements;
