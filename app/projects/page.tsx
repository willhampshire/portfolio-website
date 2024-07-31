import ProjectUnit from '../components/unit';
import HyperLink from '../components/hyper';

export default function ProjectsPage() {
    return (
        <div className="flex justify-center p-4">
            <main className="w-full max-w-4xl bg-black bg-opacity-40 backdrop-blur-2xl p-6 rounded-lg shadow-lg">
                <div className="rounded-3xl p-16">
                    <h1 className="text-5xl font-bold mb-6">Projects.</h1>
                    <p className="mb-6 text-gray-300">Here are my personal and professional projects, where personal projects are
                        available publicly.</p>

                    <ProjectUnit
                        title="LSTM based Machine Learning of Motor Activity for Prediction of Depression
                        without Clinical Diagnosis"
                        imageSrc="/neural_network_architecture.png"
                        classNameImage={"image-project"}
                        description={
                            <>
                                Trained a dual-branch multilayer neural network using LSTM RNN and Dense Layers using
                                {' '}<span className="inline-code">tensorflow</span>{' '}and{' '}
                                <span className="inline-code">scikit-learn</span>{' '}
                                to predict MADRS depression score, using activity from an
                                Actigraph watch. With 30% test split, 99.8% (R<sup>2</sup>) of variance in the results is
                                explained by the model, where MADRS prediction RMAE = 0.24% (mean error %).
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
                        title="WPF App (.NET) for Calculation of Radiance-Temperature Relationship for Digital
                        Radiometric Optical Devices"
                        imageSrc="/base-image-radtemp.png"
                        classNameImage={"image-project"}
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
                        classNameImage={"image-project"}
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
                        title="Levant Region Land Ownership Over Time – Tableau Viz"
                        imageSrc="/levant.png"
                        classNameImage={"image-project"}
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
                        title="Python Data Mining Scripts (professional)"
                        imageSrc="/python.png"
                        classNameImage={"image-project"}
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

                    {/* Add more ProjectUnit components as needed */}
                </div>
            </main>
        </div>
    );
}