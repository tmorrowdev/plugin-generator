export interface Cre8ComponentPatternGeneratorSchema {
  name: string;
  pattern: 'layout' | 'navigation' | 'form' | 'data-display' | 'feedback' | 'interaction';
  directory: string;
  includeTests: boolean;
  includeStorybook: boolean;
}