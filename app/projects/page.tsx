import ProjectUnit from '../components/unit';
import HyperLink from '../components/hyper';

export default function ProjectsPage() {
    return (
        <div className="flex justify-center p-4">
            <main className="w-full position-relative z-10 max-w-4xl bg-black bg-opacity-40 backdrop-blur-2xl p-6 rounded-lg shadow-lg">
                <div className="rounded-3xl p-4 md:p-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects.</h1>
                    <p className="mb-6 text-gray-300 text-sm md:text-lg">Here are my personal and professional projects, where personal projects are
                        available publicly.</p>

                    <ProjectUnit
                        title="LSTM based Machine Learning of Motor Activity for Prediction of Depression
                        without Clinical Diagnosis"
                        imageSrc="/neural_network_architecture.png"
                        classNameImage={"image-project-sm md:image-project"}
                        description={
                            <>
                                Trained a dual-branch multilayer neural network using LSTM RNN and Dense Layers using
                                {' '}<span className="inline-code">tensorflow</span>{' '}and{' '}
                                <span className="inline-code">scikit-learn</span>{' '}
                                to predict MADRS depression score, using activity from an
                                Actigraph watch. With 30% test split, __% (R<sup>2</sup>) of variance in the results is
                                explained by the model, where MADRS prediction RMAE = __% (mean error %). RESULTS PENDING.
                                More details on{' '}
                                <HyperLink href={"https://github.com/willhampshire/Depresjon_ML"}
                                           external={true} text={"GitHub"}/>
                                .{' '}‘Depresjon’ dataset from{' '}
                                <HyperLink href={"https://datasets.simula.no/depresjon/"}
                                           external={true} text={"Simula"}/>.
                            </>
                        }
                    />

                    <ProjectUnit
                        title="Exploratory Data Analysis of Go-Karting Times"
                        imageSrc="/median_catplot.png"
                        classNameImage={"image-project-sm md:image-project"}
                        description={
                            <>
                                TeamSport Karting send an email after each heat/session containing the lap times of your session.
                                This provided an opportunity to use what I have learned so far in the Data Science track
                                on DataCamp in an area I am interested in. I asked my family what they would like to find out,
                                 and implemented data engineering, EDA, and visualisation leveraging
                                powerful features of{' '}
                                <span className="inline-code">pandas</span>{' '}and{' '}<span className="inline-code">seaborn</span>
                                {' '} to answer their questions, wrangling and processing the data to provide effective
                                visualisations.
                                More details on{' '}
                                <HyperLink href={"https://github.com/willhampshire/karting"}
                                           external={true} text={"GitHub"}/>
                                .
                            </>
                        }
                    />

                    <ProjectUnit
                        title="This Website - Responsive Design using Modern Frameworks"
                        imageSrc="/next.png"
                        classNameImage={"image-project-sm md:image-project"}
                        description={
                            <>
                                After noticing my Wordpress site was very bloated and slow, I created my own, using{' '}
                                <span className="inline-code">Next.js</span>,{' '}
                                <span className="inline-code">Tailwind CSS</span>{' '}and{' '}
                                <span className="inline-code">Headless UI</span>, using{' '}
                                <span className="inline-code">.tsx</span>{' '}
                                to return HTML rather than DOM based interactions.
                                Using CSS to implement a subtle moving gradient background is one of the customisations that
                                building from scratch allows, as well as{' '}
                                <span className="inline-code">React.js</span>{' '}
                                fast page navigation. Overall, an enjoyable project to extend web development experience.
                                More details on{' '}
                                <HyperLink href={"https://github.com/willhampshire/portfolio-website"}
                                           external={true} text={"GitHub"}/>.
                            </>
                        }
                    />

                    <ProjectUnit
                        title="WPF App (.NET 8) for Calculation of Radiance-Temperature Relationship for Digital
                        Radiometric Optical Devices"
                        imageSrc="/base-image-radtemp.png"
                        classNameImage={"image-project-sm md:image-project"}
                        description={
                            <>
                                Created a C# app using the WPF framework that calculates the Radiance Temperature
                                relationship for a given wavelength band, temperature range, and filter using the
                                Sakuma Hattori Planck 3 approximation to calculate thermal radiation.
                                SQLite database management module created to
                                manage filters, which can be stacked to simulate a non-transparent beam path.
                                Resulting relationship downloadable as CSV. More details on{' '}
                                <HyperLink href={"https://github.com/willhampshire/WPFapp_radiance_temperature"}
                                           external={true} text={"GitHub"}/>.
                            </>
                        }
                    />

                    <ProjectUnit
                        title="Sheffield 2024 Local Election – Data Scraping to Viz"
                        imageSrc="/sheffield_local_bubbles.png"
                        classNameImage={"image-project-sm md:image-project"}
                        description={
                            <>
                                After reading the 2024 Sheffield local election{' '}
                                <HyperLink href={"www.sheffield.gov.uk/your-city-council/city-council-parish-council-election-results"}
                                           external={true} text={"results"}/>
                                , I thought they could be more
                                inviting and insightful if visualised. So, I copied the HTML source into a local .txt
                                (avoids use of bots), and performed data scraping and querying, using Python and SQLite.
                                I then visualised in{' '}
                                <HyperLink href={"https://public.tableau.com/views/Sheffieldlocalelections2024-totalpartyvotes/Sheffieldlocalelectionstotalvotesforeachparty?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link"}
                                           external={true} text={"Tableau"}/> {' '}
                                (example image shows total party votes). Project files &
                                direction can found in my{' '}
                                <HyperLink href={"https://github.com/willhampshire/election_results/tree/main"}
                                           external={true} text={"GitHub repository"}/>
                                , where anyone can further interrogate the
                                data.
                            </>
                        }
                    />


                    <ProjectUnit
                        title="Python Data Mining Scripts (professional)"
                        imageSrc="/python.png"
                        classNameImage={"image-project-sm md:image-project"}
                        description={
                            <>
                                Used to verify instrument quality in 7 figure orders, I coded 5 data mining scripts,
                                using numpy, pandas, and more, for my company. Enhanced quality control using
                                statistical methods, able to identify anomalies efficiently and determine effective &
                                reasonable pass/fail thresholds. Over 30,000 records, formatted as .html, .pdf and
                                .txt, scraped in total.
                            </>
                        }
                    />

                    <ProjectUnit
                        title="Levant Region Land Ownership Over Time – Tableau Viz"
                        imageSrc="/levant.png"
                        classNameImage={"image-project-sm md:image-project"}
                        description={
                            <>
                                I thought it would be interesting to collate data from multiple maps, digitising to
                                shapefiles using QGIS, to show ownership of the land in the Levant region
                                (specifically modern day Israel/Palestine area) in coarse steps from 1000BC. This{' '}
                                <HyperLink href={"https://public.tableau.com/app/profile/william.hampshire/viz/Levant/BriefhistoryofIsraelintheLevantregion"}
                                           external={true} text={"Tableau dashboard"}/>{' '}
                                allows the user to investigate the land ownership over time,
                                and speculate on complex and nuanced factors contributing to ongoing modern conflicts.
                            </>
                        }
                    />

                    <ProjectUnit
                        title="Rest API website client (professional)"
                        imageSrc="/js.png"
                        classNameImage={"image-project-sm md:image-project"}
                        description={
                            <>
                                Created an example website using HTML, CSS and – mostly – JavaScript, showing the 
                                capabilities of connecting to instruments using Rest API. This includes displaying a
                                live image via http GET requests, PUT requests, sending queries for specific regions (ROIs) 
                                retrieving minimum, maximum and average values within, and more. This work supports the
                                move towards IoT systems of devices.
                            </>
                        }
                    />

                    {/* Add more ProjectUnit components as needed */}
                </div>
            </main>
        </div>
    );
}
