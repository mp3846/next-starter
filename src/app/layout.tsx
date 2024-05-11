import type { Metadata } from 'next'
import 'src/app/styles/globals.css'

export const metadata: Metadata = {
	title: 'Next Template',
	description: 'Created by MP'
}

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}

RootLayout.displayName = 'RootLayout'
export default RootLayout
