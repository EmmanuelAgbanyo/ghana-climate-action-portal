
import { BlogPost, BlogCategory } from "../types/blog";

export const blogCategories: BlogCategory[] = [
  { name: "Climate Policies", slug: "climate-policies" },
  { name: "Adaptation Success Stories", slug: "adaptation-success" },
  { name: "Youth Initiatives", slug: "youth-initiatives" },
  { name: "Global Climate News", slug: "global-news" },
  { name: "Research Updates", slug: "research" },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Ghana's Progress on NDC Implementation",
    slug: "ghanas-progress-on-ndc-implementation",
    excerpt: "Ghana has made significant strides in implementing its Nationally Determined Contributions (NDCs) under the Paris Agreement. This article explores the achievements, challenges, and way forward.",
    content: `
      <h2>Ghana's Climate Commitments</h2>
      <p>Ghana submitted its updated Nationally Determined Contributions (NDCs) to the UNFCCC in 2021, outlining 47 adaptation and mitigation measures across 19 policy areas. The country pledged to reduce its greenhouse gas emissions by 64 million tonnes by 2030, representing a 15% reduction compared to business-as-usual scenario.</p>
      
      <h2>Key Achievements</h2>
      <p>In the past two years, Ghana has made notable progress in several areas:</p>
      <ul>
        <li>Expanding renewable energy capacity by over 100 MW through solar and mini-hydro projects</li>
        <li>Implementing improved cookstoves program reaching over 200,000 households</li>
        <li>Restoring 10,000 hectares of degraded forest through the Green Ghana Initiative</li>
        <li>Initiating climate-smart agriculture practices in 6 regions</li>
        <li>Developing climate-resilient infrastructure guidelines for roads and buildings</li>
      </ul>
      
      <h2>Challenges and Barriers</h2>
      <p>Despite these achievements, several challenges remain:</p>
      <ul>
        <li>Limited access to climate finance for implementing ambitious projects</li>
        <li>Capacity constraints in technical expertise and institutional frameworks</li>
        <li>Coordination challenges across different sectors and levels of government</li>
        <li>Data gaps for effective monitoring and reporting</li>
        <li>Economic pressures exacerbated by the global economic situation</li>
      </ul>
      
      <h2>Way Forward</h2>
      <p>To accelerate NDC implementation, Ghana is focusing on:</p>
      <ol>
        <li>Developing a comprehensive NDC investment plan to attract public and private finance</li>
        <li>Strengthening the monitoring, reporting and verification system</li>
        <li>Enhancing capacity building at national and local levels</li>
        <li>Promoting greater private sector engagement</li>
        <li>Strengthening cross-sectoral collaboration and coordination</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Ghana's progress on NDC implementation demonstrates the country's commitment to climate action, but achieving the 2030 targets will require scaled-up support, enhanced coordination, and innovative financing mechanisms. With continued determination and international support, Ghana can achieve its climate goals while promoting sustainable development.</p>
    `,
    coverImage: "/placeholder.svg",
    category: "Climate Policies",
    author: "Kwame Mensah",
    authorImage: "/placeholder.svg",
    authorRole: "Climate Policy Analyst",
    publishedAt: "2025-05-15",
    tags: ["NDCs", "Paris Agreement", "Climate Policy", "Ghana"],
  },
  {
    id: 2,
    title: "Climate-Smart Agriculture Success in Northern Ghana",
    slug: "climate-smart-agriculture-success-northern-ghana",
    excerpt: "Farmers in Northern Ghana are embracing climate-smart agriculture techniques, resulting in improved yields despite changing rainfall patterns.",
    content: `
      <h2>Introduction to Climate-Smart Agriculture</h2>
      <p>Climate-smart agriculture (CSA) encompasses farming techniques that sustainably increase productivity while adapting to climate change and reducing greenhouse gas emissions. In Northern Ghana, where farmers face increasing temperature extremes and unpredictable rainfall, CSA practices have become essential for maintaining food security.</p>
      
      <h2>The Tamale Initiative</h2>
      <p>In 2023, a coalition of agricultural organizations, government agencies, and research institutions launched a comprehensive CSA initiative in the Tamale Metropolitan Area. The project supports over 3,000 smallholder farmers in implementing various climate-smart practices.</p>
      
      <h2>Key Practices and Results</h2>
      <p>The initiative has promoted several key practices:</p>
      <ul>
        <li><strong>Drought-resistant crop varieties:</strong> Introduction of improved sorghum, millet, and maize varieties that can withstand longer dry spells</li>
        <li><strong>Conservation agriculture:</strong> Minimal tillage, permanent soil cover, and crop rotation to improve soil health</li>
        <li><strong>Water harvesting techniques:</strong> Construction of small dams and use of tied ridges to capture rainfall</li>
        <li><strong>Agroforestry:</strong> Integration of trees with crops to provide shade, reduce erosion, and diversify income</li>
        <li><strong>Integrated soil fertility management:</strong> Combining organic and inorganic fertilizers for optimal results</li>
      </ul>
      
      <p>Results from the first two growing seasons show promising outcomes:</p>
      <ul>
        <li>25-40% increase in yields for farmers fully implementing the practices</li>
        <li>Greater resilience to dry spells during the growing season</li>
        <li>Improved soil health and reduced erosion</li>
        <li>Increased income from diversified production</li>
      </ul>
      
      <h2>Farmer Testimonials</h2>
      <blockquote>
        "Before I started using these new methods, I would lose most of my crops whenever the rains were poor. Now, even with less rainfall, my maize and sorghum grow well, and I also have fruits from my farm trees for extra income." - Abiba Mumuni, farmer from Sagnarigu
      </blockquote>
      
      <h2>Scaling Up Success</h2>
      <p>Based on these initial successes, plans are underway to extend the initiative to other districts in Northern Ghana, with the goal of reaching 20,000 farmers by 2027. Key elements for scaling include:</p>
      <ul>
        <li>Farmer-to-farmer knowledge transfer through demonstration farms</li>
        <li>Digital extension services using mobile phones</li>
        <li>Partnerships with local financial institutions for farm investments</li>
        <li>Strengthening market linkages for climate-smart produce</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The success of climate-smart agriculture in Northern Ghana demonstrates how locally adapted practices can help farmers not just cope with climate change, but thrive despite changing conditions. With continued support and knowledge sharing, these approaches can contribute significantly to Ghana's climate adaptation goals while enhancing food security and rural livelihoods.</p>
    `,
    coverImage: "/placeholder.svg",
    category: "Adaptation Success Stories",
    author: "Abena Osei",
    authorImage: "/placeholder.svg",
    authorRole: "Agricultural Specialist",
    publishedAt: "2025-05-10",
    tags: ["Agriculture", "Adaptation", "Northern Ghana", "Food Security"],
  },
  {
    id: 3,
    title: "Youth Climate Advocates Launch Urban Tree Planting Campaign",
    slug: "youth-climate-advocates-urban-tree-planting",
    excerpt: "A network of youth-led organizations has launched an ambitious initiative to plant 10,000 trees across Accra's urban neighborhoods.",
    content: `
      <h2>Youth Leadership in Climate Action</h2>
      <p>Ghana's youth are increasingly taking the lead in addressing climate change challenges. The newly formed "Green Accra Initiative," a coalition of youth-led environmental organizations, has launched an ambitious urban forestry campaign aimed at transforming the capital city's landscape.</p>
      
      <h2>The Urban Tree Planting Campaign</h2>
      <p>The campaign aims to plant 10,000 trees across Accra by the end of 2025, focusing on schools, public spaces, and residential areas. The initiative addresses multiple challenges:</p>
      <ul>
        <li>Urban heat island effect, which has intensified in Accra due to rapid urbanization</li>
        <li>Air pollution from vehicles and industries</li>
        <li>Loss of urban biodiversity</li>
        <li>Limited green spaces for recreation and wellbeing</li>
      </ul>
      
      <h2>Strategic Approach</h2>
      <p>The youth advocates have developed a comprehensive strategy:</p>
      <ol>
        <li><strong>Species selection:</strong> Focusing on native tree species that are drought-resistant and provide multiple benefits (shade, fruit, habitat)</li>
        <li><strong>Community involvement:</strong> Engaging local residents, especially children and the elderly, in planting and tree care</li>
        <li><strong>Digital mapping:</strong> Using GIS technology to map planted trees and monitor their health</li>
        <li><strong>Educational component:</strong> Conducting workshops at schools about the importance of urban forests</li>
        <li><strong>Maintenance plan:</strong> Training community "tree guardians" to ensure long-term survival of planted trees</li>
      </ol>
      
      <h2>Progress and Partnerships</h2>
      <p>Since launching in March 2025, the initiative has:</p>
      <ul>
        <li>Planted over 2,000 trees across 15 neighborhoods</li>
        <li>Engaged more than 500 volunteers</li>
        <li>Partnered with 25 schools for educational programs</li>
        <li>Secured support from the Accra Metropolitan Assembly</li>
        <li>Attracted funding from local businesses and international organizations</li>
      </ul>
      
      <blockquote>
        "We're not just planting trees; we're growing hope and resilience in our communities. Each tree represents our commitment to Accra's future in a changing climate." - Kofi Adu, 22, Green Accra Initiative Coordinator
      </blockquote>
      
      <h2>Impacts and Benefits</h2>
      <p>Beyond the environmental benefits, the campaign has created several positive outcomes:</p>
      <ul>
        <li>Building climate awareness among urban residents</li>
        <li>Creating volunteer opportunities for youth</li>
        <li>Developing leadership skills among young climate advocates</li>
        <li>Strengthening community bonds through collective action</li>
        <li>Creating a model that can be replicated in other Ghanaian cities</li>
      </ul>
      
      <h2>Get Involved</h2>
      <p>The Green Accra Initiative welcomes volunteers, donations, and partnerships. Interested individuals and organizations can contact the team through their website or social media channels to learn how to contribute to this transformative youth-led climate action.</p>
    `,
    coverImage: "/placeholder.svg",
    category: "Youth Initiatives",
    author: "Emmanuel Agbanyo",
    authorImage: "/placeholder.svg",
    authorRole: "Director",
    publishedAt: "2025-05-05",
    tags: ["Youth", "Urban Forestry", "Accra", "Community Action"],
  },
  {
    id: 4,
    title: "Global Climate Finance Trends and Opportunities for Ghana",
    slug: "global-climate-finance-trends-opportunities-ghana",
    excerpt: "New developments in global climate finance present significant opportunities for Ghana's adaptation and mitigation projects.",
    content: `
      <h2>The Evolving Climate Finance Landscape</h2>
      <p>Climate finance has been evolving rapidly since the Paris Agreement, with new funding sources, innovative financial instruments, and shifting priorities. For countries like Ghana, staying informed about these trends is essential for accessing resources needed to implement climate actions.</p>
      
      <h2>Key Global Trends</h2>
      <p>Several important trends are shaping the global climate finance landscape:</p>
      <ul>
        <li><strong>Private sector engagement:</strong> Increasing focus on mobilizing private investment for climate projects</li>
        <li><strong>Adaptation finance:</strong> Growing recognition of the need to balance adaptation and mitigation funding</li>
        <li><strong>Results-based finance:</strong> Shift toward payment for verified climate outcomes</li>
        <li><strong>Local access:</strong> Efforts to channel funds directly to local institutions and communities</li>
        <li><strong>Innovative instruments:</strong> Emergence of green bonds, resilience bonds, and debt-for-climate swaps</li>
      </ul>
      
      <h2>Opportunities for Ghana</h2>
      <p>These global trends create several opportunities for Ghana:</p>
      
      <h3>Green Bonds</h3>
      <p>Ghana successfully issued its first sovereign green bond in 2024, raising $200 million for renewable energy and sustainable forestry projects. Building on this success, there is potential to develop a more robust green bond market, including corporate and municipal green bonds.</p>
      
      <h3>Climate Funds Access</h3>
      <p>Ghana has been accredited to directly access the Green Climate Fund through the Environmental Protection Agency. This direct access can be leveraged to secure funding for transformative adaptation projects, particularly in vulnerable coastal and northern regions.</p>
      
      <h3>Private Sector Partnerships</h3>
      <p>The growing interest from international investors in climate-smart agriculture, renewable energy, and green infrastructure presents partnership opportunities for Ghanaian businesses and public entities.</p>
      
      <h3>Carbon Markets</h3>
      <p>With Article 6 of the Paris Agreement becoming operational, Ghana can benefit from carbon market mechanisms by developing projects that reduce emissions while promoting sustainable development, particularly in forestry and clean energy.</p>
      
      <h2>Challenges to Address</h2>
      <p>Despite these opportunities, Ghana faces several challenges in accessing climate finance:</p>
      <ul>
        <li>Limited technical capacity for developing bankable climate projects</li>
        <li>Fragmented institutional arrangements for climate finance coordination</li>
        <li>Data gaps for tracking climate finance flows</li>
        <li>Complex requirements of international funding sources</li>
      </ul>
      
      <h2>Strategic Recommendations</h2>
      <ol>
        <li><strong>Develop a national climate finance strategy</strong> that aligns with NDC and NAP priorities</li>
        <li><strong>Establish a climate finance unit</strong> to coordinate efforts across government and with external partners</li>
        <li><strong>Build capacity for project development</strong> at national and local levels</li>
        <li><strong>Create an enabling environment</strong> for private climate investments through appropriate policies and incentives</li>
        <li><strong>Enhance transparency and reporting</strong> on climate finance to build trust with funders</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>The evolving global climate finance landscape presents both challenges and opportunities for Ghana. By strategically positioning itself and building necessary capacities, Ghana can increase its access to climate finance and advance its climate and development goals simultaneously.</p>
    `,
    coverImage: "/placeholder.svg",
    category: "Global Climate News",
    author: "Grace Ampofo",
    authorImage: "/placeholder.svg",
    authorRole: "Climate Finance Specialist",
    publishedAt: "2025-04-28",
    tags: ["Climate Finance", "Green Bonds", "Carbon Markets", "International Cooperation"],
  },
  {
    id: 5,
    title: "Ghana's Coastal Adaptation Strategy: Protecting Communities and Ecosystems",
    slug: "ghana-coastal-adaptation-strategy",
    excerpt: "Ghana has launched a comprehensive coastal adaptation strategy to address sea level rise, erosion, and flooding affecting coastal communities.",
    content: `
      <h2>Ghana's Vulnerable Coastline</h2>
      <p>Ghana's 550km coastline is home to about 25% of the country's population and hosts critical infrastructure, economic activities, and unique ecosystems. However, it faces severe threats from climate change, including:</p>
      <ul>
        <li>Sea level rise projected at 13-20cm by 2050</li>
        <li>Coastal erosion rates of 1-2 meters per year in many areas</li>
        <li>Increased flooding during storm surges</li>
        <li>Saltwater intrusion affecting water supplies and agriculture</li>
        <li>Impacts on coastal ecosystems including mangroves and lagoons</li>
      </ul>
      
      <h2>The Integrated Coastal Adaptation Strategy</h2>
      <p>In response to these challenges, Ghana has developed an Integrated Coastal Adaptation Strategy (ICAS) that combines engineering solutions, ecosystem-based approaches, and community resilience measures. The strategy was launched in April 2025 and will be implemented over the next decade.</p>
      
      <h3>Key Components</h3>
      
      <h4>1. Infrastructure and Engineering Solutions</h4>
      <ul>
        <li><strong>Sea defense structures</strong> in high-risk urban areas like Keta and parts of Accra</li>
        <li><strong>Beach nourishment</strong> to combat erosion in tourism areas</li>
        <li><strong>Elevated roads and bridges</strong> in flood-prone coastal zones</li>
        <li><strong>Climate-resilient ports and harbors</strong> upgraded to withstand higher sea levels</li>
      </ul>
      
      <h4>2. Ecosystem-Based Adaptation</h4>
      <ul>
        <li><strong>Mangrove restoration</strong> along 200km of coastline</li>
        <li><strong>Coastal wetland conservation</strong> to provide natural buffers against storms</li>
        <li><strong>Dune rehabilitation</strong> to protect beaches and coastal properties</li>
        <li><strong>Coral reef protection</strong> in Ghana's limited reef areas</li>
      </ul>
      
      <h4>3. Community Resilience</h4>
      <ul>
        <li><strong>Early warning systems</strong> for coastal flooding and storm surges</li>
        <li><strong>Relocation support</strong> for communities in the most vulnerable areas</li>
        <li><strong>Livelihood diversification</strong> for fishing communities affected by changing conditions</li>
        <li><strong>Climate-resilient building codes</strong> for coastal construction</li>
      </ul>
      
      <h2>Implementation Plan</h2>
      <p>The strategy will be implemented in three phases:</p>
      <ol>
        <li><strong>Phase 1 (2025-2027):</strong> Focus on highest-risk areas and immediate interventions</li>
        <li><strong>Phase 2 (2028-2030):</strong> Expand to moderate-risk areas and medium-term measures</li>
        <li><strong>Phase 3 (2031-2035):</strong> Long-term resilience building and maintenance</li>
      </ol>
      
      <p>The strategy takes a participatory approach, with local communities involved in planning and implementation. Special attention is given to indigenous knowledge and practices that have helped coastal communities adapt to changing conditions over generations.</p>
      
      <h2>Financing the Strategy</h2>
      <p>The estimated cost of the full strategy implementation is $450 million over ten years. Funding will come from multiple sources:</p>
      <ul>
        <li>National budget allocations (25%)</li>
        <li>International climate funds including the Green Climate Fund (40%)</li>
        <li>Development partner support (20%)</li>
        <li>Private sector investments (10%)</li>
        <li>Community contributions (5%)</li>
      </ul>
      
      <h2>Success Stories: Ada Estuary Mangrove Restoration</h2>
      <p>A pilot project at the Ada Estuary demonstrates the potential of the strategy. Since 2023, local communities have restored 200 hectares of mangroves, resulting in reduced flooding, improved fishery productivity, and carbon sequestration. The project has created jobs in mangrove nursery management and ecotourism, showing how adaptation measures can deliver multiple benefits.</p>
      
      <blockquote>
        "The mangroves are our natural shield. Since we started restoring them, we've seen fewer floods in our community during storms and more fish in our nets." - Nii Armah, community leader from Ada
      </blockquote>
      
      <h2>Looking Forward</h2>
      <p>Ghana's coastal adaptation strategy represents a comprehensive approach to addressing the complex challenges facing coastal communities in a changing climate. By combining different approaches and emphasizing local participation, the strategy aims to build lasting resilience while protecting vital ecosystems.</p>
    `,
    coverImage: "/placeholder.svg",
    category: "Adaptation Success Stories",
    author: "Elizabeth Mensah",
    authorImage: "/placeholder.svg",
    authorRole: "Coastal Management Specialist",
    publishedAt: "2025-04-15",
    tags: ["Coastal Adaptation", "Sea Level Rise", "Mangroves", "Community Resilience"],
  },
];

// Helper function to get blog post by ID
export const getBlogPostById = (id: number) => {
  return blogPosts.find(post => post.id === id);
};

// Helper function to get blog post by slug
export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get blog posts by category
export const getBlogPostsByCategory = (category: string) => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

// Helper function to search blog posts
export const searchBlogPosts = (query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowerCaseQuery) || 
    post.excerpt.toLowerCase().includes(lowerCaseQuery) || 
    post.content.toLowerCase().includes(lowerCaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
  );
};
