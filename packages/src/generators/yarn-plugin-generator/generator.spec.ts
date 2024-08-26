import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { yarnPluginGeneratorGenerator } from './generator';
import { YarnPluginGeneratorGeneratorSchema } from './schema';

describe('yarn-plugin-generator generator', () => {
  let tree: Tree;
  const options: YarnPluginGeneratorGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await yarnPluginGeneratorGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
