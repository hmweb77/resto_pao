import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Separator } from '../components/Separator';

export default function Homes() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
          alt="Fresh bread assortment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-serif mb-4">Pão Do Pastor</h1>
            <p className="text-xl mb-8">Tradição e sabor desde 1950</p>
            <a
              href="/menu"
              className="inline-flex items-center bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Ver Menu
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <Separator />

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-orange-900 text-center mb-12">Nossos Produtos Mais Populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&q=80"
              alt="Pão Tradicional"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-serif text-xl mb-2 text-orange-900">Pão Tradicional</h3>
              <p className="text-orange-700">O nosso pão mais vendido, feito com farinha portuguesa.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80"
              alt="Pastel de Nata"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-serif text-xl mb-2 text-orange-900">Pastel de Nata</h3>
              <p className="text-orange-700">A famosa sobremesa portuguesa, receita tradicional.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&q=80"
              alt="Broa de Milho"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-serif text-xl mb-2 text-orange-900">Broa de Milho</h3>
              <p className="text-orange-700">Pão tradicional português feito com farinha de milho.</p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Eduardo's Story */}
      <div className="bg-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-orange-900 mb-6">A História de Eduardo</h2>
              <p className="text-orange-800 mb-6">
                Eduardo Santos, mestre padeiro há mais de 30 anos, aprendeu a arte de fazer pão com seu pai 
                nas montanhas do norte de Portugal. Desde jovem, acordava antes do nascer do sol para 
                preparar as massas e acender o forno a lenha.
              </p>
              <p className="text-orange-800 mb-6">
                Em 1990, trouxe suas receitas tradicionais para Lisboa, onde abriu sua primeira padaria. 
                Hoje, mantém viva a tradição portuguesa do pão artesanal, usando técnicas ancestrais e 
                os melhores ingredientes locais.
              </p>
              <p className="text-orange-800">
                "O segredo está no amor e no respeito pelo tempo. O bom pão não pode ser apressado" 
                - Eduardo Santos
              </p>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1573333515743-56d57731dd1f?auto=format&fit=crop&q=80"
                alt="Padeiro trabalhando"
                className="rounded-lg shadow-xl mb-4"
              />
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80"
                alt="Pães artesanais"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Instagram Feed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif text-orange-900 text-center mb-8">Siga-nos no Instagram</h2>
        <p className="text-orange-800 text-center mb-12">@paodopastor</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="https://instagram.com/paodopastor" className="block overflow-hidden rounded-lg transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80"
              alt="Pão com Chouriço"
              className="w-full h-64 object-cover"
            />
          </a>
          <a href="https://instagram.com/paodopastor" className="block overflow-hidden rounded-lg transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80"
              alt="Pães Artesanais"
              className="w-full h-64 object-cover"
            />
          </a>
          <a href="https://instagram.com/paodopastor" className="block overflow-hidden rounded-lg transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&q=80"
              alt="Processo de Fabricação"
              className="w-full h-64 object-cover"
            />
          </a>
          <a href="https://instagram.com/paodopastor" className="block overflow-hidden rounded-lg transform hover:scale-105 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80"
              alt="Pães Frescos"
              className="w-full h-64 object-cover"
            />
          </a>
        </div>
      </div>

      <Separator />

      {/* Contact Form Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-serif text-amber-900 text-center mb-8">Fale Connosco</h2>
            <p className="text-amber-800 text-center mb-8">
              Tem alguma pergunta ou gostaria de fazer uma encomenda especial? 
              Entre em contacto connosco!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-amber-900 mb-2 font-medium">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-amber-900 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-amber-900 mb-2 font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors inline-flex items-center gap-2"
                >
                  Enviar Mensagem
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}