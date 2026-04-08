import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Dumbbell, Users, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Industrial Moderno com Tipografia Bold
 * Cores: Preto (#000000) + Amarelo (#FFD700)
 * Tipografia: Poppins Bold (títulos) + Inter Regular (corpo)
 * Layout: Assimétrico com blocos de conteúdo desalinhados
 */

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: "", phone: "", email: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* ===== HEADER / NAVIGATION ===== */}
      <header className="sticky top-0 z-50 bg-black text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black">
              DF
            </div>
            <h1 className="text-xl font-bold">Academia David Falcão</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#servicos" className="hover:text-yellow-400 transition-colors">
              Serviços
            </a>
            <a href="#diferenciais" className="hover:text-yellow-400 transition-colors">
              Diferenciais
            </a>
            <a href="#contato" className="hover:text-yellow-400 transition-colors">
              Contato
            </a>
          </nav>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold">
            <Phone className="w-4 h-4 mr-2" />
            Ligar
          </Button>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029610650/MeRR3x2bsa3oFiXERMJv72/hero-gym-action-dLpbDEdPg9PJvfFqLxD5Te.webp"
            alt="Academia em ação"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg mb-6 font-bold text-sm">
                ⚡ TRANSFORME SEU CORPO
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Muito Mais que um Local pra Treinar
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Ambiente climatizado, equipamentos modernos e equipe qualificada. Sua transformação começa aqui.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6 font-bold">
                  Começar Agora
                </Button>
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-6 font-bold"
                >
                  Conhecer Mais
                </Button>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6">
              <div className="bg-yellow-400 text-black p-8 rounded-lg font-bold text-center transform -rotate-3">
                <div className="text-4xl mb-2">24H</div>
                <div className="text-sm">Funcionamento</div>
              </div>
              <div className="bg-white text-black p-8 rounded-lg font-bold text-center transform rotate-2">
                <div className="text-4xl mb-2">+100</div>
                <div className="text-sm">Máquinas</div>
              </div>
              <div className="bg-yellow-400 text-black p-8 rounded-lg font-bold text-center transform -rotate-2">
                <div className="text-4xl mb-2">4.8★</div>
                <div className="text-sm">Avaliação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* ===== DIFERENCIAIS SECTION ===== */}
      <section id="diferenciais" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center">Por que escolher a David Falcão?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-black text-white p-8 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">100% Climatizado</h3>
              <p className="text-gray-300">
                Ambiente totalmente climatizado para seu conforto durante os treinos, em qualquer estação do ano.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-black text-white p-8 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Dumbbell className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Equipamentos Modernos</h3>
              <p className="text-gray-300">
                Mais de 100 máquinas e equipamentos de última geração para todos os tipos de treino.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-black text-white p-8 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-yellow-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Equipe Qualificada</h3>
              <p className="text-gray-300">
                Profissionais experientes prontos para orientar e acompanhar sua jornada fitness.
              </p>
            </div>
          </div>

          {/* Additional features */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Spinning", icon: "🚴" },
              { label: "Cardio", icon: "❤️" },
              { label: "Musculação", icon: "💪" },
              { label: "Funcional", icon: "⚡" },
              { label: "Nutricionista", icon: "🥗" },
              { label: "Massoterapia", icon: "💆" },
              { label: "Personal", icon: "👨‍🏫" },
              { label: "Crossfit", icon: "🏋️" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-lg text-center hover:bg-yellow-400 transition-colors duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="font-bold text-sm">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALERIA SECTION ===== */}
      <section id="servicos" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center">Conheça Nossa Estrutura</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-lg h-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029610650/MeRR3x2bsa3oFiXERMJv72/gym-interior-modern-4xDZravp27XnezA4jr65sv.webp"
                alt="Interior da academia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029610650/MeRR3x2bsa3oFiXERMJv72/equipment-showcase-oJsUuvdKbPGzJvfFqLxD5Te.webp"
                alt="Equipamentos"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029610650/MeRR3x2bsa3oFiXERMJv72/personal-training-5adaBxoYv2iTZ6XLw2q9bb.webp"
                alt="Treinamento pessoal"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-80">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029610650/MeRR3x2bsa3oFiXERMJv72/transformation-collage-WxptcynBLJzu6AR8mXfZme.webp"
                alt="Transformações"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== INFORMAÇÕES SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Localização */}
            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Localização</h3>
              <p className="text-gray-600 mb-4">
                Rua Treze de Maio, 1189 <br />
                COHAB, Caxias - MA <br />
                CEP: 65604-260
              </p>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Ver no Mapa
              </Button>
            </div>

            {/* Horário */}
            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Horário de Funcionamento</h3>
              <div className="text-gray-600 space-y-2">
                <p><strong>Seg - Sex:</strong> 6h às 23h</p>
                <p><strong>Sábado:</strong> 8h às 18h</p>
                <p><strong>Domingo:</strong> Fechado</p>
                <p className="text-yellow-600 font-bold mt-4">⏰ 24h em breve!</p>
              </div>
            </div>

            {/* Contato */}
            <div className="text-center">
              <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Contato</h3>
              <p className="text-gray-600 mb-4">
                <a href="tel:+5598984851852" className="text-yellow-600 font-bold hover:underline">
                  (98) 98485-1852
                </a>
              </p>
              <p className="text-gray-600 mb-6">
                Fale conosco e conheça nossas promoções especiais!
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold w-full">
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORMULÁRIO DE CONTATO ===== */}
      <section id="contato" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-5xl font-bold mb-4 text-center">Comece Sua Transformação</h2>
          <p className="text-center text-gray-300 mb-12">
            Preencha o formulário abaixo e entraremos em contato com você em breve!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Nome Completo</label>
              <input
                type="text"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">Telefone</label>
                <input
                  type="tel"
                  required
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="(98) 98485-1852"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500 text-lg py-6 font-bold"
            >
              {submitted ? "✓ Mensagem Enviada!" : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black text-sm">
                  DF
                </div>
                <span className="font-bold text-white">Academia David Falcão</span>
              </div>
              <p className="text-sm">Transformando vidas através do fitness desde 2010.</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#servicos" className="hover:text-yellow-400 transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#diferenciais" className="hover:text-yellow-400 transition-colors">
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-yellow-400 transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Academia David Falcão. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
