
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Adaptation = () => {
  return (
    <Layout>
      <HeroSection
        title="Adaptation Campaigns"
        subtitle="Building climate resilience across Ghana's communities"
      />
      
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Climate Adaptation in Ghana" 
            subtitle="Strategies and initiatives to build resilience"
          />
          
          <p className="text-lg mb-8">
            Climate adaptation in Ghana encompasses a wide range of strategies aimed at reducing vulnerability to climate impacts and building resilience across different sectors. From agricultural innovations to coastal protection, these initiatives help communities prepare for and respond to climate challenges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Agricultural Adaptation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Introduction of drought-resistant crop varieties</li>
                  <li>Conservation agriculture techniques</li>
                  <li>Improved irrigation systems</li>
                  <li>Weather information services for farmers</li>
                  <li>Agroforestry and soil conservation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Water Resource Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rainwater harvesting systems</li>
                  <li>Watershed management and protection</li>
                  <li>Efficient water use technologies</li>
                  <li>Flood control measures</li>
                  <li>Groundwater recharge initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-lg italic text-center mb-16">
            This page is under development. More detailed information about Ghana's adaptation campaigns will be added soon.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Adaptation;
