import { NextApiRequest, NextApiResponse } from 'next'

const getPizzas = (request: NextApiRequest, response: NextApiResponse) => {
  const pizzas = [
    {
      id: 1,
      price: 54,
      tittle: 'Frango com catupiry',
      ingredients: 'olho de tomate, Muçarela, Frango, Catupiry',
      dough: 'siciliana',
      points: 30,
      img: 'http://www.pizzacesar.com.br/class/resize.php?arquivo=../uploads/1010201212234587813019.jpg&largura=1134&altura=449&tipo=crop',
      size: 'Pequena',
    },
    {
      id: 2,
      price: 45,
      tittle: 'Calabresa',
      ingredients: 'Molho de tomate, Muçarela, Calabresa',
      dough: 'nova-iorquina',
      points: 40,
      img: 'http://www.pizzacesar.com.br/class/resize.php?arquivo=../uploads/1110201205137297594650.jpg&largura=1134&altura=449&tipo=crop',
      size: 'Normal',
    },
    {
      id: 3,
      price: 70,
      tittle: 'Escarola',
      ingredients: 'Molho de tomate, Muçarela Escarola Refogada, Azeitonas',
      dough: 'napolitana',
      points: 50,
      img: 'http://www.pizzacesar.com.br/class/resize.php?arquivo=../uploads/1110201204543598968966.jpg&largura=1134&altura=449&tipo=crop',
      size: 'Grande',
    },
  ]

  return response.json(pizzas)
}

export default getPizzas
