import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonialsData';

export function TestimonialsSection() {
    return (
        <section className="py-16 lg:py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl text-foreground mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
                        Client Love
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Kind words from those whose stories I've had the privilege to tell.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-background p-8 rounded-2xl shadow-sm relative group hover:shadow-md transition-all duration-300">
                            <Quote className="absolute top-8 left-8 w-8 h-8 text-accent/20" />

                            <div className="relative z-10">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < (testimonial.rating || 5) ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`}
                                        />
                                    ))}
                                </div>

                                <p className=" text-muted-foreground mb-6 leading-relaxed italic text-justify">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4">
                                    {testimonial.image && (
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    )}
                                    <div>
                                        <h4 className="font-semibold text-foreground" style={{ fontFamily: 'Cinzel, serif' }}>
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-accent">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
