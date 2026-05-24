"use client";

import ReactLenis from "lenis/react";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import TeamCardTen from "@/components/sections/team/TeamCardTen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Target, Users, TrendingUp, Lightbulb } from "lucide-react";

export default function BusinessCoachTemplatePage() {
    const navItems = [
        { name: "About", id: "about" },
        { name: "Services", id: "services" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="entrance-slide"
            borderRadius="rounded"
            contentWidth="medium"
            sizing="medium"
            background="none"
            cardStyle="glass-elevated"
            primaryButtonStyle="shadow"
            secondaryButtonStyle="solid"
            headingFontWeight="medium"
        >
            <ReactLenis root>
                <NavbarLayoutFloatingInline
                    navItems={navItems}
                    brandName="Coach"
                    button={{ text: "Book a Call", href: "#contact" }}
                />
                <div id="hero">
                    <HeroSplitDualMedia
                        background={{ variant: "radial-gradient" }}
                        tag="Business Coach"
                        tagIcon={Sparkles}
                        title="Transform your business with proven strategies"
                        description="I help entrepreneurs and executives unlock their full potential and build thriving businesses through personalized coaching."
                        mediaItems={[
                            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero1.webp", imageAlt: "Coaching session" },
                            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/business-coach/hero/hero2.webp", imageAlt: "Business growth" },
                        ]}
                        rating={5}
                        ratingText="Rated by loving Clients"
                        buttons={[
                            { text: "Book a Call", href: "#" },
                            { text: "Learn More", href: "#" },
                        ]}
                        mediaAnimation="slide-up"
                    />
                </div>
                <div id="services">
                    <FeatureCardTwentyFive
                        tag="Services"
                        tagIcon={Sparkles}
                        title="How I Can Help You"
                        description="Comprehensive coaching services designed to accelerate your growth"
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={false}
                        features={[
                            {
                                title: "Business Strategy",                                description: "Crafting clear, actionable strategies that align with your goals for sustainable growth.",                                icon: Target,
                                mediaItems: [
                                    { imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", imageAlt: "Team collaborating around a whiteboard" },
                                    { imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop", imageAlt: "Strategy meeting presentation" },
                                ],
                            },
                            {
                                title: "Leadership Development",                                description: "Build the leadership skills needed to inspire teams and drive organizational success.",                                icon: Users,
                                mediaItems: [
                                    { imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop", imageAlt: "Professional team meeting" },
                                    { imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop", imageAlt: "Confident business leader" },
                                ],
                            },
                            {
                                title: "Growth Acceleration",                                description: "Identify opportunities and implement systems to scale your business efficiently.",                                icon: TrendingUp,
                                mediaItems: [
                                    { imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", imageAlt: "Business analytics dashboard" },
                                    { imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", imageAlt: "Growth metrics on screen" },
                                ],
                            },
                            {
                                title: "Mindset Coaching",                                description: "Overcome limiting beliefs and develop the mindset of a successful entrepreneur.",                                icon: Lightbulb,
                                mediaItems: [
                                    { imageSrc: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=600&fit=crop", imageAlt: "Mindfulness and focus" },
                                    { imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop", imageAlt: "One-on-one coaching session" },
                                ],
                            },
                        ]}
                    />
                </div>
                <div id="testimonials">
                    <TestimonialCardSixteen
                        tag="Testimonials"
                        tagIcon={Sparkles}
                        title="What My Clients Say"
                        description="Hear from entrepreneurs who've transformed their businesses"
                        textboxLayout="default"
                        animationType="slide-up"
                        useInvertedBackground={false}
                        testimonials={[
                            {
                                id: "1",                                name: "Sarah Mitchell",                                role: "Founder & CEO",                                company: "TechStart Inc",                                rating: 5,
                                imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",                                imageAlt: "Sarah Mitchell"},
                            {
                                id: "2",                                name: "Michael Chen",                                role: "Managing Director",                                company: "Growth Partners",                                rating: 5,
                                imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",                                imageAlt: "Michael Chen"},
                            {
                                id: "3",                                name: "Emily Rodriguez",                                role: "Business Owner",                                company: "Creative Studios",                                rating: 5,
                                imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",                                imageAlt: "Emily Rodriguez"},
                        ]}
                        kpiItems={[
                            { value: "200+", label: "Clients coached" },
                            { value: "95%", label: "Success rate" },
                            { value: "12+", label: "Years experience" },
                        ]}
                    />
                </div>
                <div id="about">
                    <TeamCardTen
                        title="Get to know the experienced coaches who will personally guide your entire business transformation journey"
                        tag="About"
                        membersAnimation="slide-up"
                        memberVariant="card"
                        useInvertedBackground={false}
                        members={[
                            {
                                id: "1",                                name: "John Anderson",                                imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",                                imageAlt: "John Anderson - Business Coach"},
                            {
                                id: "2",                                name: "Lisa Thompson",                                imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",                                imageAlt: "Lisa Thompson - Executive Coach"},
                        ]}
                    />
                </div>
                <div id="contact">
                    <ContactText
                        text="Ready to transform your business? Let's start your journey to success today."
                        background={{ variant: "plain" }}
                        useInvertedBackground={false}
                        buttons={[
                            { text: "Book a Free Consultation", href: "#" },
                            { text: "Learn More", href: "#" },
                        ]}
                    />
                </div>
                <FooterLogoEmphasis
                    logoText="Coach"
                    columns={[
                        {
                            items: [
                                { label: "About", href: "#about" },
                                { label: "Services", href: "#services" },
                                { label: "Testimonials", href: "#testimonials" },
                            ],
                        },
                        {
                            items: [
                                { label: "FAQ", href: "#faq" },
                                { label: "Contact", href: "#contact" },
                                { label: "Book a Call", href: "#" },
                            ],
                        },
                        {
                            items: [
                                { label: "LinkedIn", href: "#" },
                                { label: "Twitter", href: "#" },
                                { label: "Instagram", href: "#" },
                            ],
                        },
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}