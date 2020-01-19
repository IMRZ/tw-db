
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Genders } from "./Genders";
import { Religions } from "./Religions";

export namespace AgentStringSubcultureOverrides {
  export const KEY = new CollectionKey("agent_string_subculture_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agent: string;
    readonly _subculture: string;
    readonly _gender: string;
    readonly nameOverride: string;
    readonly descriptionOverride: string;
    readonly iconPath: string;
    readonly id: number;
    readonly _religion: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agent = values["agent"];
      this._subculture = values["subculture"];
      this._gender = values["gender"];
      this.nameOverride = values["name_override"];
      this.descriptionOverride = values["description_override"];
      this.iconPath = values["icon_path"];
      this.id = values["id"];
      this._religion = values["religion"];
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
    
    get gender(): Genders.Entry | undefined {
      const collection = <Genders.Entry[]>this.collectionCache.getCollection(Genders.KEY, Genders.Entry);
      return collection.find(entry => entry.gender === this._gender);
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
  }
}

export default AgentStringSubcultureOverrides;
