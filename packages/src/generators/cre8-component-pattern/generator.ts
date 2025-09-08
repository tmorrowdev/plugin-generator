import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { Cre8ComponentPatternGeneratorSchema } from './schema';

interface NormalizedSchema extends Cre8ComponentPatternGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
}

function normalizeOptions(
  tree: Tree,
  options: Cre8ComponentPatternGeneratorSchema
): NormalizedSchema {
  const name = options.name.replace(/\s+/g, '-').toLowerCase();
  const projectDirectory = options.directory ? `${options.directory}/${name}` : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${projectDirectory}`;

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...{ tmpl: '' },
    name: options.name,
    className: options.name.charAt(0).toUpperCase() + options.name.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()),
    pattern: options.pattern,
  };
  
  // Generate the main pattern file from the specific pattern directory
  generateFiles(
    tree, 
    path.join(__dirname, 'files', options.pattern), 
    options.projectRoot, 
    templateOptions
  );
  
  // Generate common files (stories and tests) if requested
  if (options.includeStorybook) {
    const storyTemplate = tree.read(path.join(__dirname, 'files', '__name__.stories.ts.template'));
    if (storyTemplate) {
      tree.write(
        path.join(options.projectRoot, `${options.name}.stories.ts`),
        storyTemplate.toString().replace(/__name__/g, options.name).replace(/<%= className %>/g, templateOptions.className).replace(/<%= pattern %>/g, options.pattern)
      );
    }
  }
  
  if (options.includeTests) {
    const testTemplate = tree.read(path.join(__dirname, 'files', '__name__.spec.ts.template'));
    if (testTemplate) {
      tree.write(
        path.join(options.projectRoot, `${options.name}.spec.ts`),
        testTemplate.toString().replace(/__name__/g, options.name).replace(/<%= className %>/g, templateOptions.className).replace(/<%= pattern %>/g, options.pattern)
      );
    }
  }
}

export default async function (tree: Tree, options: Cre8ComponentPatternGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  
  addFiles(tree, normalizedOptions);
  
  await formatFiles(tree);
}