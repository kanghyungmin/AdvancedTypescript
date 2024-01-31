export type Action =
  | {
      method: "GET";
      description: "Fetch users.";
    }
  | {
      method: "POST";
      description: "Add a user.";
    }
  | {
      method: "DELETE";
      description: "Delete a user.";
    };

type RequestActions = Extract<Action, { method: "POST" }>;
type NoDeleteAction = Exclude<Action, { method: "POST" }>;
type ActionType = Action["method"];

const values = {
  Int: 23,
  String: "A string",
  Boolean: false,
  obj: {
    key: "a string",
    key2: 89,
  },
};

type Values = typeof values;
type IntType = Values["Int"];
type stringType = Values["String"];
type BooleanType = Values["Boolean"];
type ObjectType = Values["obj"]["key2"];

const STATUS = {
  bla: "Request is pending",
  FAILED: "Request failed",
  SUCCESS: "Request was successful",
} as const;

// type StatusWithResult = (typeof STATUS)["FAILED" | "SUCCESS"];

type StatusObj = typeof STATUS;
type Status = StatusObj[keyof StatusObj];
type Status2 = StatusObj["FAILED"];

const languages = ["java", "c", "go"] as const;

type JavaOrGo = (typeof languages)[0 | 1];
type Languages = (typeof languages)[number];
