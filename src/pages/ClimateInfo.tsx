
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ClimateInfo = () => {
  return (
    <Layout>
      <HeroSection
        title="Climate Information"
        subtitle="Understanding Ghana's climate challenges and opportunities"
      />
      
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Climate Change in Ghana" 
            subtitle="Key facts and projections"
          />
          
          <p className="text-lg mb-8">
            Ghana is experiencing significant climate changes including rising temperatures, shifting rainfall patterns, and increasing frequency of extreme weather events. These changes affect agriculture, water resources, coastal areas, and human health across different ecological zones.
          </p>
          
          <Tabs defaultValue="overview" className="mb-16">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="impacts">Key Impacts</TabsTrigger>
              <TabsTrigger value="projections">Projections</TabsTrigger>
              <TabsTrigger value="data">Climate Data</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="text-lg space-y-4">
              <p>
                Ghana's climate is tropical, characterized by a bi-modal rainy season in the south and a single rainy season in the north. The country spans several ecological zones, from humid coastal areas to dry savannahs, each experiencing distinct climate impacts.
              </p>
              <p>
                Over the past several decades, Ghana has observed temperature increases of about 1°C since 1960, with the rate of warming faster in the northern regions. Rainfall patterns have become more erratic, with delayed onset of rains, shorter rainy seasons, and more intense rainfall events causing floods.
              </p>
              <p>
                These changes pose significant challenges for a country where approximately 54% of the workforce is employed in agriculture, mostly rain-fed, and where hydropower contributes substantially to the energy mix.
              </p>
            </TabsContent>
            
            <TabsContent value="impacts">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Agricultural Impacts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Reduced crop yields due to unpredictable rainfall</li>
                      <li>Shortened growing seasons</li>
                      <li>Increased pest and disease outbreaks</li>
                      <li>Loss of suitable land for key crops like cocoa</li>
                      <li>Livestock stress from heat and reduced pasture</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Water Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Reduced river flows and lake levels</li>
                      <li>Groundwater recharge challenges</li>
                      <li>Water quality issues during droughts</li>
                      <li>Flood damage to water infrastructure</li>
                      <li>Hydropower generation challenges</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Coastal Impacts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Sea level rise (estimated 13-20cm by 2050)</li>
                      <li>Coastal erosion affecting communities</li>
                      <li>Saltwater intrusion in coastal aquifers</li>
                      <li>Flooding of low-lying coastal areas</li>
                      <li>Impacts on coastal ecosystems and fisheries</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Health Impacts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Expanded range of malaria and other vector-borne diseases</li>
                      <li>Heat-related illnesses</li>
                      <li>Malnutrition risks from reduced food security</li>
                      <li>Water-borne diseases during floods</li>
                      <li>Mental health impacts from climate disasters</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="projections" className="text-lg space-y-4">
              <p className="font-bold">By 2050, Ghana is projected to experience:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Temperature increase of 1.0-3.0°C (with higher increases in the northern regions)</li>
                <li>More variable rainfall with potential reduction of 20-30% in some regions</li>
                <li>Sea level rise of 13-20cm, threatening about 50% of Ghana's coastal land</li>
                <li>More frequent and intense extreme weather events including floods and droughts</li>
                <li>Significant shifts in agro-ecological zones affecting farming systems</li>
                <li>Increased water stress, particularly in the northern regions</li>
              </ul>
              <p className="mt-6">
                These projections underscore the urgent need for adaptation strategies and climate-resilient development across all sectors of Ghana's economy.
              </p>
            </TabsContent>
            
            <TabsContent value="data">
              <div className="space-y-6">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Climate Data Resources</h3>
                  <p className="mb-4">Access reliable climate data specific to Ghana from these sources:</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><a href="#" className="text-ghana-green hover:underline">Ghana Meteorological Agency (GMet)</a> - Official weather and climate data</li>
                    <li><a href="#" className="text-ghana-green hover:underline">World Bank Climate Change Knowledge Portal - Ghana</a> - Historical data and projections</li>
                    <li><a href="#" className="text-ghana-green hover:underline">SERVIR West Africa</a> - Satellite imagery and geospatial data</li>
                    <li><a href="#" className="text-ghana-green hover:underline">Ghana Open Data Initiative</a> - Government climate and environmental datasets</li>
                  </ul>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Interpreting Climate Data</h3>
                  <p>
                    Understanding climate data requires context. Our team can help you interpret climate information for your specific needs - whether for farming, community planning, research, or business decisions. Contact us for assistance.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <SectionTitle 
            title="Ghana's National Adaptation Planning" 
            subtitle="Framework and priorities"
            align="left"
          />
          
          <p className="text-lg mb-8">
            Ghana's National Adaptation Plan (NAP) framework identifies priority sectors for climate adaptation and outlines the country's approach to building resilience. The NAP process is guided by the Environmental Protection Agency (EPA) and aims to integrate climate adaptation into development planning and budgeting.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Priority Sectors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Agriculture and food security</li>
                  <li>Water resources management</li>
                  <li>Coastal zone management</li>
                  <li>Health</li>
                  <li>Energy</li>
                  <li>Infrastructure</li>
                  <li>Disaster risk reduction</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Key Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Country-driven approach</li>
                  <li>Gender-responsiveness</li>
                  <li>Participatory process</li>
                  <li>Evidence-based planning</li>
                  <li>Integration with SDGs</li>
                  <li>Building on existing efforts</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Multi-sectoral coordination</li>
                  <li>Decentralized planning</li>
                  <li>Climate finance mobilization</li>
                  <li>Monitoring and evaluation</li>
                  <li>Capacity building</li>
                  <li>Knowledge management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClimateInfo;
