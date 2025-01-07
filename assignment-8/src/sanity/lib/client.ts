import { createClient } from "next-sanity";
import { apiVersion,apiToken,dataset, projectId } from '../env'

export const client = createClient({
  projectId:projectId,
  dataset:dataset,
  apiVersion:apiVersion,
  token:apiToken,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})