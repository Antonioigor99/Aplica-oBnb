import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        className="aspect-square rounded-2xl object-cover"
        src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI5OTUyMjYyNDUxNjUzMzk1Nw%3D%3D/original/28705c81-e821-4c27-93d7-61369e4c647b.jpeg?im_w=1200"
        alt="Imagem acomodação"
      />
      <div>
        <h3 className="text-xl font-semibold">
          Espaço inteiro: casa em Florianópolis, Brasil
        </h3>
        <p className="truncate text-gray-800">
          Descubra o charme do Ribeirão da Ilha, um dos bairros mais pitorescos
          do sul de Florianópolis, com sua arquitetura açoriana e gastronomia
          rica em frutos do mar. A casa à beira-mar oferece 3 quartos espaçosos,
          3 banheiros modernos, sala aconchegante e cozinha equipada. Um dos
          quartos é uma suíte independente. Todos os quartos têm vista para o
          mar. A propriedade dispõe de um spa à beira do mar e churrasqueira à
          carvão. Ideal para um fim de semana romântico, férias em família ou
          com amigos. O espaço Desfrute de uma estadia inesquecível nesta casa,
          situada em cenário paradisíaco, à beira-mar, com uma praia
          praticamente exclusiva. Com águas limpas e mar calmo, é o lugar
          perfeito para famílias com crianças. Localizada no tranquilo bairro do
          Ribeirão da Ilha, em Florianópolis/SC, a casa oferece um refúgio ideal
          para férias relaxantes e revigorantes. A casa fica situada em local de
          fácil acesso, a apenas 15 minutos do Aeroporto Internacional de
          Florianópolis. No bairro e na mesma rua existem supermercados e
          minimercados próximos (4 minutos de carro), inclusive com delivery
          caso você não deseje sair de casa. Além disso, você poderá desfrutar
          de ótimos restaurantes, como o renomado Ostradamus, que fica a apenas
          5 minutos da acomodação. Comodidades: - Spa à beira do mar, para 5
          pessoas, com hidromassagem e cromoterapia; - Deck com espreguiçadeiras
          na frente do mar; - Portão com acesso exclusivo, direto à praia (pé na
          areia); - Internet de alta velocidade;
        </p>
      </div>
      <p>
        <span className="font-semibold">R$ 550 </span> por noite
      </p>
    </a>
  );
};

export default Item;
