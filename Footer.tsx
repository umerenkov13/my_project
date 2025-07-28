import React from 'react';
import { MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Карта */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">Работаю удаленно</p>
            <p className="text-gray-500 text-xs">по всей России</p>
          </div>
        </div>
        
        {/* Декоративная сетка для имитации карты */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-gray-600 h-full"></div>
            ))}
          </div>
          <div className="absolute inset-0">
            <div className="grid grid-rows-8 h-full">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="border-b border-gray-600 w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Основной футер */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl mb-4">Алексей</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                UX/UI дизайнер, специализирующийся на создании продающих карточек товаров для маркетплейсов.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">Обо мне</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Стоимость</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Telegram: <a href="https://t.me/alexey_umerenkov" className="text-white hover:text-gray-300 transition-colors">@alexey_umerenkov</a></p>
                <p>Канал: <a href="https://t.me/design_aku" className="text-white hover:text-gray-300 transition-colors">@design_aku</a></p>
                <p>Pinterest: <a href="https://pin.it/3Zhnq6kmb" className="text-white hover:text-gray-300 transition-colors">Портфолио</a></p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Алексей Умеренков. UX/UI дизайнер.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};