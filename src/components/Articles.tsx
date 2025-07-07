import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Building Scalable .NET Applications with Clean Architecture',
    excerpt: 'Learn how to structure your .NET applications for maintainability and scalability using clean architecture principles.',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    tags: ['.NET', 'Architecture', 'Clean Code'],
    url: '#'
  },
  {
    id: '2',
    title: 'Modern React Patterns for Better State Management',
    excerpt: 'Explore advanced React patterns and hooks for managing complex application state effectively.',
    date: 'Feb 28, 2024',
    readTime: '6 min read',
    tags: ['React', 'State Management', 'Hooks'],
    url: '#'
  },
  {
    id: '3',
    title: 'Optimizing Database Performance in Enterprise Applications',
    excerpt: 'Best practices for database optimization, indexing strategies, and query performance tuning.',
    date: 'Feb 10, 2024',
    readTime: '12 min read',
    tags: ['Database', 'Performance', 'SQL'],
    url: '#'
  }
];

const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I write about software development, best practices, and lessons learned from building applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-300 mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={article.url}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span className="text-sm font-medium">Read more</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;