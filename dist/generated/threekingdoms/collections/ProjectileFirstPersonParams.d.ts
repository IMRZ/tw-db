import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ProjectileFirstPersonParams {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly invertPitchControl: boolean;
        readonly mouseSensitivity: number;
        readonly angularVelocityDecay: number;
        readonly gravity: number;
        readonly launchElevation: number;
        readonly launchSpeed: number;
        readonly liftCoefficent: number;
        readonly tailCoefficent: number;
        readonly dragCoefficent: number;
        readonly cameraYOffset: number;
        readonly cameraZOffset: number;
        readonly impactViewTime: number;
        readonly impactViewElevation: number;
        readonly impactViewDistance: number;
        readonly yawControl: boolean;
        readonly yawCoefficient: number;
        readonly useReloadStage: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ProjectileFirstPersonParams;
