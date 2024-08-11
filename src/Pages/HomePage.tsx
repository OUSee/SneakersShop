import { AboutSection } from '../components/aboutSection/AboutSection'
import { CathalogueSection } from '../components/CathalogueSection/CathalogueSection'
import { ContactsSection } from '../components/ContactsSection/ContactsSection'
import { CrewSection } from '../components/CrewSection/CrewSection'
import { FAQSection } from '../components/FAQSection/FAQSection'
import { HeroSection } from '../components/Hero/HeroSection'
import { SelectSection } from '../components/SelectSection/SelectSection'
    
export const HomePage = () => {
    return ( 
        <>
            <HeroSection />
        
            <CathalogueSection />

            <AboutSection />

            <SelectSection />

            <CrewSection />

            <FAQSection />

            <ContactsSection />
        </>
    )
}