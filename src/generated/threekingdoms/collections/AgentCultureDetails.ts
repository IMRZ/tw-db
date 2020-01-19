
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Cultures } from "./Cultures";
import { MainUnits } from "./MainUnits";
import { MovieEventStrings } from "./MovieEventStrings";
import { Genders } from "./Genders";

export namespace AgentCultureDetails {
  export const KEY = new CollectionKey("agent_culture_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _agent: string;
    readonly _culture: string;
    readonly onscreenName: string;
    readonly _associatedUnit: string;
    readonly descriptionText: string;
    readonly season: string;
    readonly level: number;
    readonly _agentRecruitedMovie: string;
    readonly _gender: string;
    readonly icon: string;
    readonly smallIcon: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._agent = values["agent"];
      this._culture = values["culture"];
      this.onscreenName = values["onscreen_name"];
      this._associatedUnit = values["associated_unit"];
      this.descriptionText = values["description_text"];
      this.season = values["season"];
      this.level = values["level"];
      this._agentRecruitedMovie = values["agent_recruited_movie"];
      this._gender = values["gender"];
      this.icon = values["icon"];
      this.smallIcon = values["small_icon"];
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get associatedUnit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._associatedUnit);
    }
    
    get agentRecruitedMovie(): MovieEventStrings.Entry | undefined {
      const collection = <MovieEventStrings.Entry[]>this.collectionCache.getCollection(MovieEventStrings.KEY, MovieEventStrings.Entry);
      return collection.find(entry => entry._event === this._agentRecruitedMovie);
    }
    
    get gender(): Genders.Entry | undefined {
      const collection = <Genders.Entry[]>this.collectionCache.getCollection(Genders.KEY, Genders.Entry);
      return collection.find(entry => entry.gender === this._gender);
    }
  }
}

export default AgentCultureDetails;
