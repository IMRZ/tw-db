
import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodes } from "./TechnologyNodes";

export namespace TechnologyNodeLinks {
  export const KEY = new CollectionKey("technology_node_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _parentKey: string;
    readonly _childKey: string;
    readonly initialDescentTiers: number;
    readonly parentLinkPosition: number;
    readonly childLinkPosition: number;
    readonly parentLinkPositionOffset: number;
    readonly childLinkPositionOffset: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._parentKey = values["parent_key"];
      this._childKey = values["child_key"];
      this.initialDescentTiers = values["initial_descent_tiers"];
      this.parentLinkPosition = values["parent_link_position"];
      this.childLinkPosition = values["child_link_position"];
      this.parentLinkPositionOffset = values["parent_link_position_offset"];
      this.childLinkPositionOffset = values["child_link_position_offset"];
    }
    
    get parentKey(): TechnologyNodes.Entry | undefined {
      const collection = <TechnologyNodes.Entry[]>this.collectionCache.getCollection(TechnologyNodes.KEY, TechnologyNodes.Entry);
      return collection.find(entry => entry.key === this._parentKey);
    }
    
    get childKey(): TechnologyNodes.Entry | undefined {
      const collection = <TechnologyNodes.Entry[]>this.collectionCache.getCollection(TechnologyNodes.KEY, TechnologyNodes.Entry);
      return collection.find(entry => entry.key === this._childKey);
    }
  }
}

export default TechnologyNodeLinks;
