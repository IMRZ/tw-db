
import { CollectionCache, CollectionKey } from "../../../common";
import { MissionTypes } from "./MissionTypes";

export namespace Missions {
  export const KEY = new CollectionKey("missions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _missionType: string;
    readonly localisedTitle: string;
    readonly localisedDescription: string;
    readonly uiImage: string;
    readonly uiIcon: string;
    readonly generate: boolean;
    readonly prioritised: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._missionType = values["mission_type"];
      this.localisedTitle = values["localised_title"];
      this.localisedDescription = values["localised_description"];
      this.uiImage = values["ui_image"];
      this.uiIcon = values["ui_icon"];
      this.generate = !!values["generate"];
      this.prioritised = !!values["prioritised"];
    }
    
    get missionType(): MissionTypes.Entry | undefined {
      const collection = <MissionTypes.Entry[]>this.collectionCache.getCollection(MissionTypes.KEY, MissionTypes.Entry);
      return collection.find(entry => entry.key === this._missionType);
    }
  }
}

export default Missions;
