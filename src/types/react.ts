export type PickOptionals<T extends object> = Exclude<{
  [K in keyof T]: T extends Record<K, T[K]> ? never : K
}[keyof T], undefined>

export type ExtractOptionals<T extends object> = Pick<T, PickOptionals<T>>

export type RequireOne<Type, Key extends keyof Type> = Omit<
  Type, Key
> & Required<Pick<Type, Key>>

export type RequireAll<T> = {
  [P in keyof Required<T>]: Pick<T, P> extends
  Required<Pick<T, P>> ? T[P] : (T[P] | undefined)
}

export type MakeKeyOptional<T, K extends keyof T> = Pick<Partial<T>, K>
  & Omit<T, K>

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>
}

export interface Component<P extends Object = {}> {
  (props: React.PropsWithChildren<P>): React.ReactElement<any, any> | null
  propTypes: any
}

export interface RefComponent<P extends Object = {}> {
  (props: React.PropsWithChildren<P> & { ref?: any }): React.ReactElement<
    any, any
  > | null
  propTypes?: any
}
