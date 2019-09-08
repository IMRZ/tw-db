
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioEntityActors {
  export const KEY = new CollectionKey("audio_entity_actors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly actorSwitch: string;
    readonly numberOfActors: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.actorSwitch = values["actor_switch"];
      this.numberOfActors = values["number_of_actors"];
    }
    
  }
}

export default AudioEntityActors;
