import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	generates: {
		'./src/app-schemas/server.ts': {
			schema: 'schema/server.graphql',
			documents: 'src/app-clients/server/*.{graphql,gql}',
			plugins: ['typescript', 'typescript-operations'],
		},
		'./src/app-schemas/app.ts': {
			schema: 'schema/app.graphql',
			documents: 'src/app-clients/app/*.{graphql,gql}',
			plugins: ['typescript', 'typescript-operations'],
		},
		'./src/app-hooks/gql-generated/app.ts': {
			schema: 'schema/app.graphql',
			documents: ['src/app-clients/app/*.{graphql,gql}'],
			preset: 'import-types',
			presetConfig: {
				typesPath: '@app-schemas/app',
			},
			plugins: ['typescript-react-apollo'],
			config: {
				widthHooks: true,
			},
		},
		'./src/app-hooks/gql-generated/server.ts': {
			schema: 'schema/server.graphql',
			documents: ['src/app-clients/server/*.{graphql,gql}'],
			preset: 'import-types',
			presetConfig: {
				typesPath: '@app-schemas/server',
			},
			plugins: ['typescript-react-apollo'],
			config: {
				widthHooks: true,
			},
		},
		'./src/app-schemas/graphql.ts': {
			schema: 'schema/graphql.graphql',
			documents: 'src/app-clients/graphql/*.{graphql,gql}',
			plugins: ['typescript', 'typescript-operations'],
		},
		'./src/app-hooks/gql-generated/graphql.ts': {
			schema: 'schema/graphql.graphql',
			documents: ['src/app-clients/graphql/*.{graphql,gql}'],
			preset: 'import-types',
			presetConfig: {
				typesPath: '@app-schemas/graphql',
			},
			plugins: ['typescript-react-apollo'],
			config: {
				widthHooks: true,
			},
		},
	},
	hooks: {
		afterAllFileWrite: 'prettier --write',
	},
};

export default config;
