import React from "react";

// const PartnersList = [
//     {id:1, Title:"Test"}
// ]

const PartnersList = {
    "Platinum Sponsor": {
        items: [
            {ImgSrc:"images/esri.jpg", ImgUrl:"https://www.esri.com/en-us/home", BlankTarget:"_blank", Title:"Esri", description:"Esri, the global leader in GIS software and location intelligence, helps customers unlock the full potential of data to improve operational and business results. Esri software is deployed in more than 350,000 organizations globally and in over 200,000 institutions in the Americas, Asia and the Pacific, Europe, Africa, and the Middle East, including Fortune 500 companies, government agencies, nonprofits, and universities. Esri has regional offices, international distributors, and partners providing local support in over 100 countries on six continents. Esri engineers the most innovative solutions for digital transformation, the Internet of Things (IoT), and advanced analytics. Visit us at esri.com"}
        ]
    },
    "Corporate Sponsors": {
        items: [
            {
                ImgSrc:"images/trimble.jpg", ImgUrl:"https://geospatial.trimble.com/", BlankTarget:"_blank", Title:"Trimble", description:"Trimble Geospatial solutions provide high-quality, productive workflows and information exchange, driving value for a global and diverse customer base of surveyors, engineering and GIS service companies, governments, utilities and transportation authorities. Trimble's innovative technologies include integrated sensors, field applications, real-time communications and office software for processing, modeling and data. Using Trimble solutions, organizations can capture the most accurate spatial data and transform it into intelligence to deliver increased productivity and improved decision-making. Whether enabling efficient use of natural resources or enhancing the performance and lifecycle of civil infrastructure, timely and reliable geospatial information is at the core of Trimble's solutions."
            },
            {
                ImgSrc:"images/hexagon-b.jpg", ImgUrl:"https://hexagon.com/", Title:"Hexagon", BlankTarget:"_blank", description:<>{'Hexagon is a global leader in digital reality solutions, combining sensor, software and autonomous technologies. We are putting data to work to boost efficiency, productivity, quality and safety across industrial, manufacturing, infrastructure, public sector, and mobility applications.'} <br /> <br /> {'Our technologies are shaping production and people-related ecosystems to become increasingly connected and autonomous - ensuring a scalable, sustainable future. Hexagon (Nasdaq Stockholm: HEXA B) has approximately 22,000 employees in 50 countries and net sales of approximately 4.3bn EUR. Learn more at hexagon.com and follow us @HexagonAB.'}</>
            }
        ]
    },
    "Associate Sponsors": {
        items: [
            {
                ImgSrc:"images/Geo4iR.jpg", Title:"Missouri Geo4IR", BlankTarget:"_self", description:<>
                    {'Missouri Geo4IR, along with the state-wide Missouri Chamber of Commerce, is aimed at:'} 
                    <ul>
                        <li>{'Creating significant job growth for Missouri by helping actualize the Tech 2030 Initiative, extending the momentum of the new NGA West Headquarters - and aligning Missouri with the tremendous opportunities in geospatial intelligence and the 4th industrial revolution;'}</li>
                        <li>{'Collaborating with the 4IR industry to help develop, foster, and grow geospatial, Artificial Intelligence, and 4IR workforce training, educational, and internship programs across Missouri;'}</li>
                        <li>{'Supporting Private and Public efforts to further Missouris commitment to Tech industry leadership - and vision to become a Geospatial and 4th Industrial Revolution HUB!'}</li>
                    </ul>
                </>
            },
            {
                ImgSrc:"images/cyclomedia.png", ImgUrl:"https://www.cyclomedia.com/us", BlankTarget:"_blank", Title:"Cyclomedia", description:"Cyclomedia captures data from the real world and transforms it into valuable insights enabling you to understand the complexities of the environment around you. With the world's most accurate 360°street-level visualizations, enhanced by innovative, AI-powered analytics, Cyclomedia delivers actionable insights that you can use today in order to build a better tomorrow. Cyclomedia develops, builds and operates the worlds most advanced mobile mapping systems. With a combination of sensors ranging from camera's & Lidar scanners to state-of-the-art positioning systems we map dense urban areas in Western Europe and North America. Today our solutions make cities more safe, green, accessible and smart and help companies to make the right decisions based on fresh and accurate data. Real data. True understanding. Big impact."
            }
        ]
    },
    "Media Partners": {
        items: [
            {
                ImgSrc:"images/ApogeoSpatial.jpg", ImgUrl:"https://apogeospatial.com/", Title:"Apogeo Spatial", BlankTarget:"_blank", description:"Apogeo Spatial communicates the power of geospatial tools and technologies in managing the world's scarce resources and environment, so that the global population has security of water, food and energy. With a focus on long-term sustainability of the planet and people, Apogeo Spatial provides visual intelligence elevating global awareness. Business, government and academic professionals find the information—and inspiration—for using geospatial tools to build a more sustainable world. With the fresh, relevant insights from expert contributors, stunning visuals and clear examples of the technologies, those who make critical policy and business decisions about the world's resources will understand the power of remotely sensed data and solutions. See www.apogeospatial.com"
            },
            {
                ImgSrc:"images/BIGnieuws.jpg", ImgUrl:"https://www.bignieuws.nl/", BlankTarget:"_blank", Title:"BIGnieuws Magazine", description:"Dutch language magazine BIGnieuws is published 8 times a year, digitally and in print. It is a magazine with a practical approach, aimed at the Construction, Infra and Geo-ICT professional. BIGnieuws reports current events, interviews experienced users and other stakeholders from education, government and the Netherlands business world. BIGnieuws is sent in controlled circulation to professionals in the Netherlands and Flanders who work in construction, infrastructure and Geo-ICT. www.bignieuws.nl"
            },
            {
                ImgSrc:"images/GEOINFORMATICS.jpg", ImgUrl:"https://www.geoinformatics.com/", BlankTarget:"_blank", Title:"GeoInformatics", description:"GeoInformatics is a 100% free online platform for the international surveying, mapping and GIS industry. Recognizing the integrated nature of the geospatial information industry, GeoInformatics presents thought provoking and useful information. With our daily updated website www.geoinformatics.com and our bi-weekly newsletter (send out to over 30,000 professionals world-wide!), GeoInformatics has a leading position in this market place for many years to come."
            },
            {
                ImgSrc:"images/mydeardrone.jpg", ImgUrl:"https://mydeardrone.com/", BlankTarget:"_blank", Title:"MyDearDrone", description:"Are you a UAV Fan? MyDearDrone is perfect for you because it's a free, original and best community to learn everything from news, reviews, guides and much more about drone and its technology. So come and experience the Quadcopter (UAV) world with us."
            },
            {
                ImgSrc:"images/BCS-logo.jpg", ImgUrl:"https://www.cartography.org.uk/", BlankTarget:"_blank", Title:"British Cartographic Society", description:"The British Cartographic Society (BCS) is a friendly society for those who love map making and geographic data visualisation. There are a range of membership categories to suit all levels of interest, with members receiving publications, invitations to events and access to networking opportunities and online content. The BCS was founded in 1963 and our membership includes national mapping agencies, cartographers, GIS specialists, publishers, academics, researchers, map curators and those with a love of maps."
            },
            {
                ImgSrc:"images/LBMA.jpg", ImgUrl:"https://thelbma.com/", BlankTarget:"_blank", Title:"British Cartographic Society", description:<>{'The LBMA is a global media and events organization dedicated to creating opportunities for our member companies to reach the right audience at the right time and place.'} <br /> <br /> {'With a network of conferences, publications, and content platforms that span the planet, we are uniquely placed to drive marketing optimization, revenue generation, and industry best practices for any brand or service provider in the location and geo-spatial sector.'}</>
            }
        ]
    }
  };

export default PartnersList;