
import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodes } from "./TechnologyNodes";
import { Ancillaries } from "./Ancillaries";

export namespace TechnologyNodesToAncillariesJunctions {
  export const KEY = new CollectionKey("technology_nodes_to_ancillaries_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technologyNode: string;
    readonly _ancillary: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technologyNode = values["technology_node"];
      this._ancillary = values["ancillary"];
    }
    
    get technologyNode(): TechnologyNodes.Entry | undefined {
      const collection = <TechnologyNodes.Entry[]>this.collectionCache.getCollection(TechnologyNodes.KEY, TechnologyNodes.Entry);
      return collection.find(entry => entry.key === this._technologyNode);
    }
    
    get ancillary(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillary);
    }
  }
}

export default TechnologyNodesToAncillariesJunctions;
