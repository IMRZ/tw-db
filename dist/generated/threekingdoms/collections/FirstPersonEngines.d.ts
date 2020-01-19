import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FirstPersonEngines {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly reloadTime: number;
        readonly autoTarget: boolean;
        readonly cameraOffsetX: number;
        readonly cameraOffsetY: number;
        readonly cameraOffsetZ: number;
        readonly nearClippingPlane: number;
        readonly trackProjectileDistance: number;
        readonly halfAccuracyArc: number;
        readonly halfHorizontalFireArc: number;
        readonly halfVerticalFireArcElevation: number;
        readonly turnDelay: number;
        readonly halfVerticalFireArcDeclination: number;
        readonly allowDirectControl: boolean;
        readonly showTrajectory: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FirstPersonEngines;
