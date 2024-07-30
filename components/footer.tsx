import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
        <footer className="p-4 text-center min-h-[150px] flex flex-col md:flex-row items-start justify-between md:px-10 lg:px-32 py-10">
            <div className="flex items-center">
                <div className="mb-5 space-x-5 md:mr-auto md:mb-0 flex">
                    <SocialIcon url="https://www.github.com/Mack2133" target="_blank" fgColor="#fff" bgColor="#000" style={{ height: 50, width: 50 }} />
                    <SocialIcon url="https://www.linkedin.com/in/ayyoob-ajward-4b6a1b1b7/" target="_blank" fgColor="#fff" bgColor="#000" style={{ height: 50, width: 50 }} />
                    <SocialIcon url="https://stackoverflow.com/users/21543530/ayyoob-ajward" target="_blank" fgColor="#fff" bgColor="#000" style={{ height: 50, width: 50 }} />
                    <SocialIcon url="https://www.instagram.com/millionmacck/" fgColor="#fff" target="_blank" bgColor="#000" style={{ height: 50, width: 50 }} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
