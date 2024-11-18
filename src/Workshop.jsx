import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFemale, FaLaptopCode, FaNetworkWired, FaMoneyBillWave, FaChalkboardTeacher, FaChartLine, FaArrowLeft, FaArrowRight, FaGithub, FaLinkedin, FaInstagram, FaQuestionCircle, FaArrowDown } from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';
import {useSwipeable} from 'react-swipeable'
import confetti from 'canvas-confetti';
import './App/App.css'
const sections = [
  { id: 'intro', title: 'Começando pelo Porquê', icon: <FaFemale /> },
  { id: 'identity', title: 'Entenda Quem Você É', icon: <FaChalkboardTeacher /> },
  { id: 'tools', title: 'Use as Ferramentas Certas', icon: <FaLaptopCode /> },
  { id: 'networking', title: 'Networking', icon: <FaNetworkWired /> },
  { id: 'money', title: 'Dinheiro', icon: <FaMoneyBillWave /> },
  { id: 'faq', title: 'Dúvidas Frequentes', icon: <FaQuestionCircle /> },
  { id: 'conclusion', title: 'Encerramento Prático', icon: <MdTimeline /> },
];



const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let timer = setInterval(() => {
      start += 1;
      setDisplayValue(start);
      if (start === end) clearInterval(timer);
    }, 50);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue}</span>;
};

const AdPlaceholder = () => (
  <div className=" mt-6 bg-white/10 backdrop-blur-md p-4 rounded-lg text-center text-white mb-4">
    <p>Advertisement Space</p>
  </div>
);

const StatCard = ({ title, value, icon }) => (
  <motion.div 
    className="bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-6 flex items-center space-x-4"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="text-4xl text-white">
      {icon}
    </div>
    <div>
      <p className="text-gray-200">{title}</p>
      <p className="text-2xl font-bold text-white"><AnimatedNumber value={value} /></p>
    </div>
  </motion.div>
);

const triggerFireworks = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { 
      particleCount, 
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
    }));
    confetti(Object.assign({}, defaults, { 
      particleCount, 
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
    }));
  }, 250);
};

// const WorkshopCover = ({ onStart }) => (
//   <motion.div 
//     className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-pink-600 text-white"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//   >
//     <motion.h1 
//       className="text-3xl font-bold mb-6 text-center"
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.2 }}
//     >
//       Empreendedorismo Feminino na Programação
//     </motion.h1>
//     <motion.p 
//       className="text-2xl mb-12 text-center"
//       initial={{ y: -30, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.4 }}
//     >
//       Um workshop para inspirar e capacitar
//     </motion.p>
//     <motion.button
//       className="bg-white text-purple-600 px-8 py-3 rounded-full text-xl font-semibold hover:bg-purple-100 transition duration-300"
//       onClick={onStart}
//       initial={{ y: 30, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.6 }}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       Começar Workshop
//     </motion.button>
//   </motion.div>
// );

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('backend');
  const [activeQuestion, setActiveQuestion] = useState(null);

   const faqData = {
    "backend": [
      {
        "question": "Quanto cobrar para criar uma API no back-end?",
        "answer": "Avalie o número de endpoints, a necessidade de segurança, banco de dados e documentação. O preço médio pode variar de R$ 2.000 a R$ 10.000."
      },
      {
        "question": "Quanto cobrar por manutenção de sistemas?",
        "answer": "Ofereça planos mensais, baseados no número de horas estimadas. Exemplo: 10 horas/mês por R$ 2.000."
      },
      {
        "question": "Como precificar integração de um sistema com um software externo?",
        "answer": "Avalie a API do software externo, a necessidade de customização e o tempo estimado. Valores variam entre R$ 3.000 e R$ 15.000."
      },
      {
        "question": "Quanto cobrar para criar um painel administrativo completo?",
        "answer": "Dependendo das funcionalidades, preços podem variar entre R$ 5.000 a R$ 25.000."
      },
      {
        "question": "Como precificar testes automatizados em um sistema?",
        "answer": "Cobrar de acordo com o número de casos de teste, algo entre R$ 3.000 e R$ 15.000."
      },
      {
        "question": "Quanto cobrar por migração de dados entre sistemas?",
        "answer": "Avalie o volume de dados e complexidade. Preços de R$ 2.000 a R$ 20.000."
      },
      {
        "question": "Quanto cobrar por integrações em tempo real?",
        "answer": "De R$ 5.000 a R$ 15.000, dependendo do tipo de dado e segurança necessária."
      },
      {
        "question": "Como calcular o custo de desenvolvimento de uma API RESTful?",
        "answer": "O custo depende da quantidade de endpoints, complexidade dos dados, segurança e necessidade de documentação. Pode variar entre R$ 2.000 e R$ 10.000."
      },
      {
        "question": "Quanto cobrar para criar uma API GraphQL?",
        "answer": "Considerando a configuração, consulta de dados e integração com sistemas existentes, os preços podem variar entre R$ 3.000 a R$ 12.000."
      },
      {
        "question": "Como precificar um serviço de autenticação com OAuth 2.0?",
        "answer": "Depende da complexidade do sistema e integração necessária, variando entre R$ 2.000 e R$ 6.000."
      },
      {
        "question": "Quanto cobrar por um serviço de backend com microserviços?",
        "answer": "Para uma arquitetura de microserviços simples, os preços podem variar de R$ 8.000 a R$ 30.000."
      },
      {
        "question": "Quanto custa implementar escalabilidade em um sistema?",
        "answer": "O custo pode variar entre R$ 5.000 a R$ 20.000, dependendo da infraestrutura necessária."
      },
      {
        "question": "Qual o preço médio para desenvolver uma arquitetura de backend em nuvem?",
        "answer": "O valor pode variar de R$ 5.000 a R$ 25.000, dependendo da escolha da nuvem e da configuração."
      },
      {
        "question": "Quanto cobrar para implementar autenticação por JWT?",
        "answer": "Este serviço pode custar entre R$ 1.500 e R$ 5.000, dependendo da complexidade do sistema."
      },
      {
        "question": "Quanto cobrar para realizar integração com sistemas de pagamento (ex: PayPal)?",
        "answer": "A integração pode variar entre R$ 2.000 e R$ 10.000, dependendo da complexidade e segurança."
      },
      {
        "question": "Como precificar um serviço de armazenamento em nuvem (AWS, GCP, Azure)?",
        "answer": "Considerando a quantidade de dados e a configuração de segurança, o preço pode variar entre R$ 3.000 e R$ 15.000."
      },
      {
        "question": "Quanto cobrar por serviços de configuração e manutenção de servidores?",
        "answer": "A cobrança pode ser de R$ 1.500 a R$ 7.000 mensais, dependendo do porte do servidor e do suporte requerido."
      },
      {
        "question": "Qual o custo para realizar uma análise de performance e otimização de um backend?",
        "answer": "O preço médio fica entre R$ 2.000 e R$ 10.000, dependendo da análise detalhada do sistema."
      },
      {
        "question": "Quanto custa implementar segurança de dados com criptografia no backend?",
        "answer": "A implementação de criptografia pode variar entre R$ 3.000 e R$ 15.000, dependendo da sensibilidade dos dados."
      },
      {
        "question": "Quanto cobrar por realizar o deploy de um sistema em servidores dedicados?",
        "answer": "A cobrança pode variar de R$ 2.000 a R$ 10.000, dependendo da complexidade do deploy."
      },
      {
        "question": "Qual o preço médio para implementar uma solução de backup no backend?",
        "answer": "O custo para implementar soluções de backup vai de R$ 2.000 a R$ 8.000."
      },
      {
        "question": "Quanto custa para desenvolver uma API que utilize WebSockets?",
        "answer": "O custo pode variar de R$ 3.000 a R$ 12.000, dependendo da complexidade do fluxo de dados."
      },
      {
        "question": "Quanto cobrar para configurar um banco de dados NoSQL?",
        "answer": "Para um banco de dados NoSQL, os preços podem variar de R$ 2.000 a R$ 7.000, dependendo da configuração e volume de dados."
      },
      {
        "question": "Como precificar o desenvolvimento de uma arquitetura de filas de mensagens?",
        "answer": "Este serviço pode variar de R$ 3.000 a R$ 15.000, dependendo da integração e complexidade."
      },
      {
        "question": "Quanto custa implementar soluções de cache em uma aplicação backend?",
        "answer": "A implementação de cache pode variar entre R$ 2.000 a R$ 10.000, dependendo do tipo de cache utilizado."
      },
      {
        "question": "Quanto cobrar para realizar a integração de um sistema com serviços de terceiros?",
        "answer": "O preço pode variar entre R$ 2.000 a R$ 10.000, dependendo da integração necessária."
      },
      {
        "question": "Quanto cobrar por um serviço de análise e geração de logs em um sistema?",
        "answer": "O valor médio para implementação de logs pode variar de R$ 2.000 a R$ 7.000."
      },
      {
        "question": "Quanto custa configurar uma API com rate limiting?",
        "answer": "O custo pode variar entre R$ 1.500 a R$ 5.000, dependendo da necessidade de controle de tráfego."
      },
      {
        "question": "Como calcular o preço de um serviço de envio de emails automatizado?",
        "answer": "Considerando a quantidade de emails e a integração necessária, o valor pode variar entre R$ 2.000 e R$ 8.000."
      }
    ],
    "frontend": [
      {
        "question": "Quanto cobrar por um serviço que inclua consumo de API no front?",
        "answer": "Considere o tempo necessário para integrar a API, o nível de complexidade, e se há necessidade de autenticação. Valores podem variar entre R$ 500 a R$ 5.000, dependendo do projeto."
      },
      {
        "question": "Devo cobrar por hora ou projeto em desenvolvimento front-end?",
        "answer": "Para tarefas longas e complexas, projeto é melhor. Para ajustes rápidos, use a cobrança por hora. Em front-end, projetos como landing pages podem ser cobrados por projeto, enquanto manutenções podem ser por hora."
      },
      {
        "question": "Como precificar o desenvolvimento de interfaces responsivas?",
        "answer": "Considere a complexidade do design, número de breakpoints e dispositivos a serem suportados. Um site responsivo simples pode custar de R$ 2.000 a R$ 5.000, enquanto projetos mais complexos podem chegar a R$ 10.000 ou mais."
      },
      {
        "question": "Quanto cobrar por otimização de um site para SEO técnico?",
        "answer": "Considere o tamanho do site e a complexidade das correções. Cobranças médias vão de R$ 1.500 a R$ 7.000."
      },
      {
        "question": "Devo cobrar mais por tempo extra de suporte?",
        "answer": "Sim. Inclua um valor fixo por hora adicional, como R$ 150 a R$ 300/hora."
      },
      {
        "question": "Como incluir despesas de ferramentas no orçamento?",
        "answer": "Adicione ao custo final e detalhe no contrato (por exemplo: licenças ou servidores)."
      },
      {
        "question": "Quanto cobrar para criar um chatbot funcional?",
        "answer": "Simples: R$ 2.000 a R$ 8.000. Com inteligência artificial: R$ 10.000+."
      },
      {
        "question": "Devo oferecer garantia ao entregar o projeto?",
        "answer": "Sim. Inclua uma garantia de 30 a 90 dias, para ajustes menores."
      },
      {
        "question": "Como precificar a personalização de um tema WordPress?",
        "answer": "A personalização de tema simples pode variar entre R$ 1.500 a R$ 5.000."
      },
      {
        "question": "Quanto cobrar por um site com integração com e-commerce?",
        "answer": "Sites de e-commerce podem variar de R$ 5.000 a R$ 30.000, dependendo da plataforma escolhida e da customização."
      },
      {
        "question": "Quanto cobrar para implementar animações complexas no site?",
        "answer": "A implementação de animações pode custar entre R$ 3.000 a R$ 10.000, dependendo da complexidade e interatividade."
      }
    ],
    "marketing": [
      {
        "question": "Quanto cobrar como Social Media?",
        "answer": "Depende do pacote. Gerenciamento básico pode variar de R$ 1.000 a R$ 3.000/mês."
      },
      {
        "question": "Quanto vale um plano de marketing estratégico?",
        "answer": "Entre R$ 2.500 e R$ 10.000, dependendo da complexidade e entrega."
      },
      {
        "question": "Como precificar campanhas pagas (ads)?",
        "answer": "Some o custo da gestão (R$ 1.500+) ao investimento em mídia."
      },
      {
        "question": "Devo cobrar por desempenho ou serviço fixo?",
        "answer": "Ofereça uma base fixa com bônus por desempenho para campanhas de conversão."
      },
      {
        "question": "Como calcular preço para criação de conteúdo?",
        "answer": "Considere pesquisa, produção e edição. Preços médios: R$ 100 a R$ 300/postagem."
      },
      {
        "question": "Como precificar um planejamento de mídia?",
        "answer": "Cobrar por escopo: R$ 1.500 a R$ 8.000."
      },
      {
        "question": "Quanto vale o serviço de otimização de perfil no Instagram?",
        "answer": "Cobrança única entre R$ 800 a R$ 3.000."
      },
      {
        "question": "Como cobrar por posts patrocinados para clientes?",
        "answer": "Gerenciamento: R$ 1.000+. Taxas devem cobrir sua expertise + anúncios."
      },
      {
        "question": "Quanto cobrar para criação de persona de marketing?",
        "answer": "Valores de R$ 1.500 a R$ 5.000."
      },
      {
        "question": "Quanto vale uma pesquisa de concorrência?",
        "answer": "R$ 2.000 a R$ 8.000, dependendo da complexidade."
      },
      {
        "question": "Quanto cobrar para gerenciamento de redes sociais?",
        "answer": "O valor depende da quantidade de plataformas e da frequência de postagens, variando entre R$ 1.000 e R$ 3.000 por mês."
      },
      {
        "question": "Quanto cobrar por um plano de marketing digital completo?",
        "answer": "Um plano estratégico pode variar entre R$ 2.500 a R$ 10.000."
      },
      {
        "question": "Quanto cobrar para criar campanhas pagas no Google ou Facebook?",
        "answer": "A cobrança pode incluir uma taxa fixa de R$ 1.500+ e o valor investido em mídia, geralmente com base no orçamento do cliente."
      },
      {
        "question": "Quanto cobrar pela criação de conteúdo para redes sociais?",
        "answer": "Para criação de conteúdo simples, o valor pode variar entre R$ 100 e R$ 300 por postagem."
      },
      {
        "question": "Quanto cobrar por um gerenciamento de tráfego pago?",
        "answer": "Gerenciamento de tráfego pago pode ser cobrado de R$ 1.000 a R$ 5.000 mensais, dependendo do orçamento do cliente."
      },
      {
        "question": "Quanto cobrar para criar uma campanha de email marketing?",
        "answer": "O preço de uma campanha de email marketing pode variar entre R$ 500 a R$ 2.500, dependendo da quantidade de emails."
      },
      {
        "question": "Quanto cobrar por análise de dados e relatórios de performance?",
        "answer": "Análises de dados podem variar entre R$ 1.000 a R$ 7.000 por projeto, dependendo da complexidade."
      },
      {
        "question": "Qual é o valor de um serviço de SEO para e-commerce?",
        "answer": "O preço para otimização de SEO de um e-commerce pode variar entre R$ 3.000 a R$ 15.000."
      },
      {
        "question": "Quanto cobrar por produção de vídeos publicitários?",
        "answer": "A produção de vídeos publicitários pode custar entre R$ 2.000 a R$ 10.000, dependendo do formato e duração."
      },
      {
        "question": "Quanto cobrar para criar campanhas de influenciadores?",
        "answer": "O valor pode variar bastante, de R$ 500 a R$ 5.000, dependendo do alcance do influenciador."
      }
    ],
    "design": [
      {
        "question": "Quanto vale uma prototipagem simples?",
        "answer": "De R$ 500 a R$ 2.000, dependendo da complexidade."
      },
      {
        "question": "Como cobrar por um logotipo?",
        "answer": "Entre R$ 500 e R$ 5.000, dependendo da experiência e pesquisa."
      },
      {
        "question": "Devo cobrar pela revisão do design?",
        "answer": "Inclua 2 revisões no preço base; adicionais podem custar R$ 200/revisão."
      },
      {
        "question": "Quanto cobrar por um projeto completo de UI/UX?",
        "answer": "Valores começam em R$ 5.000 e podem ultrapassar R$ 20.000 para sistemas maiores."
      },
      {
        "question": "Quanto cobrar por materiais gráficos para redes sociais?",
        "answer": "De R$ 50 a R$ 150 por peça em pacotes."
      },
      {
        "question": "Quanto cobrar por ilustrações personalizadas?",
        "answer": "Baseie-se no tempo de trabalho. Ilustrações simples: R$ 500+, complexas: R$ 3.000+."
      },
      {
        "question": "Quanto vale um carrossel no Instagram?",
        "answer": "Cobrança por carrossel: R$ 300 a R$ 1.500."
      },
      {
        "question": "Como precificar identidade visual completa?",
        "answer": "R$ 5.000 a R$ 20.000, incluindo logotipo, cores e tipografia."
      },
      {
        "question": "Quanto cobrar por um vídeo animado curto?",
        "answer": "De R$ 1.000 a R$ 8.000, dependendo da duração e complexidade."
      },
      {
        "question": "Devo cobrar por entregas em formato editável?",
        "answer": "Sim, com uma taxa adicional de R$ 500 a R$ 2.000."
      },
      {
        "question": "Como escolher a paleta de cores para um site?",
        "answer": "Escolha cores que transmitam a mensagem da marca, levando em consideração o público-alvo e a psicologia das cores. Use uma combinação de cores primárias, secundárias e neutras para garantir equilíbrio e harmonia."
      },
      {
        "question": "Como definir tipografia para um projeto web?",
        "answer": "Escolha fontes legíveis e adequadas ao tom da marca. Use uma combinação de fontes para hierarquia (por exemplo, uma fonte para títulos e outra para corpo de texto). Considere também a legibilidade em diferentes dispositivos."
      },
      {
        "question": "Como fazer um design responsivo?",
        "answer": "Utilize técnicas como media queries para ajustar o layout conforme o tamanho da tela. Use unidades relativas (como %, vw, vh) para garantir flexibilidade no design. Teste em múltiplos dispositivos para garantir consistência."
      },
      {
        "question": "Quais são as principais tendências de design para 2024?",
        "answer": "Tendências incluem design minimalista, uso de gradientes e cores vibrantes, tipografia em negrito, animações suaves, e foco na experiência do usuário (UX) otimizada para dispositivos móveis."
      },
      {
        "question": "O que é design de interface (UI)?",
        "answer": "Design de interface é o processo de criar interfaces em software, focando na experiência do usuário, incluindo elementos como botões, menus e layouts que permitem a interação eficaz e intuitiva."
      },
      {
        "question": "O que é design de experiência do usuário (UX)?",
        "answer": "Design UX é o processo de criar produtos que oferecem uma experiência significativa e satisfatória ao usuário, levando em conta facilidade de uso, acessibilidade e a jornada do usuário com o produto."
      },
      {
        "question": "Como escolher o formato ideal para ícones em um site?",
        "answer": "Escolha ícones vetoriais (SVG) para garantir qualidade em qualquer tamanho e boa performance. Certifique-se de que eles sejam simples, representem claramente a ação ou conteúdo e estejam alinhados ao estilo do site."
      },
      {
        "question": "Como utilizar o design flat em projetos web?",
        "answer": "O design flat foca em simplicidade e clareza. Use cores sólidas, tipografia limpa, e evite sombras e gradientes. Foque em elementos gráficos simples e em um layout claro e funcional."
      },
      {
        "question": "Como criar uma boa hierarquia visual em um site?",
        "answer": "Use variações de tamanho, peso e cor das fontes para destacar elementos importantes. Organize o conteúdo de forma que o usuário perceba facilmente a ordem de leitura e as ações que deve tomar."
      },
      {
        "question": "Quais são as melhores práticas para design de landing pages?",
        "answer": "Mantenha a página simples e direta ao ponto, com um título chamativo, uma proposta de valor clara, e uma chamada para ação (CTA) visível. Use imagens de alta qualidade e garanta que o formulário seja fácil de preencher."
      },
      {
        "question": "O que é design de interação?",
        "answer": "Design de interação envolve a criação de interfaces que facilitam a interação do usuário com o sistema. Foca na estrutura e comportamento das interações, como cliques, toques e arrastes."
      },
      {
        "question": "Como otimizar um site para velocidade sem comprometer o design?",
        "answer": "Use imagens otimizadas, minifique o código CSS e JavaScript, e implemente carregamento preguiçoso para recursos como imagens e vídeos. Certifique-se de que o design seja leve e não sobrecarregue o carregamento da página."
      },
      {
        "question": "Qual a diferença entre UX e UI?",
        "answer": "UX (experiência do usuário) foca na jornada do usuário com o produto, enquanto UI (interface do usuário) se concentra na parte visual e na interação da interface. Ambos trabalham juntos para garantir uma experiência agradável e intuitiva."
      },
      {
        "question": "Como realizar testes de usabilidade no design de um site?",
        "answer": "Conduza testes com usuários reais para avaliar a facilidade de navegação e identificação de problemas. Use ferramentas como gravações de tela, questionários e entrevistas para obter feedback."
      },
      {
        "question": "Como utilizar microinterações no design?",
        "answer": "Microinterações são pequenas animações ou mudanças visuais que ajudam a guiar o usuário e tornam a experiência mais agradável. Exemplos incluem animações em botões, transições de páginas e notificações de status."
      },
      {
        "question": "Como aplicar o design emocional no projeto?",
        "answer": "Crie uma conexão emocional com o usuário através de cores, tipografia e imagens que transmitam os valores da marca. Considere o impacto emocional das escolhas visuais para envolver o usuário e melhorar a experiência."
      },
      {
        "question": "O que é o design de movimento e como utilizá-lo?",
        "answer": "O design de movimento usa animações e transições para guiar o usuário e proporcionar uma experiência mais envolvente. Use animações suaves e subtis para não distrair, mas sim para reforçar a navegação."
      },
      {
        "question": "Qual a importância da acessibilidade no design?",
        "answer": "Acessibilidade garante que todos, incluindo pessoas com deficiências, possam usar o site. Isso inclui usar contraste de cores adequado, fontes legíveis, e garantir que o site seja navegável por teclado ou leitores de tela."
      },
      {
        "question": "Como criar protótipos no design de um site?",
        "answer": "Use ferramentas como Figma, Sketch ou Adobe XD para criar protótipos interativos. Eles permitem testar o fluxo de navegação e as interações antes da implementação final do design."
      },
      {
        "question": "Quais são as melhores práticas para design de botões?",
        "answer": "Os botões devem ser visíveis, com contraste suficiente para se destacar do fundo. Use texto claro e direto, e defina uma área de clique generosa. Também, inclua estados visuais como hover e active para indicar interatividade."
      },
      {
        "question": "Como criar uma boa estrutura de navegação no site?",
        "answer": "Organize o conteúdo de forma lógica e clara. Use menus de navegação simples, com categorias e subcategorias bem definidas. Mantenha a navegação consistente em todas as páginas do site."
      },
      {
        "question": "Qual é o papel do design no aumento da conversão de um site?",
        "answer": "O design impacta diretamente na experiência do usuário, influenciando a facilidade de navegação, confiança na marca e a clareza das chamadas para ação (CTAs), o que pode aumentar as taxas de conversão."
      },
      {
        "question": "Como usar imagens no design de forma eficaz?",
        "answer": "Escolha imagens que sejam relevantes para o conteúdo e que reforcem a mensagem da marca. Certifique-se de que as imagens tenham boa qualidade e estejam otimizadas para não prejudicar o tempo de carregamento do site."
      },
      {
        "question": "O que é design inclusivo?",
        "answer": "Design inclusivo é criar produtos acessíveis a todos, independentemente de idade, habilidades ou deficiências. Isso inclui garantir que o conteúdo seja legível e o design fácil de usar por qualquer pessoa."
      },
      {
        "question": "Como aplicar o design emocional em interfaces?",
        "answer": "Use cores e tipografia que criem uma conexão emocional com o usuário. Imagens autênticas, histórias visuais e um tom amigável podem gerar empatia e aumentar a satisfação do usuário."
      },
      {
        "question": "Qual a importância de escolher as cores corretamente no design?",
        "answer": "As cores têm um grande impacto psicológico. Escolher as cores certas pode transmitir emoções, influenciar o comportamento e melhorar a legibilidade, além de reforçar a identidade da marca."
      },
      {
        "question": "Como realizar o design de um site para e-commerce?",
        "answer": "Crie um design limpo e funcional, com fácil navegação, imagens de produtos de alta qualidade e um processo de compra simplificado. O design deve aumentar a confiança do usuário e facilitar a conversão."
      },
      {
        "question": "O que é design modular?",
        "answer": "O design modular usa componentes reutilizáveis e consistentes, facilitando a criação de layouts e garantindo flexibilidade. Isso é útil em sites com grande quantidade de conteúdo ou diversas páginas."
      },
      {
        "question": "Como fazer o design de um blog de maneira atraente?",
        "answer": "Crie um layout limpo e organizado, com tipografia legível e imagens chamativas. Ofereça uma boa experiência de leitura e navegação, além de manter os CTAs visíveis para engajar o usuário."
      },
      {
        "question": "O que é design semântico?",
        "answer": "Design semântico significa criar interfaces que não apenas tenham boa aparência, mas também façam sentido funcionalmente para o usuário, com uma estrutura intuitiva e fácil de entender."
      },
      {
        "question": "Como implementar um design de site com animações?",
        "answer": "Utilize animações suaves que melhorem a experiência do usuário, como transições de páginas, animações de rolagem e feedbacks visuais em botões. Não exagere, pois o excesso pode distrair ou tornar o site pesado."
      },
      {
        "question": "Como garantir que o design de um site seja escalável?",
        "answer": "Use grids flexíveis, design responsivo e componentes reutilizáveis. Planeje o layout para que ele se ajuste a diferentes tamanhos de tela e dispositivos sem perder a integridade visual ou funcional."
      },
      {
        "question": "Como criar um design eficaz para um portfólio online?",
        "answer": "O design do portfólio deve ser simples e direto, destacando os melhores trabalhos com imagens de alta qualidade e informações claras. Use uma navegação intuitiva e adicione CTAs para engajamento."
      },
      {
        "question": "Quais são as melhores práticas para design de formulários?",
        "answer": "Mantenha os formulários simples e curtos, com campos claros e instruções visíveis. Utilize feedback visual (como mensagens de erro) e torne o processo de preenchimento o mais simples possível."
      },
      {
        "question": "Como criar uma landing page de alta conversão?",
        "answer": "Mantenha o design simples e objetivo, com uma proposta de valor clara e um CTA destacado. Adicione provas sociais como depoimentos ou dados de resultados para gerar confiança."
      },
      {
        "question": "Como usar o design de sombras de maneira eficaz?",
        "answer": "Use sombras para dar profundidade e destacar elementos importantes, como botões e cards. Mantenha as sombras suaves e sutis para não sobrecarregar o design."
      },
      {
        "question": "Como criar um design coeso para um site com várias páginas?",
        "answer": "Garanta consistência no uso de cores, tipografia e layout. Utilize grids e componentes reutilizáveis para manter a uniformidade entre as diferentes páginas."
      },
      {
        "question": "Como otimizar o design de um site para SEO?",
        "answer": "Otimize imagens, use uma estrutura de URL amigável e implemente boa hierarquia de cabeçalhos. Além disso, foque em velocidade de carregamento e design responsivo."
      },
      {
        "question": "Como utilizar animações em SVG no design de um site?",
        "answer": "Animações em SVG são leves e escaláveis. Use ferramentas como CSS ou JavaScript para animar SVGs de forma suave, como em ícones ou gráficos, para melhorar a interatividade sem prejudicar a performance."
      },
      {
        "question": "Quais são as melhores práticas para o design de um site de notícias?",
        "answer": "Mantenha a navegação simples e clara, com uma hierarquia de informações bem definida. Use fontes legíveis e organize o conteúdo para que as matérias mais importantes sejam destacadas."
      },
      {
        "question": "Como criar uma identidade visual para uma marca?",
        "answer": "A identidade visual deve refletir os valores e missão da marca. Crie um logo único, defina uma paleta de cores, escolha tipografias que complementem a personalidade da marca e garanta consistência em todos os materiais."
      }
    ]
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(faqData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category
                ? 'bg-white text-purple-600'
                : 'bg-purple-200 text-purple-800'
            } transition-colors duration-200`}
          >
            {category === 'backend' ? 'Back-end' :
             category === 'frontend' ? 'Front-end' :
             category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {faqData[activeCategory].map((item, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ backgroundColor: activeQuestion === index ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)' }}
            className="p-4 rounded-lg cursor-pointer"
            onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <motion.div
                animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaArrowDown />
              </motion.div>
            </div>
            <AnimatePresence>
              {activeQuestion === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-200"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const WorkshopAvancado = () => {
  const [activeSection, setActiveSection] = useState(0);
  // const [showCover, setShowCover] = useState(true);


  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeSection < sections.length - 1) {
        setActiveSection(activeSection + 1);
      }
    },
    onSwipedRight: () => {
      if (activeSection > 0) {
        setActiveSection(activeSection - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  useEffect(() => {
    if (activeSection === sections.length - 1) {
      triggerFireworks();
    }
  }, [activeSection]);

  // if (showCover) {
  //   return <WorkshopCover onStart={() => setShowCover(false)} />;
  // }

  return (
<div {...swipeHandlers} className="bg-gradient-to-br from-purple-600 to-pink-600 min-h-screen overflow-hidden text-white">
        <header className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md shadow-md z-50">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-between items-center">
            {sections.map((section, index) => (
              <li key={section.id}>
                <motion.button
                  onClick={() => setActiveSection(index)}
                  className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-300 ${
                    activeSection === index ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`text-2xl ${activeSection === index ? 'text-white' : 'text-gray-300'}`}
                  >
                    {section.icon}
                  </div>
                  <span className="text-xs mt-1 text-white">{section.title}</span>
                </motion.button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="w-full bg-white/10 h-1">
        <div
          className="bg-white h-1 transition-all duration-300 ease-out"
          style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
        ></div>
      </div>
      <style jsx global>{`
        /* Estilização da barra de rolagem */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
       
      
      <main  className="pt-10 h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">{sections[activeSection].title}</h2>
            
            {activeSection === 0 && (
              <>
                <h3 className="text-1xl font-semibold mb-4 text-white">Por que o empreendedorismo feminino importa?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <StatCard title="Profissionais de TI Mulheres" value="20" icon={<FaFemale />} />
                  <StatCard title="Aumento na Inovação" value="35" icon={<FaChartLine />} />
                  <StatCard title="Impacto Social" value="80" icon={<FaNetworkWired />} />
                </div>
                <p className="text-lg mb-4 text-gray-200">Empreender é criar um futuro que representa quem somos.</p>
                <motion.div 
                  className="bg-white/20 backdrop-blur-md p-4 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h4 className="font-bold text-white">Exemplo inspirador:</h4>
                  <p className="text-gray-200">Reshma Saujani (fundadora da Girls Who Code)</p>
                </motion.div>
                <AdPlaceholder />
              </>
            )}

            {activeSection === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Descubra seu propósito:</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-200">
                      <li>O que te move?</li>
                      <li>Resolver um problema?</li>
                      <li>Ensinar?</li>
                      <li>Criar algo novo?</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Qual nicho combina com você?</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-200">
                      <li>Desenvolvimento Web</li>
                      <li>Apps para impacto social</li>
                      <li>Educação e tecnologia</li>
                    </ul>
                  </div>
                </div>
                <motion.div 
                  className="bg-white/20 backdrop-blur-md p-4 rounded-lg mt-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <p className="font-bold text-white">Dica: Use o Canvas de Modelo de Negócios para estruturar suas ideias!</p>
                </motion.div>
                <AdPlaceholder/>
              </>
            )}

            {activeSection === 2 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Presença online:</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-200">
                      <li>GitHub: Mostre projetos reais</li>
                      <li>LinkedIn: Conecte-se com pessoas da área</li>
                      <li>Instagram: Compartilhe sua jornada</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Ferramentas gratuitas:</h3>
                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-200">
                      <li>Notion: Planeje sua ideia</li>
                      <li>Canva: Crie designs incríveis</li>
                      <li>Figma: Desenhe protótipos</li>
                    </ul>
                  </div>
                </div>
                <motion.div 
                  className="bg-white/20 backdrop-blur-md p-4 rounded-lg mt-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h4 className="font-bold text-white">Minhas Redes Sociais:</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/Nathalia-Macedo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/nathalia-de-macedo-martins-4aa693253" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/nath_dev_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                      <FaInstagram size={24} />
                    </a>
                  </div>
                 
                </motion.div>
                <AdPlaceholder/>
              </>
            )}

            {activeSection === 3 && (
              <>
                <h3 className="text-xl font-semibold mb-4 text-white">Por que o networking é importante?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <motion.div 
                    className="bg-white/20 backdrop-blur-md p-4 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-white">Você não precisa fazer tudo sozinha.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white/20 backdrop-blur-md p-4 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <p className="text-white">Parcerias e mentores aceleram o sucesso.</p>
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Como começar?</h3>
                <p className="mb-2 text-gray-200">Participe de comunidades:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 text-gray-200">
                  <li>Reprograma</li>
                  <li>Mulheres na Computação</li>
                  <li>PyLadies</li>
                </ul>
                <AdPlaceholder/>
              </>
            )}

            {activeSection === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Precificação por Hora</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-white">Dicas para precificar:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-200 text-sm">
                        <li>Pesquise o mercado</li>
                        <li>Considere sua experiência</li>
                        <li>Calcule seus custos</li>
                        <li>Defina seu valor hora</li>
                        <li>Seja flexível, mas valorize-se</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-white">Exemplos de preços/hora:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-200 text-sm">
                        <li>Back-end: R$80-150</li>
                        <li>Front-end: R$70-130</li>
                        <li>Design: R$60-120</li>
                        <li>UX/UI: R$70-140</li>
                      </ul>
                      <p className="text-xs text-gray-300 mt-1">Valores variam conforme região e experiência</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Precificação por Projeto</h3>
                  <div className="space-y-2 text-gray-200">
                    <p>Para projetos maiores, considere cobrar por projeto em vez de por hora. Alguns exemplos:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Site institucional simples: R$1.500 - R$5.000</li>
                      <li>E-commerce básico: R$5.000 - R$15.000</li>
                      <li>Aplicativo móvel simples: R$10.000 - R$30.000</li>
                      <li>Sistema de gerenciamento personalizado: R$20.000 - R$50.000+</li>
                    </ul>
                    <p className="text-xs mt-2">Lembre-se: esses valores são apenas referências e podem variar significativamente com base na complexidade do projeto e sua experiência.</p>
                  </div>
                </div>
                <motion.div 
                  className="bg-white/20 backdrop-blur-md p-4 rounded-lg mt-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h4 className="font-bold text-white mb-2">Dica importante:</h4>
                  <p className="text-gray-200">Sempre faça um contrato claro, especificando o escopo do trabalho, prazos e condições de pagamento. Isso protege você e seu cliente!</p>
                </motion.div>
                <AdPlaceholder/>
              </div>
            )}

            {activeSection === 5 && (
              <FAQSection />
            )}

            {activeSection === 6 && (
              <>
              <h3 className="text-2xl font-semibold mb-4 text-white">Próximos passos</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2 text-white">O que é um MVP (Produto Mínimo Viável)?</h4>
                <p className="text-gray-200 mb-4">
                  Um MVP é a versão mais simples do seu produto que ainda entrega valor ao cliente. 
                  É uma estratégia para testar sua ideia no mercado com o mínimo de recursos e tempo.
                </p>
                
                <h4 className="text-xl font-semibold mb-2 text-white">Como definir seu MVP:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-200 mb-4">
                  <li>Identifique o problema principal que seu produto resolve</li>
                  <li>Liste todas as funcionalidades que você imagina para o produto final</li>
                  <li>Priorize essas funcionalidades, mantendo apenas as essenciais</li>
                  <li>Defina os critérios mínimos de sucesso para seu MVP</li>
                  <li>Crie um protótipo ou versão simplificada com essas funcionalidades essenciais</li>
                </ol>
              </div>
            
              <h4 className="text-xl font-semibold mb-2 text-white">Próximos passos após definir seu MVP:</h4>
              <ul className="list-disc list-inside mb-6 space-y-2 text-gray-200">
                <li>Crie um plano de ação com metas claras para desenvolver seu MVP</li>
                <li>Comece a construir sua presença online para atrair early adopters</li>
                <li>Participe de eventos e comunidades para obter feedback inicial</li>
                <li>Prepare-se para coletar e analisar dados do uso do seu MVP</li>
              </ul>
            
              <motion.div 
                className="bg-white/20 backdrop-blur-md p-4 rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h4 className="font-bold text-white mb-2">Lembre-se:</h4>
                <p className="text-gray-200">
                  Seu MVP não precisa ser perfeito. O objetivo é aprender rapidamente e iterar. 
                  Sua jornada é única, então celebre cada pequena vitória e aprenda com os desafios. 
                  Você está criando algo incrível!
                </p>
              </motion.div>
            </>
            )}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSection}
          className=" btn fixed left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:bg-white/30 transition duration-300"
          aria-label="Seção anterior"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSection}
          className=" btn fixed right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:bg-white/30 transition duration-300"
          aria-label="Próxima seção"
        >
          <FaArrowRight />
        </button>
      </main>
    </div>
  );
};

export default WorkshopAvancado;