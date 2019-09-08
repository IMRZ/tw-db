
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
import { Ancillaries } from "./Ancillaries";
import { AgentUniforms } from "./AgentUniforms";

export namespace CampaignCharacterUniformAncillaryJunctions {
  export const KEY = new CollectionKey("campaign_character_uniform_ancillary_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _artSet: string;
    readonly _ancillary: string;
    readonly _uniform: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._artSet = values["art_set"];
      this._ancillary = values["ancillary"];
      this._uniform = values["uniform"];
    }
    
    get artSet(): CampaignCharacterArtSets.Entry | undefined {
      const collection = <CampaignCharacterArtSets.Entry[]>this.collectionCache.getCollection(CampaignCharacterArtSets.KEY, CampaignCharacterArtSets.Entry);
      return collection.find(entry => entry.artSetId === this._artSet);
    }
    
    get ancillary(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillary);
    }
    
    get uniform(): AgentUniforms.Entry | undefined {
      const collection = <AgentUniforms.Entry[]>this.collectionCache.getCollection(AgentUniforms.KEY, AgentUniforms.Entry);
      return collection.find(entry => entry.uniformName === this._uniform);
    }
  }
}

export default CampaignCharacterUniformAncillaryJunctions;
