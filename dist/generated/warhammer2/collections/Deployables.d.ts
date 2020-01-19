import { CollectionCache, CollectionKey } from "../../../common";
import { ModelsDeployables } from "./ModelsDeployables";
import { DeployablesCategories } from "./DeployablesCategories";
import { ProjectilesExplosions } from "./ProjectilesExplosions";
import { ParticleEffects } from "./ParticleEffects";
import { AudioMaterials } from "./AudioMaterials";
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
        readonly value: number;
        readonly iconName: string;
        readonly description: string;
        readonly tooltip: string;
        readonly recruitmentCap: number;
        readonly maxRows: number;
        readonly ignitionThreshold: number;
        readonly _category: string;
        readonly _explosion: string;
        readonly _underConstructionEffect: string;
        readonly _audioMaterial: string;
        readonly customBattleEnabled: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get model(): ModelsDeployables.Entry | undefined;
        get model2(): ModelsDeployables.Entry | undefined;
        get category(): DeployablesCategories.Entry | undefined;
        get explosion(): ProjectilesExplosions.Entry | undefined;
        get underConstructionEffect(): ParticleEffects.Entry | undefined;
        get audioMaterial(): AudioMaterials.Entry | undefined;
    }
}
export default Deployables;
