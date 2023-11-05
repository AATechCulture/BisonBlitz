import { mergeSchemas } from '@graphql-tools/schema';
type MergeInParms = Parameters<typeof mergeSchemas>[0];

export interface MutationArg<T> {
  input: T;
}

export function mergeModulesSchemaWith(mergeIn: MergeInParms) {
  return mergeSchemas({
    ...mergeIn,
  });
}

type ResolverFunction<TModel, C> = (obj: TModel, args: any, context: C) => any;

export type Resolver<TResult, TModel, C> = Record<
  Exclude<keyof TResult, keyof TModel | '__typename'>,
  ResolverFunction<TModel, C>
> &
  Partial<Record<keyof TResult, ResolverFunction<TModel, C>>>;
