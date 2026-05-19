import Navbar from "@/components/shows/Navbar";
import HeroSection from "@/components/shows/HeroSection";
import AboutSection from "@/components/shows/AboutSection";
import FormatsSection from "@/components/shows/FormatsSection";
import RepertoireSection from "@/components/shows/RepertoireSection";
import VideoSection from "@/components/shows/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <FormatsSection />
            <RepertoireSection />
            <VideoSection />
            <Footer />
        </div>
    );
};

export default Index;
