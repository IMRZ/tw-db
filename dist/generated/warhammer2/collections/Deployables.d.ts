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
        readonly model: ModelsDeployables.Entry | undefined;
        readonly model2: ModelsDeployables.Entry | undefined;
        readonly category: DeployablesCategories.Entry | undefined;
        readonly explosion: ProjectilesExplosions.Entry | undefined;
        readonly underConstructionEffect: ParticleEffects.Entry | undefined;
        readonly audioMaterial: AudioMaterials.Entry | undefined;
    }
}
export default Deployables;
