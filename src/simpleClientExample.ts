import logger from ".";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async function () {
  for (let i = 0; i < 100; i++) {
    logger.error("errrrrroooooououo");
    await sleep(500);
    logger.debug("de d debuuuuuug");
  }
})();
