//export type GetNameValue<T> = T extends { name: any } ? T["name"] : never;
export type GetNameValueWithInfer<T> = T extends { name: infer E } ? E : never;

type Test = GetNameValueWithInfer<{ name1: "blabla" }>;
type Test2 = GetNameValueWithInfer<{ name: { key: 123 } }>;

export interface CustomInterface<E, C, P> {
  retrieveE: () => E;
  fetchC: () => C;
  acquireP: () => P;
}

type NewType = CustomInterface<"E val", "C val", "p Val">;
type Values<T> = T extends CustomInterface<any, any, infer P> ? P : never;
type test = Values<NewType>;

//infer Template Literals
export type MiddleWords<T> =
  T extends `${infer FirstPart} ${infer MiddlePart} ${infer LastPart}`
    ? MiddlePart
    : never;

type test1 = MiddleWords<"Time flies fast">;
type test2 = MiddleWords<"Life constantly changes">;
type test3 = MiddleWords<"Dreams never die">;
type test4 = MiddleWords<"Nature remains beautiful">;

//infer Promise
export const fakeFetch = async () => {
  return {
    id: "test_id",
  };
};

const getFakeData = async () => {
  const data = await fakeFetch();
  return {
    result: {
      data,
    },
  };
};

type InferDataFromResult<T> = T extends () => Promise<{ result: infer E }>
  ? E
  : never;
type test10 = InferDataFromResult<typeof getFakeData>;

//Distributive Conditional Types
export type ProgrammingLanguage = "Java" | "Goland" | "C";

type JavaOrC<T> = T extends "Java" | "C" ? T : never;
type test11 = JavaOrC<ProgrammingLanguage>;
