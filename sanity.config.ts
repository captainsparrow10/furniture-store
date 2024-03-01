import { defineConfig } from 'sanity'
import { dataset, projectId } from './sanity/env'

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
})
