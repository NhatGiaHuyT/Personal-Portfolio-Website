import Link from 'next/link';
import { getAllPosts } from '../lib/api';
import styled from 'styled-components';

const BlogWrapper = styled.section`
  padding: 60px 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const BlogCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const BlogDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const Blog = ({ posts }) => {
  return (
    <BlogWrapper>
      <Title>Blog</Title>
      <BlogGrid>
        {posts.map((post) => (
          <Link key={post.slug} as={`/blog/${post.slug}`} href="/blog/[slug]">
            <BlogCard>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogDescription>{post.excerpt}</BlogDescription>
            </BlogCard>
          </Link>
        ))}
      </BlogGrid>
    </BlogWrapper>
  );
};

export default Blog;