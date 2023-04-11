import type { ComputedRef, Ref } from "vue";

export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>
