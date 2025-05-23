
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Adaptation = () => {
  return (
    <Layout>
      <HeroSection
        title="Adaptation Campaigns"
        subtitle="Building climate resilience across Ghana's communities"
      />
      
      <section className="page-container py-12">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Climate Adaptation in Ghana" 
            subtitle="Comprehensive strategies to build resilience across sectors"
          />
          
          <div className="prose max-w-none mb-8">
            <p className="text-lg">
              Ghana faces significant climate challenges including rising temperatures, 
              unpredictable rainfall patterns, and increased frequency of extreme weather events. 
              As a response, the government and various stakeholders have developed comprehensive 
              adaptation strategies to reduce vulnerability and build resilience across different sectors.
            </p>
            
            <p>
              The National Adaptation Plan (NAP) framework guides Ghana's adaptation efforts, focusing 
              on priority sectors such as agriculture, water resources, coastal zone management, 
              health, and infrastructure. These initiatives are supported by both domestic resources 
              and international climate finance.
            </p>
          </div>
          
          <Tabs defaultValue="agriculture" className="mb-10">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
              <TabsTrigger value="water">Water Resources</TabsTrigger>
              <TabsTrigger value="coastal">Coastal Protection</TabsTrigger>
              <TabsTrigger value="health">Health Systems</TabsTrigger>
            </TabsList>
            
            <TabsContent value="agriculture" className="space-y-6">
              <h2 className="text-2xl font-bold text-ghana-green">Agricultural Adaptation</h2>
              
              <p>
                Agriculture employs over 40% of Ghana's workforce and contributes significantly to GDP. 
                Climate change threatens productivity through unpredictable rainfall, increased temperatures, 
                and extreme weather events.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Climate-Smart Agriculture Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Introduction of drought-resistant crop varieties including improved maize, cassava, and millet</li>
                      <li>Conservation agriculture techniques including minimum tillage and cover cropping</li>
                      <li>Agroforestry systems integrating trees with crops for shade and soil improvement</li>
                      <li>Farmer field schools providing practical training in adaptation techniques</li>
                      <li>Indigenous knowledge documentation and integration with scientific approaches</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Water Management in Agriculture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Small-scale irrigation systems including solar-powered pumps</li>
                      <li>Water harvesting structures to capture rainfall for dry periods</li>
                      <li>Efficient water use technologies like drip irrigation</li>
                      <li>Watershed management to reduce erosion and improve water retention</li>
                      <li>Weather information services helping farmers plan planting and harvesting</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-bold mt-6">Spotlight: Planting for Food and Jobs</h3>
              <p>
                The government's flagship "Planting for Food and Jobs" program incorporates climate-smart 
                agricultural practices while improving food security and creating employment. The initiative 
                provides farmers with improved seeds, subsidized fertilizers, and extension services to 
                adopt climate-resilient farming methods.
              </p>
            </TabsContent>
            
            <TabsContent value="water" className="space-y-6">
              <h2 className="text-2xl font-bold text-ghana-green">Water Resource Management</h2>
              
              <p>
                Ghana's water resources are increasingly under pressure from climate change, with altered 
                rainfall patterns affecting river systems, groundwater recharge, and water availability for 
                domestic, agricultural and industrial use.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Water Supply Resilience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Multiple water source strategies reducing dependency on single sources</li>
                      <li>Rainwater harvesting systems at household and community levels</li>
                      <li>Protection of water catchment areas through reforestation efforts</li>
                      <li>Community-based water management committees in rural areas</li>
                      <li>Early warning systems for droughts and water shortages</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Flood Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Urban drainage improvement projects in Accra and other major cities</li>
                      <li>Wetland restoration to serve as natural water buffers</li>
                      <li>Flood early warning systems in vulnerable communities</li>
                      <li>Relocation programs for settlements in high-risk flood zones</li>
                      <li>Climate-resilient infrastructure design standards</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-bold mt-6">Spotlight: Integrated Water Resource Management</h3>
              <p>
                Ghana's Water Resources Commission is implementing Integrated Water Resource Management (IWRM) 
                in major river basins. This approach ensures sustainable water use while building resilience 
                to climate impacts through coordinated development and management of water, land, and related resources.
              </p>
            </TabsContent>
            
            <TabsContent value="coastal" className="space-y-6">
              <h2 className="text-2xl font-bold text-ghana-green">Coastal Zone Protection</h2>
              
              <p>
                Ghana's 550km coastline is highly vulnerable to climate change impacts including sea level rise, 
                coastal erosion, and saltwater intrusion. These challenges threaten coastal communities, infrastructure, 
                and ecosystems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Infrastructure Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Sea defense walls in high-risk areas like Keta and Ada</li>
                      <li>Groyne systems to combat beach erosion</li>
                      <li>Elevated infrastructure design in flood-prone coastal communities</li>
                      <li>Climate-proofing of ports and harbor facilities</li>
                      <li>Improved drainage systems in coastal urban areas</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Ecosystem-based Adaptation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Mangrove restoration along lagoons and estuaries</li>
                      <li>Beach nourishment to combat erosion</li>
                      <li>Coastal forest conservation and restoration</li>
                      <li>Coral reef and marine conservation areas</li>
                      <li>Integrated coastal zone management approaches</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-bold mt-6">Spotlight: West Africa Coastal Areas Management Program</h3>
              <p>
                Ghana is a key participant in the West Africa Coastal Areas Management Program (WACA), 
                which addresses coastal erosion, flooding, and pollution. The program combines physical investments, 
                social resilience building, and institutional strengthening to protect coastal assets and enhance livelihoods.
              </p>
            </TabsContent>
            
            <TabsContent value="health" className="space-y-6">
              <h2 className="text-2xl font-bold text-ghana-green">Health Systems Adaptation</h2>
              
              <p>
                Climate change affects human health through direct impacts (heat stress, injuries from extreme events) 
                and indirect impacts (changing patterns of vector-borne diseases, food and water insecurity). 
                Ghana is strengthening its health systems to address these challenges.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Disease Surveillance and Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Enhanced surveillance systems for climate-sensitive diseases</li>
                      <li>Early warning systems for disease outbreaks linked to climate factors</li>
                      <li>Strengthened vector control programs for malaria and other diseases</li>
                      <li>Improved water quality monitoring and treatment</li>
                      <li>Community-based health monitoring networks</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Health Infrastructure Resilience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Climate-proofing of health facilities against floods and storms</li>
                      <li>Backup power systems for health centers in vulnerable areas</li>
                      <li>Mobile health units for reaching isolated communities during emergencies</li>
                      <li>Cold chain improvements to maintain vaccine efficacy in higher temperatures</li>
                      <li>Training of healthcare workers on climate-related health impacts</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-xl font-bold mt-6">Spotlight: Climate Change and Health Adaptation Plan</h3>
              <p>
                Ghana's Ministry of Health has developed a Climate Change and Health Adaptation Plan focused on 
                strengthening health systems, building capacity among health professionals, and enhancing 
                community resilience to climate-related health challenges. The plan emphasizes surveillance, 
                early warning systems, and public education.
              </p>
            </TabsContent>
          </Tabs>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-10">
            <h2 className="text-2xl font-bold mb-4">National Adaptation Planning</h2>
            <p className="mb-4">
              Ghana's adaptation efforts are guided by the National Adaptation Plan (NAP) framework, which takes a 
              comprehensive approach to building resilience across sectors. The NAP process involves:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Vulnerability assessments to identify climate risks in different regions</li>
              <li>Stakeholder consultations including local communities and traditional authorities</li>
              <li>Prioritization of adaptation actions based on urgency and impact</li>
              <li>Mainstreaming of climate adaptation into sectoral policies and development plans</li>
              <li>Monitoring and evaluation systems to track progress and effectiveness</li>
            </ul>
            <p>
              The plan is supported by both domestic resources and international climate finance mechanisms 
              including the Green Climate Fund (GCF), Adaptation Fund, and bilateral partnerships.
            </p>
          </div>
          
          <SectionTitle 
            title="Community-Based Adaptation" 
            subtitle="Building resilience from the ground up"
          />
          
          <div className="prose max-w-none mb-8">
            <p>
              Many of Ghana's most successful adaptation initiatives are implemented at the community level, 
              drawing on local knowledge and ensuring that solutions are contextually appropriate. These 
              community-based adaptation (CBA) approaches emphasize:
            </p>
            
            <ul>
              <li>Participatory vulnerability assessments to identify local climate risks</li>
              <li>Integration of traditional ecological knowledge with scientific approaches</li>
              <li>Development of locally appropriate solutions with community ownership</li>
              <li>Capacity building to sustain adaptation activities over time</li>
              <li>Livelihood diversification to reduce climate vulnerability</li>
            </ul>
            
            <p>
              Examples of successful CBA initiatives include community-managed mangrove restoration in coastal areas, 
              village savings and loan associations helping farmers invest in adaptation technologies, and 
              community-based early warning systems for floods.
            </p>
            
            <h3 className="text-xl font-bold mt-6">Scaling Up Success</h3>
            <p>
              Ghana is working to scale up successful adaptation initiatives through knowledge sharing networks, 
              policy mainstreaming, and increased finance. The Adaptation Fund and other climate finance 
              mechanisms are supporting the replication of proven approaches across vulnerable regions.
            </p>
          </div>
          
          <div className="bg-ghana-green/10 p-6 rounded-lg border border-ghana-green/20 my-8">
            <h3 className="text-xl font-bold text-ghana-green mb-3">Get Involved</h3>
            <p className="mb-4">
              Climate adaptation requires collective action. You can contribute to Ghana's adaptation efforts by:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Supporting community-based adaptation initiatives through volunteering or donations</li>
              <li>Advocating for climate resilience in infrastructure and urban planning</li>
              <li>Participating in tree-planting and ecosystem restoration activities</li>
              <li>Adopting water conservation practices in your home and workplace</li>
              <li>Sharing knowledge about climate adaptation with your community</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Adaptation;
