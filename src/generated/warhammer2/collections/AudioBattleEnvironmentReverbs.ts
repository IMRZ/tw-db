
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioBattleEnvironmentReverbs {
  export const KEY = new CollectionKey("audio_battle_environment_reverbs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly auxFl: string;
    readonly auxFr: string;
    readonly auxRl: string;
    readonly auxRr: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.auxFl = values["aux_fl"];
      this.auxFr = values["aux_fr"];
      this.auxRl = values["aux_rl"];
      this.auxRr = values["aux_rr"];
    }
    
  }
}

export default AudioBattleEnvironmentReverbs;
