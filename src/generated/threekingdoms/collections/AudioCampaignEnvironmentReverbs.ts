
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioCampaignEnvironmentReverbs {
  export const KEY = new CollectionKey("audio_campaign_environment_reverbs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly auxFl: string;
    readonly auxFr: string;
    readonly auxRl: string;
    readonly auxRr: string;
    readonly cellIntensity: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.auxFl = values["aux_fl"];
      this.auxFr = values["aux_fr"];
      this.auxRl = values["aux_rl"];
      this.auxRr = values["aux_rr"];
      this.cellIntensity = values["cell_intensity"];
    }
    
  }
}

export default AudioCampaignEnvironmentReverbs;
