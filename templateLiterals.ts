export type Greeting = `Hi${string}`;

const printGreeting = (greeting: Greeting) => {
  console.log(greeting);
};

printGreeting("Hi, John!");
// printGreeting("Kang");

type Tools = "Core Java and Spring Boot" | "Golang" | "Node, MongoDB and React";
type MultipleTools = Extract<Tools, `${string} and ${string}`>;

const test: MultipleTools = "Core Java and Spring Boot";

type FrameWork = "NodeJS" | "Spring" | "Flask";
type Database = "GraphQL" | "MongoDB";
type FraeWorkWithDatabase = `${FrameWork} with ${Database}`;

type TemplageLiteralKeys = "id" | "title" | "author";
type ObjWithKeys = Record<Uppercase<TemplageLiteralKeys>, string>;
