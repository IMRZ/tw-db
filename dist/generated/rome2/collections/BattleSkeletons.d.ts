import { CollectionCache, CollectionKey } from "../../../common";
import { BattleSkeletonCategoryEnums } from "./BattleSkeletonCategoryEnums";
export declare namespace BattleSkeletons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: BattleSkeletonCategoryEnums.Entry | undefined;
    }
}
export default BattleSkeletons;
