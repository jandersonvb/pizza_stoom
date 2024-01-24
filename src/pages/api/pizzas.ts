import { NextApiRequest, NextApiResponse } from 'next'

const getPizzas = (request: NextApiRequest, response: NextApiResponse) => {
  const pizzas = [
    {
      id: 1,
      price: 54,
      title: 'Frango com catupiry',
      ingredients: 'olho de tomate, Muçarela, Frango, Catupiry',
      dough: 'siciliana',
      points: 30,
      image:
        'https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphJTIwZnJhbmdvJTIwY29tJTIwY2F0dXBpcnl8ZW58MHx8MHx8fDA%3D',
      size: 'Pequena',
    },
    {
      id: 2,
      price: 45,
      title: 'Calabresa',
      ingredients: 'Molho de tomate, Muçarela, Calabresa',
      dough: 'nova-iorquina',
      points: 40,
      image:
        'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBjYWxhYnJlc2F8ZW58MHx8MHx8fDA%3D',
      size: 'Normal',
    },
    {
      id: 3,
      price: 70,
      tittle: 'Escarola',
      ingredients: 'Molho de tomate, Muçarela Escarola Refogada, Azeitonas',
      dough: 'napolitana',
      points: 50,
      image:
        'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emElMjBFc2Nhcm9sYXxlbnwwfHwwfHx8MA%3D%3D',
      size: 'Grande',
    },
  ]

  return response.json(pizzas)
}

export default getPizzas
