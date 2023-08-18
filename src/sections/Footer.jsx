import { copyrightSign } from "../assets/icons"
import { logolight } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
            <a className="flex justify-end sm:w-3/5" href="/">
              <img className="sm:block hidden" src={logolight} width={120} height={46} /> 
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Prepare Your Grooming Regimen with our Finest Selections at DaariMooch. Discover Your Ideal Products and Reap the Rewards of a Well-Groomed Journey</p>
            <div className="flex items-center mt-8 gap-5">
              {socialMedia.map((platform)=>(
                <div key={platform.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <img 
                    src={platform.src}
                    alt={platform.alt}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map(section=>(
                <div key={section.title}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                  <ul>
                    {section.links.map(link=>(
                      <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:text-slate-gray">
                        <a>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
              <img src={copyrightSign} alt="CopyRight" width={20} height={20} className="rounded-full m-0"/>
              <p>Copyright. All rights reserved.</p>
          </div>
          <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
