type BuildObject<T, E extends string | undefined = undefined> = {
  prop1: T;
  prop2: E;
};

type Test = BuildObject<string, string>;
type Tes2 = BuildObject<string>;

type FunctionTypes<T extends (...args: any) => any> = {
  receives: Parameters<T>;
  returns: ReturnType<T>;
};

type Test1 = FunctionTypes<() => number>;
type Test2 = FunctionTypes<(str: string) => boolean>;
type Test3 = FunctionTypes<(a: number, b: number) => void>;

//tuples
type Arr<T> = [T, ...Array<T>];
const processArray = (input: Arr<string>) => {};

processArray(["bla"]);
processArray(["bla", "blabla", "blablabla"]);
