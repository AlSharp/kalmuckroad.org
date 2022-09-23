/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    version: "0.1.1"
  },
	experimental: {
		images: {
			allowFutureImage: true
		}
	},
  webpack: (config) => {
    config.module.rules
			.find(({oneOf}) => !!oneOf).oneOf
			.filter(({use}) => JSON.stringify(use)?.includes('css-loader'))
			.reduce((acc, {use}) => acc.concat(use), [])
			.forEach(({options}) => {
				if (options.modules) {
					options.modules.exportLocalsConvention = 'camelCase';
				}
			});

		return config;
  }
}

module.exports = nextConfig
