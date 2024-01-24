import { NextApiRequest, NextApiResponse } from 'next'

const ingredientsHandler = (
  request: NextApiRequest,
  response: NextApiResponse,
) => {
  const ingredients = {
    massas: [
      {
        id: 1,
        price: 10.0,
        title: 'Nova-iorquina',
        image:
          'https://images.unsplash.com/photo-1616733414599-d683f1c78acd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmljZSUyMG9pJTIweW9yZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description:
          'Frequentemente vendida em fatias grandes e largas, a pizza ao estilo de Nova York tem uma massa mais grossa e é levemente crocante por fora. Dessa forma, são consumidas sem talheres. É bastante comum que as fatias sejam dobradas, facilitando o consumo por parte dos clientes. Normalmente são assadas em temperaturas mais baixas, em fornos a gás.',
      },
      {
        id: 2,
        price: 12.0,
        title: 'Siciliana',
        image:
          'https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        // 'https://images.unsplash.com/photo-1616733414599-d683f1c78acd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmljZSUyMG9pJTIweW9yZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description:
          'A pizza siciliana é conhecida por sua massa grossa em forma de retângulo, geralmente com mais de um centímetro de espessura. A saber, pode ser feita em qualquer formato de assadeira untada com azeite, o que a deixa bem crocante no fundo. Se você gosta da pizza tradicional da Sicília, a farinha de rosca fica por cima dos ingredientes. Além disso, ainda existe a opção de ralar um queijo para finalizar o perfil de sabor. Curiosidade: a pizza com massa estilo siciliana não usa muçarela porque o leite de vaca não está disponível na ilha.',
      },
      {
        id: 3,
        price: 14.0,
        title: 'Napolitana',
        image:
          'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description:
          'O modo napolitano de preparo é considerado um Patrimônio Cultural Imaterial da Humanidade pela Unesco. Acima de tudo, a massa napolitana deve atender a um conjunto muito específico. Seu sabor e textura únicos, precisam ser assados em um forno a lenha com cúpula. Além disso, a massa deve ser amassada à mão, com no máximo 35 centímetros de diâmetro e no máximo um terço de centímetro de espessura. Os estilos clássicos incluem a Margherita e a Marinara. E devido ao sabor e textura é a opção perfeita para quem quer saborear uma pizza italiana autêntica.',
      },
    ],
    tamanhos: [
      {
        id: 1,
        title: 'Grande',
        price: 15,
        image:
          'https://varandaspecialli.com.br/wp-content/uploads/2020/03/pizza-couve-flor.jpeg',
        description:
          'Pizza com 12 pedaços para quando chegar visita e sobrar ainda pro café da manhã.',
      },
      {
        id: 2,
        title: 'Normal',
        price: 12,
        image:
          'https://varandaspecialli.com.br/wp-content/uploads/2020/03/pizza-couve-flor.jpeg',
        description: 'Pizza com 8 pedaços ideal para uma família.',
      },
      {
        id: 3,
        price: 10,
        title: 'Pequena',
        image:
          'https://varandaspecialli.com.br/wp-content/uploads/2020/03/pizza-couve-flor.jpeg',
        description: 'Pizza com 6 pedaços ideal para poucas pessoas.',
      },
    ],
    recheios: [
      {
        id: 1,
        title: 'Frango & Catupiry',
        price: 8,
        image:
          'https://varandaspecialli.com.br/wp-content/uploads/2020/03/pizza-couve-flor.jpeg',
        description: 'Molho de tomate, Muçarela, Frango, Catupiry',
      },
      {
        id: 2,
        title: 'Calabresa',
        price: 10,
        image:
          'https://varandaspecialli.com.br/wp-content/uploads/2020/03/pizza-couve-flor.jpeg',
        description: 'Molho de tomate, Muçarela, Calabresa',
      },
      {
        id: 3,
        title: 'Escarola',
        price: 7,
        image:
          'https://varandaspecialli.com.br/wp-content/uploads/2020/03/pizza-couve-flor.jpeg',
        description: 'Molho de tomate, Muçarela Escarola Refogada, Azeitonas',
      },
    ],
  }

  return response.json(ingredients)
}

export default ingredientsHandler
