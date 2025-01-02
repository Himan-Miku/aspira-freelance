import {
  AboutHeader,
  AboutValues,
  AboutLeads,
  AboutFooter,
} from "./components";

const AboutPage = () => {
  return (
    <main className="mt-16 flex flex-col items-center justify-center gap-32">
      <AboutHeader />

      <AboutValues />
      <AboutLeads />
      <AboutFooter />
    </main>
  );
};

export default AboutPage;
