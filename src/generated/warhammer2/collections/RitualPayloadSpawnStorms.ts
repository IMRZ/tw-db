
import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { Regions } from "./Regions";
import { CampaignStormTypes } from "./CampaignStormTypes";

export namespace RitualPayloadSpawnStorms {
  export const KEY = new CollectionKey("ritual_payload_spawn_storms");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _payload: string;
    readonly _region: string;
    readonly strength: number;
    readonly maxTurnsDuration: number;
    readonly _type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._payload = values["payload"];
      this._region = values["region"];
      this.strength = values["strength"];
      this.maxTurnsDuration = values["max_turns_duration"];
      this._type = values["type"];
    }
    
    get payload(): RitualPayloads.Entry | undefined {
      const collection = <RitualPayloads.Entry[]>this.collectionCache.getCollection(RitualPayloads.KEY, RitualPayloads.Entry);
      return collection.find(entry => entry.key === this._payload);
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get type(): CampaignStormTypes.Entry | undefined {
      const collection = <CampaignStormTypes.Entry[]>this.collectionCache.getCollection(CampaignStormTypes.KEY, CampaignStormTypes.Entry);
      return collection.find(entry => entry.type === this._type);
    }
  }
}

export default RitualPayloadSpawnStorms;
