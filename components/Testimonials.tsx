import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialsWrapper = styled.section`
  padding: 60px 20px;
  background: #f0f0f0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: #333;
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const TestimonialText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #555;
`;

const TestimonialAuthor = styled.p`
  font-size: 16px;
  font-style: italic;
  color: #0070f3;
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <TestimonialsWrapper>
      <Title>Testimonials</Title>
      <Slider {...settings}>
        <TestimonialCard>
          <TestimonialText>
            "This is a testimonial from a happy client."
          </TestimonialText>
          <TestimonialAuthor>
            - Client Name
          </TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>
            "Another positive feedback from a satisfied customer."
          </TestimonialText>
          <TestimonialAuthor>
            - Another Client
          </TestimonialAuthor>
        </TestimonialCard>
        {/* Add more TestimonialCards as needed */}
      </Slider>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
