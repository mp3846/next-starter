/** @type {import('next').NextConfig} */
import { resolve } from 'path'

const nextConfig = {
	webpack: (config) => {
		config.resolve.modules.push(resolve('./'))
		return config
	}
}

export default nextConfig
