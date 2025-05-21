
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  return (
    <Layout>
      <HeroSection
        title="About Us"
        subtitle="The Climate Information Centre - Ghana"
      />
      
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Our Mission" 
            subtitle="Empowering Ghanaians through climate knowledge and action"
          />
          
          <p className="text-lg mb-8">
            The Climate Information Centre - Ghana serves as a hub for knowledge sharing, capacity building, and coordination of climate action across Ghana. We aim to educate citizens about climate challenges, promote adaptation campaigns, highlight actionable steps, and emphasize the importance of resilient leadership in addressing climate change.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-ghana-green mb-4">What We Do</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>Provide accessible climate information tailored to Ghana's context</li>
                <li>Support community-based adaptation initiatives</li>
                <li>Connect stakeholders across government, civil society, and private sectors</li>
                <li>Promote climate education and awareness campaigns</li>
                <li>Document and share best practices in climate resilience</li>
                <li>Advocate for increased climate action and policy implementation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-ghana-green mb-4">Who We Serve</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>Local communities across Ghana's diverse regions</li>
                <li>Students and educational institutions</li>
                <li>Policymakers at national and local levels</li>
                <li>Farmers and agricultural stakeholders</li>
                <li>Coastal communities facing climate impacts</li>
                <li>Businesses seeking sustainable practices</li>
                <li>International partners and organizations</li>
              </ul>
            </div>
          </div>
          
          <SectionTitle title="Our History" align="left" />
          
          <p className="text-lg mb-8">
            The Climate Information Centre - Ghana was established in 2025 by the Youth Path Organisation (YPO) in response to the growing need for consolidated climate information and action in Ghana. Recognizing the fragmented nature of climate knowledge and the urgency of climate action, YPO founded the Centre to bridge information gaps and catalyze climate resilience initiatives.
          </p>
          
          <p className="text-lg mb-16">
            Since our inception, we have worked closely with government agencies, research institutions, civil society organizations, and international partners to expand our knowledge base and reach. Our work aligns with Ghana's National Adaptation Plan Framework and supports the implementation of Ghana's Nationally Determined Contributions (NDCs) under the Paris Agreement.
          </p>
          
          <div className="bg-gray-100 p-8 rounded-xl">
            <SectionTitle title="Our Team" align="left" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Emmanuel Agbanyo",
                  role: "Founder & Director",
                  bio: "Climate policy expert with over 10 years of experience in environmental advocacy and community engagement."
                },
                {
                  name: "Abena Osei",
                  role: "Climate Information Specialist",
                  bio: "Meteorologist focused on translating climate data into actionable information for communities."
                },
                {
                  name: "Kwame Mensah",
                  role: "Adaptation Programs Manager",
                  bio: "Agricultural scientist specializing in climate-resilient farming techniques and knowledge transfer."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-24 h-24 rounded-full bg-ghana-green mx-auto mb-4"></div>
                  <h4 className="text-xl font-bold text-center mb-1">{member.name}</h4>
                  <p className="text-ghana-green text-center mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
