import { Tree, formatFiles, installPackagesTask } from '@nx/devkit';
import { joinPathFragments } from '@nx/devkit/src/utils/path';



export default async function (tree: Tree, schema: MyYarnPluginGeneratorSchema) {
  // Update package.json to use Yarn 3
  updatePackageJson(tree);

  // Create or update yarnrc.yaml
  createOrUpdateYarnrcYaml(tree, schema.privateRegistryUrl);

  // Format files
  await formatFiles(tree);
}

function updatePackageJson(tree: Tree) {
  const packageJson = tree.read('package.json', 'json');
  packageJson.packageManager = 'yarn@3.4.1';
  tree.write('package.json', JSON.stringify(packageJson, null, 2));
}

function createOrUpdateYarnrcYaml(tree: Tree, privateRegistryUrl: string) {
  const yarnrcYamlPath = joinPathFragments('/', '.yarnrc.yaml');
  const yarnrcYaml = tree.exists(yarnrcYamlPath)
    ? tree.read(yarnrcYamlPath, 'utf-8')
    : '';

  const updatedYarnrcYaml = `
npmScopes:
  @esi: 
     npmRegistries: https://
`;

  tree.write(yarnrcYamlPath, updatedYarnrcYaml.trim());
}