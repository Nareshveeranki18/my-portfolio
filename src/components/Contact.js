// src/components/Contact.js (Updated for Formspree)

import React, { useState } from 'react';

const Contact = () => {
    // State to handle form submission status (optional but good practice)
    const [status, setStatus] = useState('');

    // REPLACE THIS PLACEHOLDER URL with the actual URL you get from Formspree
    const FORM_ENDPOINT = "https://formspree.io/f/myzrvqak"; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const formData = new FormData(e.target);

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('SUCCESS! Your message has been sent.');
                e.target.reset(); // Clear the form
            } else {
                setStatus('ERROR: Could not send message. Please try again.');
            }
        } catch (error) {
            setStatus('ERROR: A network error occurred.');
        }
    };
    
    return (
        <section>
            <h3 className="section-title">Contact</h3>
            <div className="grid">
                <div className="box">
                    <strong>Send a Message</strong>
                    
                    {/* The form now uses the handleSubmit function for modern, reliable submission */}
                    <form 
                        onSubmit={handleSubmit}
                        method="POST"
                        action={FORM_ENDPOINT} // Action points to the Formspree endpoint
                    >
                        {/* The 'name' attribute is required for Formspree to capture data */}
                        <input className="input" placeholder="Your Name" name="name" type="text" required />
                        <input className="input" placeholder="Your Email" name="email" type="email" required />
                        <textarea rows="4" placeholder="Your Message" name="message" required></textarea>
                        
                        <button className="btn" type="submit">Send Message</button>
                    </form>

                    {/* Display status feedback to the user */}
                    {status && <p style={{ marginTop: '15px', color: status.startsWith('SUCCESS') ? '#10b981' : '#ef4444' }}>{status}</p>}
                </div>
                
                <div className="box">
                    <strong>Contact Details</strong>
                    <p>Email: nareshveeranki09@gmail.com</p>
                    <p>Phone: +91 8106460929</p>
                </div>
            </div>
            <footer>© 2025 Veeranki Naresh Babu · Java Full Stack Portfolio</footer>
        </section>
    );
};

export default Contact;