import React from 'react';
import { Send, Eye, ExternalLink } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl mb-6 text-gray-900">
            Контакты
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готов обсудить ваш проект и создать карточки, которые будут продавать
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a 
            href="https://t.me/alexey_umerenkov" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
              <Send className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transform group-hover:scale-110 transition-all duration-300" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">Обсудить проект</h3>
            <p className="text-gray-600 text-sm mb-3">@alexey_umerenkov</p>
            <p className="text-gray-500 text-xs">Telegram для заказов</p>
          </a>
          
          <a 
            href="https://t.me/design_aku" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 text-center transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-purple-50 group-hover:bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
              <Eye className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transform group-hover:scale-110 transition-all duration-300" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2 group-hover:text-purple-900 transition-colors">Мой канал</h3>
            <p className="text-gray-600 text-sm mb-3">@design_aku</p>
            <p className="text-gray-500 text-xs">Работы и процессы</p>
          </a>
          
          <a 
            href="https://pin.it/3Zhnq6kmb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 text-center transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-red-50 group-hover:bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
              <ExternalLink className="w-6 h-6 text-red-600 group-hover:text-red-700 transform group-hover:scale-110 transition-all duration-300" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2 group-hover:text-red-900 transition-colors">Pinterest</h3>
            <p className="text-gray-600 text-sm mb-3">Полное портфолио</p>
            <p className="text-gray-500 text-xs">Все работы в одном месте</p>
          </a>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gray-50 p-6 rounded-xl max-w-md mx-auto">
            <h3 className="text-lg text-gray-900 mb-3">Время ответа</h3>
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Отвечаю в течение часа в рабочее время</span>
            </div>
            <p className="text-sm text-gray-500">ПН-ПТ: 10:00-19:00 (МСК)</p>
          </div>
        </div>
      </div>
    </section>
  );
};