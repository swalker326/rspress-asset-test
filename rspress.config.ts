import * as path from "node:path";
import { defineConfig } from "rspress/config";
import type { RspressPlugin } from "@rspress/core";

const testPlugin = (): RspressPlugin => ({
  name: "test-plugin",
  builderConfig: {
    tools: {
      rspack: () => {
        console.log("!!!rspress plugin");
      }
    }
  }
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
    }
  },
  plugins: [testPlugin()]
});
