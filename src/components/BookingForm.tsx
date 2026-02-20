"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    placement: '',
    budget: '',
    referenceImage: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({ ...prevData, referenceImage: e.target.files![0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, referenceImage: null }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.description.trim()) newErrors.description = 'Tattoo description is required';
    if (!formData.placement.trim()) newErrors.placement = 'Tattoo placement is required';
    if (!formData.budget.trim()) newErrors.budget = 'Budget is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
      console.log('Form Data Submitted:', formData);
      setSubmitMessage('Booking request sent successfully! Ressa will be in touch soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        description: '',
        placement: '',
        budget: '',
        referenceImage: null,
      });
      if (document.getElementById('referenceImage')) {
        (document.getElementById('referenceImage') as HTMLInputElement).value = '';
      }
    } catch (error) {
      setSubmitMessage('There was an error sending your request. Please try again.');
      console.error('Booking form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ label, name, type = 'text', value, onChange, error, placeholder }: any) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 rounded bg-gray-700 border ${error ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-white`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );

  const TextAreaField = ({ label, name, value, onChange, error, placeholder }: any) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-bold mb-2">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className={`w-full p-3 rounded bg-gray-700 border ${error ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-white`}
      ></textarea>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );

  const FileInputField = ({ label, name, onChange }: any) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type="file"
        id={name}
        name={name}
        onChange={onChange}
        accept="image/*"
        className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200"
      />
    </div>
  );

  return (
    <motion.section
      id="booking"
      className="py-24 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-12">Book Your Tattoo</h2>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="John Doe"
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="john.doe@example.com"
          />
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="(123) 456-7890"
          />
          <TextAreaField
            label="Tattoo Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={errors.description}
            placeholder="Describe your tattoo idea in detail."
          />
          <InputField
            label="Placement"
            name="placement"
            value={formData.placement}
            onChange={handleChange}
            error={errors.placement}
            placeholder="Forearm, Thigh, Back, etc."
          />
          <InputField
            label="Budget (USD)"
            name="budget"
            type="text"
            value={formData.budget}
            onChange={handleChange}
            error={errors.budget}
            placeholder="e.g., $300 - $500"
          />
          <FileInputField
            label="Reference Image (Optional)"
            name="referenceImage"
            onChange={handleFileChange}
          />

          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-3 px-4 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Request...' : 'Submit Booking Request'}
          </button>

          {submitMessage && (
            <p className={`mt-4 text-center ${submitMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
}
