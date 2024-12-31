import { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 60px 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background: #C6426E;
  color: inherit;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #C6423E;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          alert('Message Sent, We will get back to you shortly', result.text);
      }, (error) => {
          alert('An error occurred, Please try again', error.text);
      });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactWrapper>
      <Title>Contact Me</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
        <TextArea name="message" rows
="6" placeholder="Your Message" value={formData.message} onChange={handleChange} />
<Button type="submit">Send Message</Button>
</Form>
</ContactWrapper>
);
};

export default Contact;