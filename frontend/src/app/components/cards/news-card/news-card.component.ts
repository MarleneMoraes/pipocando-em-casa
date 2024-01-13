import { Component } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  articles:{path:string, alt:string, title:string, subtitle: string, image:string, texts:string[], obs:string, badges:string[]}[]= [
    {
      path: 'https://www.jornadageek.com.br/novidades/the-devil-all-the-time-primeiras-imagens/',
      alt:'The Devil All The Time',
      title: 'The Devil All the Time | Netflix divulga primeiras imagens do filme',
      subtitle: '03/08/2020 | Amanda Vizagre',
      image: '/frontend/src/assets/img/news_img1.jpg',
      texts: ['Com o seu desenvolvimento já tendo sido confirmado há alguns meses e sua data de estreia definida, o filme The Devil All The Time voltou a ganhar novidades. E desta vez, a mais recente delas envolve a divulgação de suas primeiras imagens. Em uma postagem recente em sua conta no twitter, a Netflix divulgou as primeiras imagens do elenco no longa.',
      'O elenco de The Devil All The Time é formado por Sebastian Stan (Vingadores: Guerra Infinita), Tom Holland (Homem-Aranha: Longe de Casa, Uncharted), e Robert Pattinson (High Life, The Batman), Bill Skarsgard (It: A Coisa), Mia Wasikowska (Alice no País das Maravilhas) e Eliza Scanlen (Sharp Objects), Jason Clarke (Cemitério Maldito), Haley Bennett (A Garota no Trem) e Riley Keough (Mad Max: Estrada da Fúria).'],
      obs: 'Texto retirado do site Jornada Geek. Para acessar o original, basta clicar no título da reportagem.',
      badges: ['Streaming', 'Estreia', 'Netflix']
    },
    {
      path: '',
      title: 'Old | Filme de M. Night Shyamalan ganha título e novidades sobre a trama',
      alt:'Old',
      subtitle: '26/09/2020 | Marco Victor',
      image: '/frontend/src/assets/img/news_img2.jpg',
      texts: ['Com o seu desenvolvimento já tendo sido anunciado há alguns meses,o novo filme de M. Night Shyamalan aos poucos vai tendo novos detalhes revelados. E entre eles,o mais recente envolve justamente a confirmação do seu título como Old.', 'Em uma postagem recente em sua conta no twitter, o cineasta revelou que as filmagens do seu novo longa foram iniciadas e que o mesmo levará o título de Old. Contudo, outra informação envolvendo a sua trama também surgiu na internet.', 'De acordo com o site Collider, algumas das suas fontes relataram que o filme será baseado na aclamada história em quadrinhos Sandcastle, de Pierre Oscar Levy e Frederik Peeters, girando em torno de um grupo de pessoas que descobrem que não conseguem escapar de um praia isolada como um segredo obscuro que o tempo os mantém lá depois de descobrirem um cadáver. Shyamalan teria recebido o romance como um presente do Dia dos Pais e rapidamente assumiu os direitos depois de se apaixonar pelo conceito da história.'],
      obs: 'Texto retirado do site Jornada Geek. Para acessar o original, basta clicar no título da reportagem.',
      badges: ['Cinema','Novidades', '2021']
    },
    {
      path: 'https://www.tecmundo.com.br/produto/206901-finalmente-chegou-assistir-disney-plus-brasil.htm',
      title: 'Finalmente chegou! Como assistir Disney Plus no Brasil',
      alt:'Disney Plus',
      subtitle: '17/11/2020 | Eduardo Harada',
      image: '/frontend/src/assets/img/news_img3.jpg',
      texts: ['O Disney Plus é o serviço de streaming da empresa que finalmente chegou no Brasil nesta quarta-feira (17). O catálogo da plataforma vai contar com filmes, séries e animações clássicas do estúdio, além de produções inéditas de franquias famosas, como Star Wars, Marvel e outros estúdios, como Pixar e National Geographic.', 'O serviço já havia sido lançado há mais de um ano nos Estados Unidos, mas só agora a Disney Brasil resolveu disponibilizar a plataforma por aqui. Além de nós, outros países da América Latina também poderão usufruir do streaming.', '[...] Assim como os outros serviços de streaming, o Disney+ funciona como um serviço de assinatura. O preço mensal no Brasil é de R$ 27,90, valor que libera acesso total ao catálogo, sem restrições ou anúncios.', 'Quem preferir contratar o plano anual vai pagar R$ 279,90, o que seria o equivalente a R$ 23,32 por mês – um desconto de R$ 4,58 no valor pago na assinatura mensal. Nos dois casos, o pagamento pode ser efetivado por meio do cartão de crédito ou PayPal.'],
      obs: 'Texto retirado do site Tecmundo. Para acessar o original, basta clicar no título da reportagem.',
      badges: ['Streaming', 'Serviços', 'Disney Plus']
    }
  ];
}
