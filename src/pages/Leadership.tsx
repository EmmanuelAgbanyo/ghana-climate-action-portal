
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Leadership = () => {
  return (
    <Layout>
      <HeroSection
        title="Resilient Leadership"
        subtitle="Ghana's climate champions driving positive change"
      />
      
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Climate Leadership" 
            subtitle="The individuals and organizations guiding Ghana's climate action"
          />
          
          <p className="text-lg mb-8">
            Effective climate action requires strong leadership across government, civil society, business, and communities. In Ghana, various leaders are emerging to champion climate resilience and sustainable development.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Policy Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>National climate policy development</li>
                  <li>International climate negotiations</li>
                  <li>Implementation of NDCs</li>
                  <li>Climate finance mobilization</li>
                  <li>Cross-sectoral coordination</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Community Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Local adaptation planning</li>
                  <li>Indigenous knowledge integration</li>
                  <li>Youth climate activism</li>
                  <li>Women-led climate initiatives</li>
                  <li>Faith-based environmental stewardship</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-lg italic text-center mb-16">
            This page is under development. More detailed information about Ghana's climate leadership will be added soon.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
