
const products = [
    {
      id: "Prm1111",
      name: "Primer hidratante Revlon photoready",
      id: "Pbs2211",
      name: "Primer iluminacion e hidratacion Max Factor Miracle prep",
      description: "",
      price: 15000,
      stock: 20,
      price: 22000,
      image: "/img/primermaxfactor.webp",
      image: "/img/primerrevlon.webp",
      category: "primers"
    },
    {
      id: "Bb3131",
      name: "BB Cream Maybelline Dream Satin",
      id: "Bs3322",
      name: "Base de maquillaje Maybelline Fit Me",
      description: "",
      stock: 4,
      price: 17000,
      image: "/img/bbcream.webp",
      category: "primers",
      price: 22000,
      stock: 2,
      image: "/img/basefitme.jpeg",
      category: "bases"
    },

    {
      id: "Cr5524",
      name: "Corrector Fit Me",
      description: "",
      price: 10000,
      stock: 8,
      image: "/img/correctorfitme.jpeg",
      category: "correctores"
    },
    {
      id: "Sb8635",
      name: "Paleta de sombras Magnif Eyes Rimmel",
      description: "",
      price: 30000,
      stock: 3,
      image: "/img/paletasombrasmagnify.webp",
      category: "sombras"
    },
    
    {
      id: "Lb3999",
      name: "Labial Loreal Rouge signature",
      description: "",
      price: 15000,
      stock: 9,
      image: "/img/labialloreal.webp",
      category: "labiales"
    },
  ]

  
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000)
    })
  }

  export {getProducts}