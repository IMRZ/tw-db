
import { CollectionCache, CollectionKey } from "../../../common";
import { Variants } from "./Variants";

export namespace AgentUniforms {
  export const KEY = new CollectionKey("agent_uniforms");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly uniformName: string;
    readonly _filename: string;
    readonly _battleFilename: string;
    readonly _campaignPortholeFilename: string;
    readonly campaignPoliticianFilename: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.uniformName = values["uniform_name"];
      this._filename = values["filename"];
      this._battleFilename = values["battle_filename"];
      this._campaignPortholeFilename = values["campaign_porthole_filename"];
      this.campaignPoliticianFilename = values["campaign_politician_filename"];
    }
    
    get filename(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._filename);
    }
    
    get battleFilename(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._battleFilename);
    }
    
    get campaignPortholeFilename(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._campaignPortholeFilename);
    }
  }
}

export default AgentUniforms;
