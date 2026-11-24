
export const taskCatalog = [
  {
    id: 'software-development',
    name: 'Software Development',
    description: 'Frontend and backend development tasks',

    tasks: [
      {
        id: 'angular-component',
        name: 'Generate Angular Component',
        description: 'Create reusable Angular components',
        inputs: [
          {
            name: 'framework',
            label: 'Angular Version',
            type: 'select',
            required: true,
            options: ['Angular 19', 'Angular 20', 'Angular 21']
          },
          {
            name: 'componentName',
            label: 'Component Name',
            type: 'text',
            required: true
          },
          {
            name: 'requirement',
            label: 'Requirements',
            type: 'textarea',
            required: true
          }
        ]
      },
      {
        id: 'angular-service',
        name: 'Generate Angular Service',
        description: 'Create reusable Angular services',
        inputs: [
          {
            name: 'serviceName',
            label: 'Service Name',
            type: 'text',
            required: true
          },
          {
            name: 'requirement',
            label: 'Requirements',
            type: 'textarea',
            required: true
          }
        ]
      },
      {
        id: 'angular-debug',
        name: 'Debug Angular Code',
        description: 'Find and fix Angular bugs',
        inputs: [
          {
            name: 'code',
            label: 'Code',
            type: 'textarea',
            required: true
          },
          {
            name: 'error',
            label: 'Error Message',
            type: 'textarea',
            required: false
          }
        ]
      }
    ]
  },

  {
    id: 'javascript-typescript',
    name: 'JavaScript / TypeScript',
    description: 'Programming and problem solving',

    tasks: [
      {
        id: 'javascript-problem',
        name: 'Solve Coding Problem',
        description: 'Solve JavaScript or TypeScript problems',
        inputs: [
          {
            name: 'problem',
            label: 'Problem Description',
            type: 'textarea',
            required: true
          }
        ]
      },
      {
        id: 'code-refactoring',
        name: 'Code Refactoring',
        description: 'Improve existing code',
        inputs: [
          {
            name: 'code',
            label: 'Existing Code',
            type: 'textarea',
            required: true
          }
        ]
      }
    ]
  },

  {
    id: 'api-development',
    name: 'API Development',
    description: 'Backend and REST API tasks',

    tasks: [
      {
        id: 'create-rest-api',
        name: 'Create REST API',
        description: 'Generate REST API endpoints',
        inputs: [
          {
            name: 'requirement',
            label: 'API Requirements',
            type: 'textarea',
            required: true
          }
        ]
      },
      {
        id: 'api-integration',
        name: 'API Integration',
        description: 'Integrate external APIs',
        inputs: [
          {
            name: 'apiDetails',
            label: 'API Details',
            type: 'textarea',
            required: true
          }
        ]
      }
    ]
  },

  {
    id: 'code-quality',
    name: 'Code Quality',
    description: 'Review and optimize code',

    tasks: [
      {
        id: 'code-review',
        name: 'Code Review',
        description: 'Review code and identify issues',
        inputs: [
          {
            name: 'code',
            label: 'Code to Review',
            type: 'textarea',
            required: true
          }
        ]
      },
      {
        id: 'performance-optimization',
        name: 'Performance Optimization',
        description: 'Identify performance improvements',
        inputs: [
          {
            name: 'code',
            label: 'Existing Code',
            type: 'textarea',
            required: true
          }
        ]
      }
    ]
  },

  {
    id: 'testing',
    name: 'Testing',
    description: 'Automated testing and test generation',

    tasks: [
      {
        id: 'unit-test',
        name: 'Generate Unit Tests',
        description: 'Generate unit test cases',
        inputs: [
          {
            name: 'code',
            label: 'Source Code',
            type: 'textarea',
            required: true
          },
          {
            name: 'testingFramework',
            label: 'Testing Framework',
            type: 'select',
            required: true,
            options: ['Jasmine', 'Jest', 'Vitest']
          }
        ]
      }
    ]
  }
];
