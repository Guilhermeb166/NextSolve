// src/app/proposal/page.jsx

// Importe o componente da seção que você acabou de criar.
// (Ajuste o caminho de importação se o seu sistema de alias (@/) for diferente)
import ProposalSection from '@/components/ProposalSection/ProposalSection'; 

// Esta é a função principal que o Next.js renderizará para a rota /proposal
export default function ProposalPage() {
  return (
    // <main> é um bom wrapper semântico
    <main>
      <ProposalSection />
    </main>
  );
}

// Opcional: Metadados para a página
export const metadata = {
  title: 'NextSolve | Apresentar Proposta',
  description: 'Envie sua proposta de desenvolvimento tecnológico para a equipe NextSolve.',
};