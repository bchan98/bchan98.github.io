import type { NextConfig } from "next";

const isGithubPages = proccess.env.GITHUB_PAGES === 'true';
const repo = 'bchan98.github.io';
const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    basepath: isGithubPages ? `/${repo}` : '',
    assetPrefix: isGithubPages ? `/${repo}` : '',
};


export default nextConfig;
