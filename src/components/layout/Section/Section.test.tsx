import { render, screen } from '@testing-library/react';
import Section from './index';

describe('Section', () => {
  it('renderiza o conteúdo passado como children', () => {
    render(
      <Section className="custom-section">
        <p>Conteúdo de teste</p>
      </Section>
    );

    expect(screen.getByText('Conteúdo de teste')).toBeInTheDocument();
  });

  it('usa a classe CSS correta', () => {
    const { container } = render(
      <Section className="bg-red-500">
        <span>Teste de classe</span>
      </Section>
    );

    expect(container.firstChild).toHaveClass('bg-red-500');
  });
});
