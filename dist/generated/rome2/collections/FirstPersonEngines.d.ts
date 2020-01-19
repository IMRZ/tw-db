import { CollectionCache, CollectionKey } from "../../../common";
import { GunTypesEnum } from "./GunTypesEnum";
export declare namespace FirstPersonEngines {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
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
        constructor(collectionCache: CollectionCache, values: any);
        get key(): GunTypesEnum.Entry | undefined;
    }
}
export default FirstPersonEngines;
