"use client"
import React from 'react';
import { Facebook, Instagram, Mail, Phone, Croissant, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Croissant className="h-6 w-6" />
              <h3 className="text-lg font-serif">Pão Do Pastor</h3>
            </div>
            <p className="text-sm text-orange-200 mb-4">
              Pão à moda antiga, rústico, feito com paixão, sem pressa, com farinha de moleiro, 
              com muito mais sabor e aroma.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +351 123 456 789
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Eduardo@paodopastor.pt
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Rua de São Felix 33B, Lapa, Lisboa
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4">Horário</h3>
            <p>Segunda - Sexta: 8:00 - 18:00</p>
            <p>Sábado: 8:00 - 13:00</p>
            <p>Domingo: Fechado</p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-200 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-orange-800 text-center">
          <p>&copy; 2024 Pão Do Pastor. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}