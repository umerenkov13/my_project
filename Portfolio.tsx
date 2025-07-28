import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Portfolio = () => {
  // Моковые работы для демонстрации
  const portfolioItems = [
    {
      id: 1,
      title: 'Карточка товара WB',
      category: 'Wildberries',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=1600&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'Инфографика OZON',
      category: 'OZON',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&h=1600&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'Рич-контент',
      category: 'Дополнительно',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&h=1600&fit=crop&crop=center'
    },
    {
      id: 4,
      title: 'Карточка косметики',
      category: 'Wildberries',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=1600&fit=crop&crop=center'
    },
    {
      id: 5,
      title: 'Адаптация под платформу',
      category: 'OZON',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&h=1600&fit=crop&crop=center'
    },
    {
      id: 6,
      title: 'Инфографика обуви',
      category: 'Wildberries',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=1600&fit=crop&crop=center'
    },
    {
      id: 7,
      title: 'Карточка электроники',
      category: 'OZON',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=1600&fit=crop&crop=center'
    },
    {
      id: 8,
      title: 'Карточка одежды',
      category: 'Wildberries',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=1600&fit=crop&crop=center'
    },
    {
      id: 9,
      title: 'Товары для дома',
      category: 'OZON',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=1600&fit=crop&crop=center'
    },
    {
      id: 10,
      title: 'Спортивные товары',
      category: 'Wildberries',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=1600&fit=crop&crop=center'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl mb-6 text-gray-900">
            Портфолио
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Примеры работ по созданию продающих карточек товаров для маркетплейсов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">{item.category}</p>
                <h3 className="text-gray-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Больше работ в моих социальных сетях</p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://t.me/design_aku" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
            >
              Telegram канал
            </a>
            <a 
              href="https://pin.it/3Zhnq6kmb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};