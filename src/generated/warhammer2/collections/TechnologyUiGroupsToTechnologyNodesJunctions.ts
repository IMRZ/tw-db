
import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyUiGroups } from "./TechnologyUiGroups";
import { TechnologyNodes } from "./TechnologyNodes";

export namespace TechnologyUiGroupsToTechnologyNodesJunctions {
  export const KEY = new CollectionKey("technology_ui_groups_to_technology_nodes_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _techUiGroup: string;
    readonly _topLeftNode: string;
    readonly _bottomRightNode: string;
    readonly _optionalTopRightNode: string;
    readonly _optionalBottomLeftNode: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._techUiGroup = values["tech_ui_group"];
      this._topLeftNode = values["top_left_node"];
      this._bottomRightNode = values["bottom_right_node"];
      this._optionalTopRightNode = values["optional_top_right_node"];
      this._optionalBottomLeftNode = values["optional_bottom_left_node"];
    }
    
    get techUiGroup(): TechnologyUiGroups.Entry | undefined {
      const collection = <TechnologyUiGroups.Entry[]>this.collectionCache.getCollection(TechnologyUiGroups.KEY, TechnologyUiGroups.Entry);
      return collection.find(entry => entry.key === this._techUiGroup);
    }
    
    get topLeftNode(): TechnologyNodes.Entry | undefined {
      const collection = <TechnologyNodes.Entry[]>this.collectionCache.getCollection(TechnologyNodes.KEY, TechnologyNodes.Entry);
      return collection.find(entry => entry.key === this._topLeftNode);
    }
    
    get bottomRightNode(): TechnologyNodes.Entry | undefined {
      const collection = <TechnologyNodes.Entry[]>this.collectionCache.getCollection(TechnologyNodes.KEY, TechnologyNodes.Entry);
      return collection.find(entry => entry.key === this._bottomRightNode);
    }
    
    get optionalTopRightNode(): TechnologyNodes.Entry | undefined {
      const collection = <TechnologyNodes.Entry[]>this.collectionCache.getCollection(TechnologyNodes.KEY, TechnologyNodes.Entry);
      return collection.find(entry => entry.key === this._optionalTopRightNode);
    }
    
    get optionalBottomLeftNode(): TechnologyNodes.Entry | undefined {
      const collection = <TechnologyNodes.Entry[]>this.collectionCache.getCollection(TechnologyNodes.KEY, TechnologyNodes.Entry);
      return collection.find(entry => entry.key === this._optionalBottomLeftNode);
    }
  }
}

export default TechnologyUiGroupsToTechnologyNodesJunctions;
