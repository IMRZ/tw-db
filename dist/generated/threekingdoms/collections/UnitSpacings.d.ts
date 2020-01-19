import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitSpacings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly closeFormationSpacingHorizontal: number;
        readonly closeFormationSpacingVertical: number;
        readonly closeFormationSpacingVariation: number;
        readonly looseFormationSpacingHorizontal: number;
        readonly looseFormationSpacingVertical: number;
        readonly looseFormationSpacingVariation: number;
        readonly dismountedCloseFormationSpacingHorizontal: number;
        readonly dismountedCloseFormationSpacingVertical: number;
        readonly dismountedCloseFormationSpacingVariation: number;
        readonly dismountedLooseFormationSpacingHorizontal: number;
        readonly dismountedLooseFormationSpacingVertical: number;
        readonly dismountedLooseFormationSpacingVariation: number;
        readonly routingSpaceVariation: number;
        readonly unitMoveIntialDelayPerRowMax: number;
        readonly unitMoveMaxDisorganisedModifier: number;
        readonly unitMoveDecayPerRowModifierMax: number;
        readonly unitMoveDecayPerRowModifierMin: number;
        readonly isChaoticFormation: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitSpacings;
