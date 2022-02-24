import randomString from "randomstring";
import { program } from "commander";

program
  .command("rdstr")
  .description("random a string")
  .argument("[length]", "string length", 24)
  .action((length) => {
    console.log(randomString.generate(parseInt(length)));
  });

program.parse(process.argv);
