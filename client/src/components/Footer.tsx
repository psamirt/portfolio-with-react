import { AiFillLinkedin, AiFillGithub,AiOutlineWhatsApp } from 'react-icons/ai'
const Footer = () => {
	return (
	  <footer className="bg-slate-900 w-full absolute bottom-1 mt-auto ">
		<hr className="my-2" />
		<ul className="flex justify-evenly">
		  <a className="flex flex-col items-center"
		  href='https://www.linkedin.com/in/paolo-tello-7a1872285'
		  target='_blank'
		  >
			<AiFillLinkedin size={40} className='text-blue-700' />
			<span>LinkedIn</span>
		  </a>
		  <a className="flex flex-col items-center"
		  href='https://github.com/psamirt'
		  target='_blank'
		  >
			<AiFillGithub size={40} />
			<span>GitHub</span>
		  </a>
		  <a className="flex flex-col items-center"
		  href='http://api.whatsapp.com/send?phone=51982254431'
		  target='_blank'>
			<AiOutlineWhatsApp size={40} className='text-green-700' />
			<span>WhatsApp</span>
		  </a>
		</ul>
	  </footer>
	);
  };
  
  export default Footer;
  