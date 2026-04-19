import puppeteer from "puppeteer";
import { mkdirSync, readdirSync } from "fs";

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";
const dir = "./screenshots";

mkdirSync(dir, { recursive: true });

const existing = readdirSync(dir).filter((f) => f.endsWith(".png")).length;
const filename = `${dir}/screenshot-${existing + 1}${label ? "-" + label : ""}.png`;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 15000 });
await page.screenshot({ path: filename, fullPage: false });
await browser.close();

console.log("Saved:", filename);
