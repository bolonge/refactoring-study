import fs from "fs";

run(process.argv);

function run(args) {
  const command = parseCommand(args);
  countOrders(command);

  function parseCommand(args) {
    if (!args[2]) {
      throw new Error("파일 이름을 입력하세요");
    }

    const fileName = `./${args[2]}.json`;
    if (!fs.existsSync(fileName)) {
      throw new Error("파일이 존재하지 않습니다");
    }

    const countReadyOnly = args.includes("-r");

    return {
      fileName,
      countReadyOnly,
    };
  }

  function countOrders({ fileName, countReadyOnly }) {
    const rawData = fs.readFileSync(fileName);
    const orders = JSON.parse(rawData);
    const filtered = countReadyOnly
      ? orders.filter((order) => order.status === "ready")
      : orders;

    console.log(filtered.length);
  }
}
