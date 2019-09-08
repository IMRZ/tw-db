
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSkeletonsLocomotionEnums } from "./BattleSkeletonsLocomotionEnums";
import { TexcExpansions } from "./TexcExpansions";

export namespace BattleSkeletons {
  export const KEY = new CollectionKey("battle_skeletons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
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
    readonly categoryMan: boolean;
    readonly categoryMount: boolean;
    readonly categoryEngine: boolean;
    readonly weapon6Node: string;
    readonly categoryAnimal: boolean;
    readonly categoryFauna: boolean;
    readonly cinematic: boolean;
    readonly _locomotion: string;
    readonly leftwingbaseNode: string;
    readonly rightwingbaseNode: string;
    readonly filterProjectilesNode: string;
    readonly headTrackingAngle: number;
    readonly backNode: string;
    readonly frontLeftUpperLegNode: string;
    readonly frontRightUpperLegNode: string;
    readonly frontLefttoeNode: string;
    readonly frontRighttoeNode: string;
    readonly rearLeftUpperLegNode: string;
    readonly rearRightUpperLegNode: string;
    readonly rearLefttoeNode: string;
    readonly rearRighttoeNode: string;
    readonly footstepNodes: string;
    readonly footstepDetectionHeight: number;
    readonly articulationNode: string;
    readonly flyingPivotNode: string;
    readonly torsoSpliceNode: string;
    readonly _gameExpansionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
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
      this.categoryMan = !!values["category_man"];
      this.categoryMount = !!values["category_mount"];
      this.categoryEngine = !!values["category_engine"];
      this.weapon6Node = values["weapon6_node"];
      this.categoryAnimal = !!values["category_animal"];
      this.categoryFauna = !!values["category_fauna"];
      this.cinematic = !!values["cinematic"];
      this._locomotion = values["locomotion"];
      this.leftwingbaseNode = values["leftwingbase_node"];
      this.rightwingbaseNode = values["rightwingbase_node"];
      this.filterProjectilesNode = values["filter_projectiles_node"];
      this.headTrackingAngle = values["head_tracking_angle"];
      this.backNode = values["back_node"];
      this.frontLeftUpperLegNode = values["front_left_upper_leg_node"];
      this.frontRightUpperLegNode = values["front_right_upper_leg_node"];
      this.frontLefttoeNode = values["front_lefttoe_node"];
      this.frontRighttoeNode = values["front_righttoe_node"];
      this.rearLeftUpperLegNode = values["rear_left_upper_leg_node"];
      this.rearRightUpperLegNode = values["rear_right_upper_leg_node"];
      this.rearLefttoeNode = values["rear_lefttoe_node"];
      this.rearRighttoeNode = values["rear_righttoe_node"];
      this.footstepNodes = values["footstep_nodes"];
      this.footstepDetectionHeight = values["footstep_detection_height"];
      this.articulationNode = values["articulation_node"];
      this.flyingPivotNode = values["flying_pivot_node"];
      this.torsoSpliceNode = values["torso_splice_node"];
      this._gameExpansionKey = values["game_expansion_key"];
    }
    
    get locomotion(): BattleSkeletonsLocomotionEnums.Entry | undefined {
      const collection = <BattleSkeletonsLocomotionEnums.Entry[]>this.collectionCache.getCollection(BattleSkeletonsLocomotionEnums.KEY, BattleSkeletonsLocomotionEnums.Entry);
      return collection.find(entry => entry.key === this._locomotion);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
  }
}

export default BattleSkeletons;
