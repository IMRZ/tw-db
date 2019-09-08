
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSkeletonCategoryEnums } from "./BattleSkeletonCategoryEnums";

export namespace BattleSkeletons {
  export const KEY = new CollectionKey("battle_skeletons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly _category: string;
    readonly root: string;
    readonly scale: number;
    readonly scaleDeviation: number;
    readonly hipsNode: string;
    readonly spineNode: string;
    readonly weapon1Node: string;
    readonly weapon2Node: string;
    readonly weapon3Node: string;
    readonly weapon4Node: string;
    readonly weapon5Node: string;
    readonly headNode: string;
    readonly neckNode: string;
    readonly leftshoulderNode: string;
    readonly rightshoulderNode: string;
    readonly leftarmNode: string;
    readonly rightarmNode: string;
    readonly lefthandNode: string;
    readonly righthandNode: string;
    readonly leftuplegNode: string;
    readonly rightuplegNode: string;
    readonly leftlegNode: string;
    readonly rightlegNode: string;
    readonly leftfootNode: string;
    readonly rightfootNode: string;
    readonly leftfingerNode: string;
    readonly rightfingerNode: string;
    readonly lefttoeNode: string;
    readonly righttoeNode: string;
    readonly leftwheelNode: string;
    readonly rightwheelNode: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this._category = values["category"];
      this.root = values["root"];
      this.scale = values["scale"];
      this.scaleDeviation = values["scale_deviation"];
      this.hipsNode = values["hips_node"];
      this.spineNode = values["spine_node"];
      this.weapon1Node = values["weapon1_node"];
      this.weapon2Node = values["weapon2_node"];
      this.weapon3Node = values["weapon3_node"];
      this.weapon4Node = values["weapon4_node"];
      this.weapon5Node = values["weapon5_node"];
      this.headNode = values["head_node"];
      this.neckNode = values["neck_node"];
      this.leftshoulderNode = values["leftshoulder_node"];
      this.rightshoulderNode = values["rightshoulder_node"];
      this.leftarmNode = values["leftarm_node"];
      this.rightarmNode = values["rightarm_node"];
      this.lefthandNode = values["lefthand_node"];
      this.righthandNode = values["righthand_node"];
      this.leftuplegNode = values["leftupleg_node"];
      this.rightuplegNode = values["rightupleg_node"];
      this.leftlegNode = values["leftleg_node"];
      this.rightlegNode = values["rightleg_node"];
      this.leftfootNode = values["leftfoot_node"];
      this.rightfootNode = values["rightfoot_node"];
      this.leftfingerNode = values["leftfinger_node"];
      this.rightfingerNode = values["rightfinger_node"];
      this.lefttoeNode = values["lefttoe_node"];
      this.righttoeNode = values["righttoe_node"];
      this.leftwheelNode = values["leftwheel_node"];
      this.rightwheelNode = values["rightwheel_node"];
    }
    
    get category(): BattleSkeletonCategoryEnums.Entry | undefined {
      const collection = <BattleSkeletonCategoryEnums.Entry[]>this.collectionCache.getCollection(BattleSkeletonCategoryEnums.KEY, BattleSkeletonCategoryEnums.Entry);
      return collection.find(entry => entry.type === this._category);
    }
  }
}

export default BattleSkeletons;
