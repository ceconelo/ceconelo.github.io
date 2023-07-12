var relearn_search_index = [
  {
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "Javascript",
    "uri": "/linguagens/javascript/index.html"
  },
  {
    "content": " Javascript Python ",
    "description": "",
    "tags": null,
    "title": "Linguagens",
    "uri": "/linguagens/index.html"
  },
  {
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "Python",
    "uri": "/linguagens/python/index.html"
  },
  {
    "content": "Básico de Docker O que é Docker Estamos nos referindo ao nome Docker, pois esse é o nome da empresa que criou a tecnologia que nos permite de forma brilhante criar, gerenciar e executar containers. Mas o que é um container ?\nUm container é uma unidade de software que empacota o código e todas as suas dependências de forma que a aplicação seja executada de forma rápida e confiável de um ambiente de computação isolado.\nFonte: Docker\nUma definição mais direta: Um container é um processo isolado que roda em um sistema operacional.\nContainer é um recurso nativo do Linux, e como disse anteriormente, Docker é a empresa que criou a tecnologia.\nArquitetura de um container Filesystem, namespaces e cgroups são os principais recursos do kernel do Linux que permitem a criação de containers.\nFilesystem O container é um processo isolado, isso significa que ele tem seu próprio sistema de arquivos.\nNamespaces Namespaces são uma forma de isolar recursos do sistema operacional para que um processo não possa ver ou afetar recursos de outro processo.\nCgroups Cgroups são grupos de controle, que permitem limitar e isolar recursos de um processo.\nOs containers são criados a partir de imagens montadas em camadas, que são armazenadas em um repositório chamado Docker Registry.\nOutra informação bem relevante é que as camadas mantém um estado imutável, ou seja, uma vez criada uma camada ela não pode ser alterada e que toda escrita é feita em uma camada temporária que é descartada quando o container é desligado.\nVisão geral Essa é uma visão geral sobre o docker. Para uma visão mais detalhada acesse o Docker Overview\nInstalação (Ubuntu) Remover versões antigas do Docker sudo apt-get remove docker docker-engine docker.io containerd runc Atualizar o índice de pacotes sudo apt-get update Instalar certificados sudo sudo apt-get install ca-certificates curl gnupg Keyrings e GPG sudo install -m 0755 -d /etc/apt/keyringscurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpgsudo chmod a+r /etc/apt/keyrings/docker.gpgecho \\ \"deb [arch=\"$(dpkg --print-architecture)\" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\ \"$(. /etc/os-release \u0026\u0026 echo \"$VERSION_CODENAME\")\" stable\" | \\ sudo tee /etc/apt/sources.list.d/docker.list \u003e /dev/null Atualizar o índice de pacotes sudo apt-get update Instalar Docker Engine e Docker Compose sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin",
    "description": "",
    "tags": null,
    "title": "Docker",
    "uri": "/docker/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "Bem vindo ! Seja bem vindo ao meu espaço, ou melhor, ao nosso espaço. Sim, foi proposital primeiramente o uso do pronome possessivo meu e depois o nosso. Isso porque em um primeiro momento percebi que precisa armazenar o conhecimento que estava adquirindo, servindo como uma espécie de diário mas depois percebi que este conhecimento teria um valor ainda maior se fosse compartilhado, e é isso que quero fazer aqui.\nAlém do mais sei que muitas pessoas tem dificuldades em encontrar conteúdo de qualidade na internet, principalmente em português. Então chega mais, sinta-se a vontade e aproveite o conteúdo que estou disponibilizando aqui.\nQuero que fique claro que não me considero o melhor do mundo nos diversos assuntos que vou abordar aqui, mas acredito que posso ajudar muitas pessoas com o que sei e com os desafios que já enfrentei e que ainda por vezes enfrento.\nSobre mim Meu nome é Thiago Oliveira, estudande de Ciência da Computação, apaixonado por tecnologia e pelos desafios que esse mundo me proporciona. Atualmente ( 13 anos…hehe ) tenho uma empresa Cditec que presta serviços de desenvolvimento de software, consultoria, admnistração de redes, segurança da informação e infraestrutura de TI.\nNos últimos anos tenho me dedicado à projetos que envolvem WebScraping, RPA, Integração de Sistemas e Desenvolvimento de APIs e engenharia reversa de sistemas web.\nNeste sentido me envolvi com diversas tecnologias como: Python, Javascript, NodeJS, Docker, Selenium, Puppeteer, Scrapy, BeautifulSoup, FastAPI, VueJS, entre outras.\nO que você vai encontrar aqui Como já deve ter percebido me envolvo com diversas tecnologias e assuntos, então aqui você vai encontrar conteúdos sobre:\nWebScraping RPA Integração de Sistemas Desenvolvimento de APIs Engenharia Reversa Desenvolvimento de Software DevOps Padrões de Projeto Arquitetura de Software Segurança da Informação Docker Linux Github Como mencionei anteriormente, uso este espaço como um diário, isso significa que se as coisas por aqui estiverem muito bagunçadas é porque estou aprendendo e ainda não tive tempo de organizar tudo. Mas não se preocupe, com o tempo tudo vai ficar mais organizado e com mais conteúdo.\nCaso tenha alguma dúvida, sugestão ou crítica, fique a vontade para entrar em contato comigo através do meu Linkedin\n",
    "description": "",
    "tags": null,
    "title": "Sonath - Base de Conhecimento",
    "uri": "/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
