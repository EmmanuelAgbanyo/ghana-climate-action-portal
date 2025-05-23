
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";

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
            Effective climate action in Ghana requires strong leadership across multiple sectors. The country's commitment to climate resilience has led to the emergence of influential leaders and organizations working together to address climate challenges and build a sustainable future.
          </p>

          <Tabs defaultValue="government" className="mb-16">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="government">Government</TabsTrigger>
              <TabsTrigger value="organizations">Organizations</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="youth">Youth Leaders</TabsTrigger>
            </TabsList>
            
            <TabsContent value="government" className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Government Leadership</h3>
              <p className="mb-6">Ghana's government has demonstrated climate leadership through policy development, international cooperation, and national climate initiatives.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Ministry of Environment, Science, Technology & Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">The lead agency responsible for coordinating climate action across sectors and implementing the National Climate Change Policy.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Development of the National Climate Change Policy</li>
                      <li>Implementation of Ghana's Nationally Determined Contributions (NDCs)</li>
                      <li>Coordination of climate finance mechanisms</li>
                      <li>Lead negotiator at international climate forums</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Environmental Protection Agency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Ghana's EPA plays a crucial role in climate monitoring, reporting, and enforcement of environmental regulations.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Climate data collection and monitoring</li>
                      <li>Development of greenhouse gas inventories</li>
                      <li>Environmental impact assessments</li>
                      <li>Climate change education and awareness</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-lg mb-2">Key Policy Achievements</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>National Climate Change Policy (2013)</li>
                  <li>National Climate Change Master Plan (2015-2020)</li>
                  <li>Ghana's Updated Nationally Determined Contribution (2021)</li>
                  <li>National Adaptation Plan Framework</li>
                  <li>REDD+ Strategy for forest protection and carbon sequestration</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="organizations" className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Leading Organizations</h3>
              <p className="mb-6">Several organizations in Ghana are pioneering climate action through research, advocacy, and implementation of innovative solutions.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Ghana Climate Innovation Centre</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">A business incubator that supports entrepreneurs and start-ups developing innovative solutions to climate challenges.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Business mentorship</li>
                      <li>Technical support</li>
                      <li>Funding for climate-focused startups</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>ABANTU for Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">An NGO advocating for gender-responsive climate policies and women's leadership in climate action.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Gender and climate research</li>
                      <li>Women's climate leadership programs</li>
                      <li>Policy advocacy</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Conservation Alliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Works on biodiversity conservation and nature-based solutions to climate change.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Forest conservation initiatives</li>
                      <li>Sustainable agricultural practices</li>
                      <li>Community conservation education</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="community" className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Community Leadership</h3>
              <p className="mb-6">Local communities across Ghana are taking climate action into their own hands, often combining traditional knowledge with modern approaches.</p>
              
              <div className="grid grid-cols-1 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Traditional Authorities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Chiefs and traditional leaders play a crucial role in climate governance at the local level, especially in natural resource management.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold mb-2">Key Contributions:</h5>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Enforcement of traditional conservation practices</li>
                          <li>Community mobilization for climate action</li>
                          <li>Integration of indigenous knowledge in adaptation</li>
                          <li>Land governance and sustainable resource use</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Success Stories:</h5>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Restoration of sacred groves in the Volta Region</li>
                          <li>Traditional fishing regulations in coastal communities</li>
                          <li>Community-managed forest zones in the Western Region</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Women-Led Climate Initiatives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Women are leading numerous community-based initiatives addressing climate change impacts and building resilience.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold mb-2">Key Initiatives:</h5>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Sustainable agriculture cooperatives</li>
                          <li>Clean cookstove adoption programs</li>
                          <li>Water harvesting and management projects</li>
                          <li>Alternative livelihood development</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Impact Areas:</h5>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Northern Region drought resilience</li>
                          <li>Coastal adaptation in the Central Region</li>
                          <li>Forest conservation in Eastern Region</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="youth" className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Youth Climate Leaders</h3>
              <p className="mb-6">Ghana's youth are increasingly at the forefront of climate activism, innovation, and advocacy, bringing fresh energy to the climate movement.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-ghana-green">
                      <div className="bg-ghana-green text-white font-bold flex items-center justify-center h-full">
                        YC
                      </div>
                    </Avatar>
                    <div>
                      <CardTitle>Youth Climate Councils</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Regional youth councils focusing on climate policy advocacy and implementation.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Policy recommendations to government</li>
                      <li>Climate education in schools</li>
                      <li>Community awareness campaigns</li>
                      <li>Representation at international climate conferences</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-ghana-green">
                      <div className="bg-ghana-green text-white font-bold flex items-center justify-center h-full">
                        GE
                      </div>
                    </Avatar>
                    <div>
                      <CardTitle>Green Entrepreneurs</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Young business leaders creating climate-friendly enterprises and solutions.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Renewable energy startups</li>
                      <li>Waste recycling ventures</li>
                      <li>Sustainable agriculture businesses</li>
                      <li>Climate tech innovations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-ghana-green bg-opacity-10 p-6 rounded-lg border border-ghana-green border-opacity-20">
                <h4 className="font-semibold text-lg mb-3 text-ghana-green">Get Involved</h4>
                <p className="mb-4">Ghana's youth climate movement welcomes participation from young people across the country.</p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">Climate Hackathons</div>
                  <div className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">School Climate Clubs</div>
                  <div className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">Climate Storytelling</div>
                  <div className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">Youth Advocacy Groups</div>
                  <div className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">Campus Sustainability</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="border-t border-gray-200 pt-8 mb-16">
            <h3 className="text-2xl font-bold mb-4">International Recognition</h3>
            <p className="mb-6">
              Ghana's climate leaders have received international recognition for their contributions to global climate action.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Global Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Member of the Climate Vulnerable Forum</li>
                    <li>Partner in the NDC Partnership</li>
                    <li>Participant in the Global Climate Action Agenda</li>
                    <li>Africa Adaptation Initiative contributor</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Leadership Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>UN Global Climate Action Awards recipients</li>
                    <li>Africa Climate Leadership Program participants</li>
                    <li>Commonwealth Climate Finance Access Hub support</li>
                    <li>Climate and Clean Air Coalition recognition</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;
