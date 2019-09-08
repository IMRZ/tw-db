import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityStrategicComponents } from "./CaiPersonalityStrategicComponents";
export declare namespace CaiPersonalityStrategicDesiredAttitudes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _strategicComponent: string;
        readonly bestFriendsAttitude: number;
        readonly veryFriendlyAttitude: number;
        readonly friendlyAttitude: number;
        readonly neutralAttitude: number;
        readonly unfriendlyAttitude: number;
        readonly veryUnfriendlyAttitude: number;
        readonly bitterEnemiesAttitude: number;
        readonly bestFriendsPositiveFactor: number;
        readonly veryFriendlyPositiveFactor: number;
        readonly friendlyPositiveFactor: number;
        readonly neutralPositiveFactor: number;
        readonly unfriendlyPositiveFactor: number;
        readonly veryUnfriendlyPositiveFactor: number;
        readonly bitterEnemiesPositiveFactor: number;
        readonly bestFriendsNegativeFactor: number;
        readonly veryFriendlyNegativeFactor: number;
        readonly friendlyNegativeFactor: number;
        readonly neutralNegativeFactor: number;
        readonly unfriendlyNegativeFactor: number;
        readonly veryUnfriendlyNegativeFactor: number;
        readonly bitterEnemiesNegativeFactor: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly strategicComponent: CaiPersonalityStrategicComponents.Entry | undefined;
    }
}
export default CaiPersonalityStrategicDesiredAttitudes;
