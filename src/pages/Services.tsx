import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Services = () => {
  return (
    <Layout>
      <section className="pt-20 pb-12 px-4 bg-brand-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Expert Guidance. Real Results.
          </h1>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade accessibility auditing sized for small business realities.
          </p>
        </div>
      </section>

      {/* Process — numbered typography, no cards */}
      <section className="px-4 bg-background" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">How we move you from exposed to protected.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "You tell us what happened", desc: "Demand letter, customer complaint, or proactive protection." },
              { num: "2", title: "We audit your site", desc: "Automated scanning + screen reader + keyboard testing + expert review." },
              { num: "3", title: "You get a playbook", desc: "Prioritized, step-by-step with screenshots and platform instructions." },
              { num: "4", title: "You fix it", desc: "With our support — weekly check-ins, prioritization, and legal documentation." },
            ].map((step) => (
              <div key={step.num}>
                <div className="text-6xl font-serif font-bold text-brand-200 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service levels — no pricing, contact CTA */}
      <section className="px-4 bg-muted/30 border-y border-border" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Three Levels of Service
          </h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            We offer three levels of service — from urgent triage to full ongoing protection — tailored to your situation. Every engagement includes a comprehensive audit, a plain-English remediation playbook, and hands-on support.
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reach out and we'll recommend the right fit based on your platform, your timeline, and whether you're responding to a demand letter or getting ahead of one.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-medium bg-primary text-primary-foreground h-14 px-8 text-lg rounded-md hover:bg-brand-700 transition-colors"
          >
            Let's Discuss Your Situation
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-4 bg-background" style={{ paddingTop: 'var(--space-section)', paddingBottom: 'var(--space-section)' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">What You Actually Get</h2>
            <p className="text-lg text-muted-foreground">Deliverables designed for action, not just a list of errors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Executive Summary", desc: "60-second read: how many issues, how serious, what to fix first." },
              { title: "Prioritized Issue List", desc: "Every issue ranked by legal risk and severity, not just WCAG codes." },
              { title: "Remediation Playbook", desc: "Step-by-step fix instructions with screenshots for Shopify/WooCommerce/Squarespace." },
              { title: "Compliance Posture Statement", desc: "Language your attorney can use to demonstrate good-faith remediation." },
            ].map((item) => (
              <div key={item.title} className="pt-4 border-t border-brand-200">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 bg-brand-900 text-brand-50 text-center" style={{ paddingTop: 'var(--space-section-dramatic)', paddingBottom: 'var(--space-section-dramatic)' }}>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-50">
            Not sure where to start?
          </h2>
          <p className="text-xl text-brand-200 mb-8">
            A 15-minute call costs you nothing. We'll listen to your situation and recommend next steps.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-medium bg-brand-50 text-brand-900 h-14 px-8 text-lg rounded-md hover:bg-brand-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
