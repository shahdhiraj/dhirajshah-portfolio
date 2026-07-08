import { motion } from "motion/react";
import { Award } from "lucide-react";

const awardsData = [
    {
        title: "Microsoft Generative AI Engineering",
        subtitle: "Professional Certificate",
        subtitleColor: "text-neutral-500"
    },
    {
        title: "Foundations of User Experience (UX) Design",
        subtitle: "Google Professional Certificate",
        subtitleColor: "text-neutral-500"
    },
    {
        title: "Graphic Design Training",
        subtitle: "Lead Instructor, Evergreen Techno Club",
        subtitleColor: "text-neutral-400"
    },
    {
        title: "Recognition of Excellence",
        subtitle: "Best Participation & Support - Evergreen Techno Club",
        subtitleColor: "text-neutral-400"
    },
    {
        title: "CODEFEST Hackathon 2024",
        subtitle: "Awarded for Innovative Historical Preservation Solution.",
        subtitleColor: "text-neutral-400"
    },
    {
        title: "CODEFEST Hackathon 2025",
        subtitle: "Awarded for Digital Governance & Financial Transparency Tool.",
        subtitleColor: "text-neutral-400"
    },
    {
        title: "Web Design Competition Winner",
        subtitle: "Second Prize, Tech Carnival 2025",
        subtitleColor: "text-neutral-500"
    }
];

const Awards = () => {
    return (
        <section id="awards" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl"
                >

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-16">

                        {/* Left side: Icon and Header */}
                        <div className="md:w-1/4 flex-shrink-0">
                            <div className="flex flex-col gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                                    <Award className="w-8 h-8 text-neutral-300" />
                                </div>
                                <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-white">
                                    Award & Certification
                                </h2>
                            </div>
                        </div>

                        {/* Right side: Items Grid */}
                        <div className="md:w-3/4">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                                {awardsData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col gap-2"
                                    >
                                        <h3 className="text-sm md:text-base font-bold text-white leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className={`text-xs md:text-sm leading-relaxed ${item.subtitleColor}`}>
                                            {item.subtitle}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Awards;
