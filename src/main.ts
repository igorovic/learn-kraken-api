import getBalance from "./api/balance";

async function main() {
  try {
    const response = await getBalance();
    if (response.data) {
      console.log(response.data);
    } else {
      console.log(response);
    }
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(() => {
    console.log("done");
  })
  .catch((e) => {
    console.error(e);
  });
