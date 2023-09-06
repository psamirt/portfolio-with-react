

const Home = (): JSX.Element => {
	return (
		<div className='max-w-[1280px] h-[720px] w-full m-auto py-16 px-4 relative '>
			<div className='absolute'>
				<video
					autoPlay
					loop
					muted
					className='object-cover rounded-xl'
				>
					<source src='background.mp4' type='video/mp4' />
				</video>
			</div>
		</div>
	)
}

export default Home
