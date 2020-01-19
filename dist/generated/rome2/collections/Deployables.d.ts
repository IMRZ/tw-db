import { CollectionCache, CollectionKey } from "../../../common";
import { ModelsDeployables } from "./ModelsDeployables";
import { UiUnitStats } from "./UiUnitStats";
import { UnitStatModifiersHowEnums } from "./UnitStatModifiersHowEnums";
export declare namespace Deployables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly name: string;
        readonly _model: string;
        readonly _model2: string;
        readonly number: number;
        readonly spacingX: number;
        readonly spacingY: number;
        readonly minRows: number;
        readonly minColumns: number;
        readonly randomOffset: number;
        readonly hitpoints: number;
        readonly killChance: number;
        readonly _statMod: string;
        readonly value: number;
        readonly _how: string;
        readonly iconName: string;
        readonly infoPic: string;
        readonly description: string;
        readonly tooltip: string;
        readonly inEncyclopaedia: boolean;
        readonly recruitmentCap: number;
        readonly maxRows: number;
        readonly ignitionThreshold: number;
        constructor(collectionCache: CollectionCache, values: any);
        get model(): ModelsDeployables.Entry | undefined;
        get model2(): ModelsDeployables.Entry | undefined;
        get statMod(): UiUnitStats.Entry | undefined;
        get how(): UnitStatModifiersHowEnums.Entry | undefined;
    }
}
export default Deployables;
