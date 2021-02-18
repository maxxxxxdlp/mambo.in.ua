import Layout from '../components/Layout';
import Link from 'next/link';
import {socialMedias, SocialMediaImage} from '../components/SocialMediaIcons';
import * as R from 'ramda';

const links: {
	label: string,
	url: string,
	className: string,
	image?: typeof socialMedias[number]
}[] = [
	{
		label: 'Facebook',
		url: 'https://www.facebook.com/mamboyoutube/',
		className: 'from-facebook-dark to-facebook-light',
		image: 'facebook',
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/maxxxxxdlp1/',
		className: 'from-twitter-dark to-twitter-light',
		image: 'twitter',
	},
	{
		label: 'Instagram',
		url: 'https://www.instagram.com/mambo_youtube/',
		className: 'from-instagram-dark to-instagram-light',
		image: 'instagram',
	},
	{
		label: 'maksym.patiiuk@ku.edu',
		url: 'mailto:maksym.patiiuk@ku.edu',
		className: 'from-email-dark to-email-light',
	},
	{
		label: 'LinkedIn',
		url: 'https://www.linkedin.com/in/maksym-patiiuk/',
		className: 'from-linked_in-dark to-linked_in-light',
		image: 'linked_in',
	},
	{
		label: 'Steam',
		url: 'https://steamcommunity.com/id/maxxxxxdlp/',
		className: 'from-steam-dark to-steam-light',
		image: 'steam',
	}
];

export default function index() {
	return <Layout>{
		() => <div
			className={`grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3
				lg:grid-cols-3 lg:grid-rows-2 lg:h-screen`}
		>{
			R.map(({
				label,
				url,
				className,
				image,
			})=>
				<Link href={url} key={label}>
					<a
						target="_blank"
						className={`relative flex justify-center items-center
							p-20 bg-gradient-to-tr ${className}
							hover:bg-gradient-to-bl text-white hover:p-24
							motion-safe:transition-all focus:text-gray-200
							duration-200 group`}
					>
						{
							image &&
							<SocialMediaImage
								className={'w-full h-full'}
								imageName={image}
							/>
						}
						<span
							className={`text-xl md:text-3xl group-hover:text-sm
								md:group-hover:text-2xl ${image && 'sr-only'}`}
						>{label}</span>
					</a>
				</Link>
			,links)
		}</div>
	}</Layout>;
}
