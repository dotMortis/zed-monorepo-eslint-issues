import { DebugA } from "@repo/a";
import { DebugB } from "@repo/b";

function debugServer(): void {
      // should have 6 tab width
      // should warn -> Unexpected console statement. (eslint no-console)
      // should have double quotes
      console.log("hello from server");
      DebugA();
      DebugB();
}
debugServer();
