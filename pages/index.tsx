
import CaseStudy from '@/components/CaseStudy'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <CaseStudy 
        mainImage="/casestudy/rugpass/mainImage.png"
        title="RugPass"
        primaryColor="#1A1828"
        secundaryColor="#151421"
        timeTaken="5 days"
        overview="Marketing Trailer"
        client="RugPass"
        mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        trailerVideo="/placeholdervideo.mp4"
        styleframesImage_1="/casestudy/rugpass/styleframesimage1.png"
        styleframesImage_2="/casestudy/rugpass/styleframesimage2.png"
        styleframesImage_3="/casestudy/rugpass/styleframesimage3.png"
        styleframesText_1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
        styleframesText_2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
        styleframesText_3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
        breakdownImage_1="/placeholderImage.png"
        breakdownImage_2="/placeholderImage.png"
        breakdownImage_3="/placeholderImage.png"
        breakdownImage_4="/placeholderImage.png"
        breakdownImage_5="/placeholderImage.png"
        breakdownText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        getInTouchText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      >
      </CaseStudy>
    </div>
    
  )
}
