import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import simpleStackForm from "simple-stack-form";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import partytown from "@astrojs/partytown";
import remarkMermaid from "remark-mermaidjs";

import remarkMath from "remark-math";
// https://astro.build/config
export default defineConfig({
	site: "https://studyingtax.sikumi.jp",
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "github-dark",
			wrap: true,
		},
		gfm: true,
		remarkPlugins: [remarkMermaid, remarkMath],
	},
	integrations: [
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: {
				theme: "github-dark-dimmed",
			},
			gfm: true,
			remarkPlugins: [remarkMermaid, remarkMath],
		}),
		icon(),
		sitemap(),
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
		db(),
		simpleStackForm(),
		sentry(),
		spotlightjs(),
		partytown(),
	],
	output: "hybrid",
	adapter: vercel({
		analytics: true,
	}),
});
