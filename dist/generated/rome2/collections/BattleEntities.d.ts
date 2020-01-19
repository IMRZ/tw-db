import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntitiesTypesEnum } from "./BattleEntitiesTypesEnum";
export declare namespace BattleEntities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _type: string;
        readonly walkSpeed: number;
        readonly runSpeed: number;
        readonly acceleration: number;
        readonly deceleration: number;
        readonly chargeSpeed: number;
        readonly crawlSpeed: number;
        readonly chargeDistanceCommenceRun: number;
        readonly chargeDistanceAdoptChargePose: number;
        readonly chargeDistancePickTarget: number;
        readonly radius: number;
        readonly _shape: any;
        readonly radiiRatio: number;
        readonly mass: number;
        readonly height: number;
        readonly fireArcClose: number;
        readonly fireArcLoose: number;
        readonly turnSpeed: number;
        readonly hitPoints: number;
        readonly allowTurnToMoveAnim: boolean;
        readonly allowStaticTurnAnim: boolean;
        readonly trackingThreshold: number;
        readonly minTurningSpeed: number;
        readonly displayModelOffsetZ: number;
        constructor(collectionCache: CollectionCache, values: any);
        get type(): BattleEntitiesTypesEnum.Entry | undefined;
    }
}
export default BattleEntities;
