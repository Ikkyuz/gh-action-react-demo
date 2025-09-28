import * as core from "@actions/core";
import * as exec from "@actions/exec";

async function main() {
  const token = core.getInput("token", {
    required: true,
    trimWhitespace: true,
  });
  const email = core.getInput("email", {
    required: true,
    trimWhitespace: true,
  });
  const distFolder = core.getInput("dist-folder", {
    required: true,
    trimWhitespace: true,
  });
  const domain = core.getInput("domain", {
    required: true,
    trimWhitespace: true,
  });

  const command = `npx surge --token ${token} --login ${email} ${distFolder} ${domain}`
  return exec.exec(command)

  // (ME Token)  bun x surge --token de09264e7fa8d3d7efe571646fbda314 --login djdjv999@gmail.com dist react-demo-docker.surge.sh
}

main();
