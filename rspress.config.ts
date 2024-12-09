import * as path from "path";
import { defineConfig } from "rspress/config";
import { withZephyr } from "zephyr-rspack-plugin";
import { RsbuildPlugin } from "@rsbuild/core";

const zephyrRsbuildPlugin = (): RsbuildPlugin => ({
  name: "zephyr-rsbuild-plugin",
  setup(api) {
    api.modifyRspackConfig(async (config, utils) => {
      config = await withZephyr()(config);
    });
  },
  pre: ["RsbuildCorePlugin", "RsbuildHtmlPlugin", "DefinePlugin"]
});

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Docs Demo",
  description: "Rspack-based Static Site Generator",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png"
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress"
      }
    ]
  },
  builderConfig: {
    output: {
      copy: {
        patterns: [{ from: "docs/public" }]
      }
    },
    plugins: [zephyrRsbuildPlugin()]
  }
});
