import React, { useState } from "react"
import { ImLocation2 } from "react-icons/im"
import { HiOutlineClock } from "react-icons/hi"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import {
  BsBagCheckFill,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs"

import {
  ButtonClose,
  ButtonContainer,
  ButtonContato,
  CartoesImg,
  CompraSeguraImg,
  Container,
  Content,
  Copyright,
  DivMobile,
  FormasPagamento,
  FormasPagamentoDesktop,
  LinkRastreio,
  Midias,
  ModalWrapper,
  PaginaInicial,
  Section,
  SectionMobile,
  SubtitleModal,
  SubtitleText,
  Text,
  TextModal,
  TextPages,
  Title,
  TitleModal,
  TitleSmall,
} from "./styles"
import { Link } from "react-router-dom"

const Footer = ({ paginaInicial, prazoEntrega }) => {
  const [openFirst, setOpenFirst] = useState(false)
  const [openSecond, setOpenSecond] = useState(false)
  const [openThird, setOpenThird] = useState(false)
  const [openFourth, setOpenFourth] = useState(false)
  const [openFifth, setOpenFifth] = useState(false)

  return (
    <Container>
      <TextPages>
        <PaginaInicial href={paginaInicial}>Página Inicial</PaginaInicial>
        &nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;Página Atual
      </TextPages>
      <Content>
        <Section className="informacoesLoja">
          <Text style={{ marginTop: "10px" }}>
            <BsBagCheckFill size="18px" />
            CNPJ: 46.721.242/0001-92
          </Text>
          <Text>
            <ImLocation2 size="20px" />
            Centro - 790 - Jaraguá do Sul
            <br />
            CEP: 89710-220
          </Text>
        </Section>

        <Section className="servicosCliente">
          <Title>Serviço ao Cliente</Title>

          <SubtitleText onClick={() => setOpenFirst(true)}>
            Política de Privacidade
          </SubtitleText>
          <Modal open={openFirst} onClose={() => setOpenFirst(false)} center>
            <ModalWrapper>
              <TitleModal>Política de Privacidade</TitleModal>
              <TextModal>
                Nós usamos cookies para melhorar sua experiência de navegação no
                portal. Ao utilizar este site, você concorda com a política de
                monitoramento de cookies. Para ter mais informações sobre como
                isso é feito, acesse Política de cookies. Se você concorda,
                clique em ACEITO.
              </TextModal>
              <SubtitleModal>O que são cookies?</SubtitleModal>
              <TextModal>
                Cookies são arquivos salvos em seu computador, tablet ou
                telefone quando você visita um site.Usamos os cookies
                necessários para fazer o site funcionar da melhor forma possível
                e sempre aprimorar os nossos serviços. Alguns cookies são
                classificados como necessários e permitem a funcionalidade
                central, como segurança, gerenciamento de rede e acessibilidade.
                Estes cookies podem ser coletados e armazenados assim que você
                inicia sua navegação ou quando usa algum recurso que os requer.
              </TextModal>
              <SubtitleModal>Cookies Primários</SubtitleModal>
              <TextModal>
                Alguns cookies serão colocados em seu dispositivo diretamente
                pelo nosso site - são conhecidos como cookies primários. Eles
                são essenciais para você navegar no site e usar seus recursos.
              </TextModal>
              <SubtitleModal>Temporários</SubtitleModal>
              <Text>
                Nós utilizamos cookies de sessão. Eles são temporários e expiram
                quando você fecha o navegador ou quando a sessão termina.
              </Text>
              <SubtitleModal>Finalidade</SubtitleModal>
              <TextModal>
                Estabelecer controle de idioma e segurança ao tempo da sessão.
              </TextModal>
              <SubtitleModal>Persistentes</SubtitleModal>
              <TextModal>
                Utilizamos também cookies persistentes que permanecem em seu
                disco rígido até que você os apague ou seu navegador o faça,
                dependendo da data de expiração do cookie. Todos os cookies
                persistentes têm uma data de expiração gravada em seu código,
                mas sua duração pode variar.
              </TextModal>
              <SubtitleModal>Finalidade</SubtitleModal>
              <TextModal>
                Coletam e armazenam a ciência sobre o uso de cookies no site.
              </TextModal>
              <SubtitleModal>Cookies de Terceiros</SubtitleModal>
              <TextModal>
                Outros cookies são colocados no seu dispositivo não pelo site
                que você está visitando, mas por terceiros, como, por exemplo,
                os sistemas analíticos.
              </TextModal>
              <SubtitleModal>Temporários</SubtitleModal>
              <TextModal>
                Nós utilizamos cookies de sessão. Eles são temporários e expiram
                quando você fecha o navegador ou quando a sessão termina.
              </TextModal>
              <SubtitleModal>Persistentes</SubtitleModal>
              <TextModal>
                Utilizamos também cookies persistentes que permanecem em seu
                disco rígido até que você os apague ou seu navegador o faça,
                dependendo da data de expiração do cookie. Todos os cookies
                persistentes têm uma data de expiração gravada em seu código,
                mas sua duração pode variar.
              </TextModal>
              <SubtitleModal>Finalidade</SubtitleModal>
              <TextModal>
                Coletam informações sobre como você usa o site, como as páginas
                que você visitou e os links em que clicou. Nenhuma dessas
                informações pode ser usada para identificá-lo. Seu único
                objetivo é possibilitar análises e melhorar as funções do site.
              </TextModal>
              <TextModal>
                Você pode desabilitá-los alterando as configurações do seu
                navegador, mas saiba que isso pode afetar o funcionamento do
                site.
              </TextModal>
              <TextModal style={{ paddingLeft: "15px" }}>
                Chrome
                <br />
                Firefox
                <br />
                Microsoft Edge
                <br />
                Internet Explorer
              </TextModal>
              <ButtonClose onClick={() => setOpenFirst(false)}>
                FECHAR
              </ButtonClose>
            </ModalWrapper>
          </Modal>

          <SubtitleText onClick={() => setOpenSecond(true)}>
            Política de Reembolso
          </SubtitleText>
          <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
            <ModalWrapper>
              <TitleModal>Política de Reembolso</TitleModal>
              <SubtitleModal>CONDIÇÕES PARA TROCA OU DEVOLUÇÃO</SubtitleModal>
              <TextModal>
                A equipe <strong>Aduira</strong> está constantemente investindo
                em políticas para que nossos clientes sempre saem satisfeitos.
                Você pode solicitar a troca ou devolução de um produto em até 7
                dias corridos após o recebimento do mesmo. Precisam ser
                observadas as seguintes condições:
              </TextModal>
              <TextModal>
                - O produto deve ser devolvido em sua embalagem original;
                <br />
                - O produto deve ser devolvido sem indícios de uso ou consumo,
                isto é, da forma que foi recebido;
                <br />- O produto deve ser devolvido com etiquetas (ou
                protetores) afixados, manuais e todos os acessórios que o
                acompanhem.
              </TextModal>
              <TextModal>
                IMPORTANTE: Não aceitaremos devoluções caso as condições acima
                não sejam respeitadas.
              </TextModal>
              <SubtitleModal>
                O QUE FAZER PARA SOLICITAR TROCA OU DEVOLUÇÃO
              </SubtitleModal>
              <TextModal>
                Envie um e-mail para
                <strong> contato@adquiraofertas.com.br</strong> e informe:
              </TextModal>
              <TextModal>
                - Nome do produto;
                <br />
                - Número do pedido;
                <br />- E-mail cadastrado na compra;
                <br />- Motivo para troca ou devolução;
                <br />- IMAGEM OU VÍDEO QUE COMPROVE O DEFEITO, CASO HAJA.
              </TextModal>
              <TextModal>
                Confirmadas todas as questões acerca da devolução do produto,
                lhe informaremos o endereço para devolução do produto e lhe
                ressarciremos o valor pago do produto e do frete.
              </TextModal>
              <SubtitleModal>FORMAS DE RESSARCIMENTO</SubtitleModal>
              <TextModal>
                Estorno no cartão de crédito: este estorno pode aparecer em até
                duas faturas após a conclusão da devolução pelo gateway de
                pagamento.
              </TextModal>
              <TextModal>
                TED - Transferência para a conta do cliente que pode ser
                realizada em até 10 dias úteis após a confirmação da devolução.
                A TRANSFERÊNCIA NÃO PODERÁ SER FEITA EM CONTA DE TERCEIROS.
              </TextModal>
              <ButtonClose onClick={() => setOpenSecond(false)}>
                FECHAR
              </ButtonClose>
            </ModalWrapper>
          </Modal>

          <SubtitleText onClick={() => setOpenThird(true)}>
            Política de Envio
          </SubtitleText>
          <Modal open={openThird} onClose={() => setOpenThird(false)} center>
            <ModalWrapper>
              <TitleModal>Política de Envio</TitleModal>
              <SubtitleModal>
                CUIDADOS COM ENDEREÇAMENTO DE PEDIDOS
              </SubtitleModal>
              <TextModal>
                A <strong>Adquira</strong> providenciará o envio dos produtos para
                o endereço que o cliente solicitar. Portanto, para que não haja
                empecilhos para a entrega da sua encomenda, pedimos atenção no
                momento de preencher o endereço no qual deseja receber o seu
                pedido.
              </TextModal>
              <SubtitleModal>DESTINATÁRIO AUSENTE</SubtitleModal>
              <TextModal>
                Certifique-se de que haverá alguém no endereço para receber seus
                produtos. Os Correios realizam três tentativas de entrega dos
                produtos, caso não haja ninguém no endereço para receber a
                encomenda em nenhuma das tentativas, o pacote será levado para a
                agência dos Correios mais próxima ao endereço, e, neste caso,
                será necessário que o destinatário do pacote realize a retirada
                do mesmo na agência dos Correios, em até 7 dias corridos. Caso o
                destinatário da encomenda não realize a retirada, por norma dos
                Correios, o pacote retornará ao remetente, sendo necessário o
                pagamento de um novo frete para o reenvio do produto.
              </TextModal>
              <TextModal>
                Todos os detalhes relacionados às tentativas de entrega, bem
                como o endereço da agência dos Correios na qual o destinatário
                deverá buscar seu pacote no caso de ausência no endereço, ficam
                registrados no rastreio do pedido, que pode ser acompanhado pela{" "}
                <LinkRastreio
                  href="https://www.adquiraofertas.com.br/pages/rastreio"
                  target="_blank"
                >
                  Página de Rastreio
                </LinkRastreio>
                , utilizando o código de rastreio fornecido.
              </TextModal>
              <SubtitleModal>ENDEREÇO INCORRETO OU INCOMPLETO</SubtitleModal>
              <TextModal>
                A <strong>Adquira</strong> não se responsabiliza pelo
                preenchimento incorreto ou incompleto do endereço de destino dos
                pedidos realizados na loja. Caso ocorra o endereçamento
                incorreto ou incompleto, por norma dos Correios, o pacote
                retornará ao remetente, e não serão mais realizadas outras
                tentativas de entrega naquele endereço.
              </TextModal>
              <TextModal>
                <strong>Atenção:</strong> Em caso da entrega não ser realizada
                devido a divergência no endereço informado pelo cliente, o
                cliente não tem direito ao reembolso, será necessário o
                pagamento de um novo frete (valor do envio + taxa dos correios),
                para reenvio do produto.
              </TextModal>
              <SubtitleModal>PRAZO DE PROCESSAMENTO</SubtitleModal>
              <TextModal>
                Após seu pedido ser processado e o pagamento cair em nosso
                sistema, os próximos passos são: separação, embalagem e
                despacho. Este processo geralmente leva cerca de{" "}
                <strong>2 a 5 horas após a conclusão do pagamento</strong>.
              </TextModal>
              <SubtitleModal>
                PRAZO PARA ENVIO DO PRODUTO E CÓDIGO DE RASTREAMENTO
              </SubtitleModal>
              <TextModal>
                Você receberá o código de rastreamento no e-mail cadastrado na
                compra em até 7 dias úteis após o processamento do seu pedido.
                As atualizações de rastreamento disponibilizadas pela empresa de
                logística não são atualizadas no sistema imediatamente, sendo
                assim, podem ocorrer delays nas atualizações reais do pacote.
                Para rastrear seu pedido, basta entrar na página{" "}
                <LinkRastreio
                  href="https://www.adquiraofertas.com.br/pages/rastreio"
                  target="_blank"
                >
                  Acompanhar Pedido
                </LinkRastreio>{" "}
                aqui em nosso site.
              </TextModal>
              <TextModal>
                Por ser uma encomenda internacional, para que o rastreamento
                esteja disponível no site dos Correios é preciso que haja
                deslocamento do produto até o Brasil, por isso, pode demorar
                alguns dias para que ocorra a atualização do código de rastreio
                no sistema, sendo possível visualizar o rastreamento do produto.
              </TextModal>
              <SubtitleModal>PRAZO DE ENTREGA</SubtitleModal>
              <TextModal>
                O prazo de entrega exato para a sua região é informada no
                momento da finalização da compra quando você digita o seu CEP,
                podem haver variações no prazo de acordo com a época do ano, mas
                normalmente, o prazo médio para todo o Brasil fica entre{" "}
                <strong>{prazoEntrega}</strong>, variando de acordo com a
                agilidade momentânea dos correios de cada região. Todavia,
                fatores adversos tais como greve dos Correios, crises sanitárias
                e humanitárias, impossibilidade de entrega devido a fatores
                climáticos ou áreas de risco e feriados nacionais, podem
                acrescer alguns dias na entrega do produto.
              </TextModal>
              <SubtitleModal>ORIGEM</SubtitleModal>
              <TextModal>
                A <strong>Adquira</strong> realiza a Intermediação entre as
                fábricas de origem do produto e o cliente final. Nossos produtos
                são enviados diretamente de nossos fornecedores dos Estados
                Unidos, Ásia e Europa. Possuímos autoridade no ramo e uma equipe
                especializada na comercialização de produtos oriundos de
                parcerias sólidas com fornecedores primários, oferecendo
                produtos inovadores, exclusivos e com ótimos preços (sem custos
                adicionais de revenda). Há situações em que a entrega de um
                pedido pode ser feita em duas ou mais remessas, pois os produtos
                podem ser enviados de fornecedores diferentes. Nesse caso, você
                receberá um código de rastreamento para cada remessa.
              </TextModal>
              <SubtitleModal>FORMAS DE ENVIO</SubtitleModal>
              <TextModal>
                Os produtos vendidos pela <strong>Adquira</strong> são sempre
                entregues pelos Correios, no entanto, em alguns casos tais como
                destinatário ausente, região com limitação de entrega ou até
                endereço incorreto, pode ser que o cliente tenha que buscar o
                produto na agência mais próxima de sua residência.
              </TextModal>
              <TextModal>
                Caso o endereço não seja preenchido corretamente, é possível que
                o produto retorne ao remetente. Pedimos atenção redobrada na
                hora de preencher o endereço. Caso haja algum erro no
                preenchimento do endereço e o produto não possa ser entregue, a
                responsabilidade é do cliente.
              </TextModal>
              <TextModal>
                Os Correios realizam três tentativas de entrega, caso não
                consigam completá-la o produto ficará disponível para retirada
                na agência mais próxima por até 7 dias. Após este prazo, o
                produto retorna ao remetente.
              </TextModal>
              <TextModal>
                <strong>
                  AO REALIZAR UMA COMPRA EM NOSSO SITE O CLIENTE DECLARA ESTAR
                  CIENTE E DE ACORDO COM TUDO QUE ESTÁ DESCRITO ACIMA.
                </strong>
              </TextModal>
              <ButtonClose onClick={() => setOpenThird(false)}>
                FECHAR
              </ButtonClose>
            </ModalWrapper>
          </Modal>

          <SubtitleText onClick={() => setOpenFourth(true)}>
            Página de Contato
          </SubtitleText>
          <Modal open={openFourth} onClose={() => setOpenFourth(false)} center>
            <ModalWrapper>
              <TitleModal>Página de Contato</TitleModal>
              <ButtonContainer>
                <ButtonContato>
                  <FaPhoneAlt size="18px" />
                  (47) 99947-2387
                </ButtonContato>
                <ButtonContato>
                  <MdEmail size="18px" />
                  contato@adquiraofertas.com.br
                </ButtonContato>
              </ButtonContainer>
              <ButtonClose onClick={() => setOpenFourth(false)}>
                FECHAR
              </ButtonClose>
            </ModalWrapper>
          </Modal>

          <SubtitleText>

            <Link to={'/duvidas-e-rastreio'} style={{ textDecoration: "none", color: "#000000" }}>
              Dúvidas e Rastreio
            </Link>
          </SubtitleText>

          <SubtitleText onClick={() => setOpenFifth(true)}>
            Termos de Serviço
          </SubtitleText>
          <Modal open={openFifth} onClose={() => setOpenFifth(false)} center>
            <ModalWrapper>
              <TitleModal>Termos de Serviço</TitleModal>
              <SubtitleModal>VISÃO GERAL</SubtitleModal>
              <TextModal>
                Este site é operado pela Adquira Ofertas. Em todo o site, os termos "nós",
                "nós" e "nosso" se referem à Adquira Ofertas. Adquira Ofertas oferece este site,
                incluindo todas as informações, ferramentas e serviços
                disponíveis neste site, para você, o usuário, mediante a sua
                aceitação de todos os termos, condições, políticas e avisos
                estabelecidos aqui.
              </TextModal>
              <TextModal>
                Ao visitar nosso site e/ou comprar alguma coisa no nosso site,
                você está utilizando nossos “Serviços” e, consequentemente,
                concorda com os seguintes termos e condições (“Termos de
                serviço”, “Termos”), incluindo os termos e condições e políticas
                adicionais mencionados neste documento e/ou disponíveis por
                hyperlink. Esses Termos de serviço se aplicam a todos os
                usuários do site, incluindo, entre outros, os usuários que são
                visualizadores, fabricantes, clientes, lojistas e/ou
                colaboradores de conteúdo. Leia estes Termos de serviço
                cuidadosamente antes de acessar ou utilizar o nosso site. Ao
                acessar ou usar qualquer parte do site, você concorda com os
                Termos de serviço. Se você não concorda com todos os termos e
                condições deste contrato, então você não pode acessar o site ou
                usar quaisquer serviços. Se esses Termos de serviço são
                considerados uma oferta, a aceitação é expressamente limitada a
                esses Termos de serviço.
              </TextModal>
              <TextModal>
                Quaisquer novos recursos ou ferramentas que forem adicionados à
                loja atual também devem estar sujeitos aos Termos de serviço.
                Você pode revisar a versão mais atual dos Termos de serviço
                quando quiser nesta página. Reservamo-nos o direito de
                atualizar, alterar ou trocar qualquer parte desses Termos de
                serviço ao publicar atualizações e/ou alterações no nosso site.
                É sua responsabilidade verificar periodicamente as alterações
                feitas nesta página. Seu uso contínuo ou acesso ao site após a
                publicação de quaisquer alterações constitui aceitação de tais
                alterações. Nossa loja está hospedada na Shopify Inc. Esta
                empresa nos fornece a plataforma de e-commerce online que nos
                permite vender nossos produtos e serviços para você.
              </TextModal>
              <SubtitleModal>SEÇÃO 1 - TERMOS DA LOJA VIRTUAL</SubtitleModal>
              <TextModal>
                Ao concordar com estes Termos de serviço, você declara que tem
                idade mínima de maioridade em seu estado ou município de
                residência, ou que é maior de idade em seu estado ou município
                de residência, e que nos deu sua permissão para permitir que
                qualquer um de seus dependentes menores use este site.
              </TextModal>
              <TextModal>
                Você não deve usar nossos produtos para qualquer fim ilegal ou
                não autorizado. Você também não pode, ao usufruir deste Serviço,
                violar quaisquer leis em sua jurisdição (incluindo, entre
                outras, as leis de direitos autorais).
              </TextModal>
              <TextModal>
                Você não deve transmitir nenhum vírus ou qualquer código de
                natureza destrutiva.
              </TextModal>
              <TextModal>
                Violar qualquer um dos Termos resultará na rescisão imediata dos
                seus Serviços.
              </TextModal>
              <SubtitleModal>SEÇÃO 2 - CONDIÇÕES GERAIS</SubtitleModal>
              <TextModal>
                Reservamo-nos o direito de recusar o serviço a qualquer pessoa,
                por qualquer motivo, a qualquer momento.
              </TextModal>
              <TextModal>
                Você entende que o seu conteúdo (não incluindo informações de
                cartão de crédito) pode ser transferido sem criptografia e pode:
                (a) ser transmitido por várias redes; e (b) sofrer alterações
                para se adaptar e se adequar às exigências técnicas de conexão
                de redes ou dispositivos. As informações de cartão de crédito
                sempre são criptografadas durante a transferência entre redes.
              </TextModal>
              <TextModal>
                Você concorda em não reproduzir, duplicar, copiar, vender,
                revender ou explorar qualquer parte do Serviço, uso do Serviço,
                acesso ao Serviço, ou qualquer contato no site através do qual o
                Serviço seja fornecido, sem nossa permissão expressa por
                escrito.
              </TextModal>
              <TextModal>
                Os títulos usados neste contrato são incluídos apenas por
                conveniência e não limitam ou afetam os Termos.
              </TextModal>
              <SubtitleModal>
                SEÇÃO 3 - PRECISÃO, COMPLETUDE E PERÍODO DE VALIDADE DAS
                INFORMAÇÕES
              </SubtitleModal>
              <TextModal>
                Não nos responsabilizamos se as informações disponibilizadas
                neste site não forem precisas, completas ou atuais. O material
                deste site é fornecido apenas para fins informativos e não deve
                ser usado como a única base para tomar decisões sem consultar
                fontes de informações primárias, mais precisas, mais completas
                ou mais atuais. Qualquer utilização do material deste site é por
                sua conta e risco.
              </TextModal>
              <TextModal>
                Este site pode conter certas informações históricas. As
                informações históricas podem não ser atuais e são fornecidas
                apenas para sua referência. Reservamo-nos o direito de modificar
                o conteúdo deste site a qualquer momento, mas nós não temos
                obrigação de atualizar nenhuma informação em nosso site. Você
                concorda que é de sua responsabilidade acompanhar as alterações
                no nosso site.
              </TextModal>
              <SubtitleModal>
                SEÇÃO 4 - ALTERAÇÕES DO SERVIÇO E DOS PREÇOS
              </SubtitleModal>
              <TextModal>
                Os preços de nossos produtos estão sujeitos a alterações sem
                aviso prévio.
              </TextModal>
              <TextModal>
                Reservamo-nos o direito de, a qualquer momento, modificar ou
                descontinuar o Serviço (ou qualquer parte ou conteúdo do mesmo)
                sem aviso prévio em qualquer momento.
              </TextModal>
              <TextModal>
                Não nos responsabilizamos por você ou por qualquer terceiro por
                qualquer modificação, alteração de preço, suspensão ou
                descontinuação do Serviço.
              </TextModal>
              <SubtitleModal>
                SEÇÃO 5 - PRODUTOS OU SERVIÇOS (se aplicável)
              </SubtitleModal>
              <TextModal>
                Certos produtos ou serviços podem estar disponíveis
                exclusivamente online através do site. Tais produtos ou serviços
                podem ter quantidades limitadas e são sujeitos a apenas
                devolução ou troca, de acordo com nossa Política de devolução.
              </TextModal>
              <TextModal>
                Fizemos todo o esforço possível para exibir da forma mais
                precisa as cores e imagens dos nossos produtos que aparecem na
                loja. Não podemos garantir que a exibição de qualquer cor no
                monitor do seu computador será precisa.
              </TextModal>
              <TextModal>
                Reservamo-nos o direito de, mas não somos obrigados a, limitar
                as vendas de nossos produtos ou Serviços para qualquer pessoa,
                região geográfica ou jurisdição. Podemos exercer esse direito
                conforme cada caso individual. Reservamo-nos o direito de
                limitar as quantidades de quaisquer produtos ou serviços que
                oferecemos. Todas as descrições de produtos ou preços de
                produtos são sujeitos a alteração a qualquer momento sem aviso
                prévio, a nosso critério exclusivo. Reservamo-nos o direito de
                descontinuar qualquer produto a qualquer momento. Qualquer
                oferta de produtos ou serviços neste site é nula onde for
                proibido por lei.
              </TextModal>
              <TextModal>
                Não garantimos que a qualidade de quaisquer produtos, serviços,
                informações ou outros materiais comprados ou obtidos por você
                vão atender às suas expectativas, ou que quaisquer erros no
                Serviço serão corrigidos.
              </TextModal>
              <SubtitleModal>
                SEÇÃO 6 - PRECISÃO DE COBRANÇA E INFORMAÇÕES DA CONTA
              </SubtitleModal>
              <TextModal>
                Nós nos reservamos o direito de recusar qualquer pedido que você
                fizer conosco. Podemos, a nosso próprio critério, limitar ou
                cancelar o número de produtos comprados por pessoa, por
                domicílio ou por pedido. Tais restrições podem incluir pedidos
                feitos na mesma conta de cliente, no mesmo cartão de crédito,
                e/ou pedidos que usem a mesma fatura e/ou endereço de entrega.
                Caso façamos uma alteração ou cancelemos um pedido, podemos
                tentar notificá-lo entrando em contato com o endereço de e-mail
                e/ou o número de telefone/endereço de faturamento fornecido no
                momento em que o pedido foi feito. Reservamo-nos o direito de
                limitar ou proibir pedidos que, a nosso critério exclusivo,
                pareçam ter sido feitos por lojistas, revendedores ou
                distribuidores.
              </TextModal>
              <TextModal>
                Você concorda em fornecer suas informações de conta e compra
                completas para todas as compras feitas em nossa loja. Você
                concorda em atualizar prontamente sua conta e outras
                informações, incluindo seu e-mail, números de cartão de crédito
                e datas de validade, para que possamos completar suas transações
                e contatar você quando preciso.
              </TextModal>
              <TextModal>
                Para mais informações, por favor, veja nossa Política de
                devolução.
              </TextModal>
              <SubtitleModal>SEÇÃO 7 - FERRAMENTAS OPCIONAIS</SubtitleModal>
              <TextModal>
                Podemos fornecer a você acesso a ferramentas de terceiros sobre
                as quais não monitoramos nem temos controle ou entrada.
              </TextModal>
              <TextModal>
                Você reconhece e concorda que nós fornecemos acesso a tais
                ferramentas no estado em que se encontram e conforme a
                disponibilidade, sem quaisquer garantias, declarações ou
                condições de qualquer tipo e sem qualquer endosso. Não nos
                responsabilizamos de forma alguma pelo seu uso de ferramentas
                opcionais de terceiros.
              </TextModal>
              <TextModal>
                O uso de ferramentas opcionais oferecidas por meio do site é
                inteiramente por sua conta e risco, e você deve se familiarizar
                e aprovar os termos das ferramentas que são fornecidas por
                fornecedor(es) terceiro(s).
              </TextModal>
              <TextModal>
                Também podemos, futuramente, oferecer novos serviços e/ou
                recursos por meio do site (incluindo o lançamento de novas
                ferramentas e recursos). Tais recursos e/ou serviços novos
                também devem estar sujeitos a esses Termos de serviço.
              </TextModal>
              <SubtitleModal>SEÇÃO 8 - LINKS DE TERCEIROS</SubtitleModal>
              <TextModal>
                Determinados conteúdos, produtos e serviços disponíveis através
                do nosso Serviço podem incluir materiais de terceiros.
              </TextModal>
              <TextModal>
                Os links de terceiros nesse site podem direcionar você a sites
                de terceiros que não são Afiliados a nós. Não nos
                responsabilizamos por examinar ou avaliar o conteúdo ou sua
                precisão. Não garantimos e nem temos obrigação ou
                responsabilidade por quaisquer materiais ou sites de terceiros,
                ou por quaisquer outros materiais, produtos ou serviços de
                terceiros.
              </TextModal>
              <TextModal>
                Não somos responsáveis por quaisquer danos ou prejuízos
                relacionados com a compra ou uso de mercadorias, serviços,
                recursos, conteúdo, ou quaisquer outras transações feitas em
                conexão com quaisquer sites de terceiros. Por favor, leia com
                cuidado as políticas e práticas de terceiros e certifique-se de
                que você as entende antes de efetuar qualquer transação. As
                queixas, reclamações, preocupações ou questões relativas a
                produtos de terceiros devem ser direcionadas à respectiva
                empresa terceira.
              </TextModal>
              <SubtitleModal>
                SEÇÃO 9 - COMENTÁRIOS, FEEDBACK E OUTRAS INTERAÇÕES DO USUÁRIO
              </SubtitleModal>
              <TextModal>
                Se, a nosso pedido, você executar determinadas ações específicas
                (por exemplo, inscrições em concursos) ou, sem solicitação de
                nossa parte, enviar ideias criativas, sugestões, propostas,
                planos ou outros materiais, seja online, por e-mail, correio ou
                de outra forma (em conjunto designados "comentários"), você
                concorda que podemos, a qualquer momento, sem restrições,
                editar, copiar, publicar, distribuir, traduzir e usar, em
                qualquer meio, quaisquer comentários que você encaminhar para
                nós. Não nos responsabilizamos por: (1) manter quaisquer
                comentários em sigilo; (2) indenizar por quaisquer comentários;
                ou (3) responder quaisquer comentários.
              </TextModal>
              <TextModal>
                Podemos, mas não temos a obrigação, de monitorar, editar ou
                remover conteúdo que nós determinamos a nosso próprio critério
                ser contra a lei, ofensivo, ameaçador, calunioso, difamatório,
                pornográfico, obsceno ou censurável, ou que viole a propriedade
                intelectual de terceiros ou estes Termos de serviço. Você
                concorda que seus comentários não violarão qualquer direito de
                terceiros, incluindo direitos autorais, marcas registradas,
                privacidade, personalidade ou outro direito pessoal ou de
                propriedade. Você concorda que os seus comentários não conterão
                material difamatório, ilegal, abusivo ou obsceno. Eles também
                não conterão nenhum vírus de computador ou outro malware que
                possa afetar a operação do Serviço ou qualquer site relacionado.
                Você não poderá usar endereço de e-mail falso, fingir ser alguém
                diferente de si mesmo ou, de outra forma, enganar a nós ou
                terceiros quanto à origem de quaisquer comentários. Você é o
                único responsável por quaisquer comentários que faz e pela
                veracidade deles. Nós não assumimos qualquer responsabilidade ou
                obrigação por quaisquer comentários publicados por você ou por
                terceiros.
              </TextModal>
              <SubtitleModal>SEÇÃO 10 - INFORMAÇÕES PESSOAIS</SubtitleModal>
              <TextModal>
                Sua apresentação de informações pessoais por meio da loja é
                regida pela nossa Política de privacidade. Consulte a nossa
                Política de privacidade.
              </TextModal>
              <SubtitleModal>
                SEÇÃO 11 - ERROS, IMPRECISÕES E OMISSÕES
              </SubtitleModal>
              <TextModal>
                Por vezes, pode haver informações em nosso site ou no Serviço
                que contenham erros tipográficos, imprecisões ou omissões que
                possam estar relacionadas a descrições de produtos, preços,
                promoções, ofertas, cobranças de frete de produtos, tempos de
                trânsito e disponibilidade. Reservamo-nos o direito de corrigir
                quaisquer erros, imprecisões ou omissões, e de alterar ou
                atualizar informações ou cancelar pedidos caso qualquer
                informação no Serviço ou em qualquer site relacionado seja
                imprecisa, a qualquer momento e sem aviso prévio (até mesmo
                depois de você ter enviado o seu pedido).
              </TextModal>
              <TextModal>
                Não assumimos nenhuma obrigação de atualizar, alterar ou
                explicar informações no Serviço ou em qualquer site relacionado,
                incluindo, entre outras, as informações sobre preços, exceto
                conforme exigido por lei. Nenhuma atualização específica ou data
                de atualização no Serviço ou em qualquer site relacionado deve
                ser utilizada para indicar que todas as informações do Serviço
                ou em qualquer site relacionado tenham sido modificadas ou
                atualizadas.
              </TextModal>
              <SubtitleModal>SEÇÃO 12 - USOS PROIBIDOS</SubtitleModal>
              <TextModal>
                Além de outras proibições estabelecidas nos Termos de serviço,
                você está proibido de usar o site ou seu conteúdo para: (a)
                qualquer finalidade ilícita; (b) solicitar a outros que realizem
                ou participem de atos ilegais; (c) violar quaisquer
                regulamentos, regras, leis ou leis locais, internacionais,
                federais, municipais ou estaduais; (d) infringir ou violar
                nossos direitos de propriedade intelectual ou os direitos de
                propriedade intelectual de terceiros; (e) assediar, abusar,
                insultar, prejudicar, difamar, caluniar, desacreditar, intimidar
                ou discriminar com base no gênero, orientação sexual, religião,
                etnia, raça, idade, nacionalidade ou deficiência; (f) apresentar
                informações falsas ou enganosas; (g) enviar ou transmitir vírus
                ou qualquer outro tipo de código malicioso, que será ou poderá
                ser usado de qualquer forma que afete a funcionalidade ou
                operação do Serviço ou de qualquer site relacionado, outros
                sites ou a internet; (h) coletar ou rastrear as informações
                pessoais de terceiros; (i) prática de spam, phishing, pharm,
                pretext, spider, crawl ou scrape; (j) qualquer propósito obsceno
                ou imoral; ou para (k) interferir ou contornar os recursos de
                segurança do Serviço ou de qualquer site relacionado, outros
                sites ou a internet. Reservamo-nos o direito de rescindir o seu
                uso do Serviço ou de qualquer site relacionado por violar
                qualquer um dos usos proibidos.
              </TextModal>
              <SubtitleModal>
                SEÇÃO 13 - ISENÇÃO DE GARANTIAS; LIMITAÇÃO DE RESPONSABILIDADE
              </SubtitleModal>
              <TextModal>
                Nós não prometemos, representamos ou garantimos que seu uso de
                nosso serviço será ininterrupto, oportuno, seguro ou livre de
                erros.
                <br />
                Não garantimos que os resultados que possam ser obtidos pelo uso
                do serviço serão precisos ou confiáveis.
              </TextModal>
              <TextModal>
                Você concorda que, de tempos em tempos, podemos remover o
                serviço por períodos indefinidos de tempo ou cancelá-lo a
                qualquer momento, sem enviar aviso prévio para você. Você
                concorda que o seu uso ou incapacidade de usar o serviço é por
                sua conta e risco. O serviço e todos os produtos e serviços
                entregues através do serviço são (exceto conforme declarado por
                nós) fornecidos sem garantia e conforme a disponibilidade para
                seu uso, sem qualquer declaração, garantias ou condições de
                qualquer tipo, expressas ou implícitas, incluindo todas as
                garantias implícitas ou condições de comercialização,
                quantidade, adequação a uma finalidade específica, durabilidade,
                título e não violação. Em nenhum caso, a Criando Gênios, nossos
                diretore s, executivos, funcionários, Afiliados, agentes,
                contratados, estagiários, fornecedores, provedores de serviços
                ou licenciantes serão responsáveis por qualquer dano, perda,
                reivindicação ou qualquer dano direto, indireto, incidental,
                punitivo, especial ou consequencial de qualquer tipo, incluindo,
                entre outros, lucros perdidos, perda de receita, perda de
                economias, perda de dados, custos de substituição ou quaisquer
                danos semelhantes, seja com base em contrato, ato ilícito
                (incluindo negligência), responsabilidade estrita ou não,
                decorrentes do uso de qualquer um dos serviços ou quaisquer
                produtos adquiridos usando o serviço, ou para qualquer outra
                reivindicação relacionada de qualquer forma ao seu uso do
                serviço ou qualquer produto, incluindo, entre outros, quaisquer
                erros ou omissões em qualquer conteúdo, ou qualquer perda ou
                dano de qualquer tipo incorrido como resultado do uso do serviço
                ou de qualquer conteúdo (ou produto) publicado, transmitido ou
                de outra forma disponibilizado através do serviço, mesmo se
                avisado de sua possibilidade. Como alguns estados ou jurisdições
                não permitem a exclusão ou a limitação de responsabilidade por
                danos indiretos ou incidentais, em tais estados ou jurisdições,
                a nossa responsabilidade será limitada à extensão máxima
                permitida por lei.
              </TextModal>
              <SubtitleModal>SEÇÃO 14 - INDENIZAÇÃO</SubtitleModal>
              <TextModal>
                Você concorda em indenizar, defender e isentar Criando Gênios e
                nossa matriz, subsidiárias, afiliadas, parceiros, executivos,
                diretores, agentes, contratados, licenciantes, prestadores de
                serviços, subcontratados, fornecedores, estagiários e
                funcionários, de qualquer reivindicação ou demanda, incluindo
                honorários advocatícios razoáveis, feitos por terceiros, devido
                a ou decorrente de sua violação destes Termos de serviço ou dos
                documentos que incorporam por referência, ou sua violação de
                qualquer lei ou dos direitos de terceiros.
              </TextModal>
              <SubtitleModal>SEÇÃO 15 - INDEPENDÊNCIA</SubtitleModal>
              <TextModal>
                No caso de qualquer disposição destes Termos de serviço ser
                considerada ilegal, nula ou inexequível, tal disposição será, no
                entanto, executável na extensão máxima permitida pela lei
                aplicável, e a parte inexequível será considerada como cortada
                destes Termos de serviço, e tal determinação não afetará a
                validade e aplicabilidade de quaisquer outras disposições
                remanescentes.
              </TextModal>
              <SubtitleModal>SEÇÃO 16 - RESCISÃO</SubtitleModal>
              <TextModal>
                As obrigações e as responsabilidades das partes incorridas antes
                da data de rescisão sobreviverão à rescisão deste contrato para
                todos os fins.
              </TextModal>
              <TextModal>
                Estes Termos de serviço permanecem em vigor, a menos que sejam
                rescindidos por você ou por nós. Você pode rescindir estes
                Termos de serviço a qualquer momento, notificando-nos que já não
                deseja utilizar os nossos serviços, ou quando você deixar de
                usar o nosso site. Se em nosso critério exclusivo você não
                cumprir com qualquer termo ou disposição destes Termos de
                serviço, nós também podemos rescindir este contrato a qualquer
                momento sem aviso prévio e você ficará responsável por todas as
                quantias devidas até a data da rescisão; também podemos lhe
                negar acesso a nossos Serviços (ou qualquer parte deles).
              </TextModal>
              <SubtitleModal>SEÇÃO 17 - ACORDO INTEGRAL</SubtitleModal>
              <TextModal>
                A falha de nossa parte em exercer ou executar qualquer direito
                ou disposição destes Termos de Serviço não constituirá uma
                renúncia de tal direito ou disposição.
              </TextModal>
              <TextModal>
                Estes Termos de serviço e quaisquer políticas ou normas
                operacionais publicadas por nós neste site ou no que diz
                respeito ao serviço constituem a totalidade do acordo entre nós.
                Estes termos regem o seu uso do Serviço, substituindo quaisquer
                acordos anteriores ou contemporâneos, comunicações e propostas,
                sejam verbais ou escritos, entre você e nós (incluindo, entre
                outros, quaisquer versões anteriores dos Termos de serviço).
                <br />
                Quaisquer ambiguidades na interpretação destes Termos de serviço
                não devem ser interpretadas contra a parte que os redigiu.
              </TextModal>
              <SubtitleModal>SEÇÃO 18 - LEGISLAÇÃO APLICÁVEL</SubtitleModal>
              <TextModal>
                Estes Termos de serviço e quaisquer contratos separados nos
                quais fornecemos a você os Serviços serão regidos e
                interpretados de acordo com as leis de Fortaleza, CE, Brasil.
              </TextModal>
              <SubtitleModal>
                SEÇÃO 19 - MUDANÇAS NOS TERMOS DE SERVIÇO
              </SubtitleModal>
              <TextModal>
                Você pode revisar a versão mais atual dos Termos de serviço a
                qualquer momento nesta página.
              </TextModal>
              <TextModal>
                Reservamo-nos o direito, a nosso critério, de atualizar,
                modificar ou substituir qualquer parte destes Termos de serviço
                ao publicar atualizações e alterações no nosso site. É sua
                responsabilidade verificar periodicamente se há alterações em
                nosso site. Seu uso contínuo ou acesso ao nosso site ou ao
                Serviço após a publicação de quaisquer alterações a estes Termos
                de serviço constitui aceitação dessas alterações.
              </TextModal>
              <SubtitleModal>SEÇÃO 20 - INFORMAÇÕES DE CONTATO</SubtitleModal>
              <TextModal>
                Perguntas sobre os Termos de serviço devem ser enviadas para nós
                em contato@adquiraofertas.com.br
              </TextModal>
              <ButtonClose onClick={() => setOpenFifth(false)}>
                FECHAR
              </ButtonClose>
            </ModalWrapper>
          </Modal>
        </Section>

        <Section className="funcionamento">
          <Title>Horários de Funcionamento</Title>
          <Text>
            <HiOutlineClock size="20px" />
            Segunda a Sexta: 8h às 21h
          </Text>
          <Text>
            <HiOutlineClock size="20px" />
            Sábado: 9h às 18h
          </Text>
          <Text>
            <HiOutlineClock size="20px" />
            Domingo: 8h às 17h
          </Text>
          <Text>
            <FaPhoneAlt size="16px" />
            (47) 99643-3451
          </Text>
        </Section>

        <Section className="midiasSociais">
          <Title>Ou fale por e-mail</Title>
          <Text style={{ marginBottom: "15px" }}>
            <MdEmail size="18px" />
            contato@adquiraofertas.com.br
          </Text>
          {/* <br /> */}
          <Title>Redes Sociais</Title>
          <Midias>
            <BsWhatsapp size="18px" />
            <BsInstagram size="18px" />
            <BsFacebook size="18px" />
          </Midias>
        </Section>

        <SectionMobile>
          <DivMobile>
            <TitleSmall style={{ textAlign: "center" }}>
              Compra Segura
            </TitleSmall>
            <CompraSeguraImg
              src="https://e692dde2776249f6.cdn.gocache.net/app/themes/booster/assets/dist/img/certificados.png"
              alt=""
            />
            <br />
            <TitleSmall style={{ textAlign: "center", marginTop: "8px" }}>
              Formas de Pagamento
            </TitleSmall>
            <FormasPagamento>
              <CartoesImg
                src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/visa.png"
                alt=""
              />
              <CartoesImg
                src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/master.png"
                alt=""
              />
              <CartoesImg
                src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/hipercard.png"
                alt=""
              />
              <CartoesImg
                src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/amex.png"
                alt=""
              />
              <CartoesImg
                src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/diners.png"
                alt=""
              />
              <CartoesImg
                src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/elo.png"
                alt=""
              />
              <CartoesImg
                src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/pix2.png"
                alt=""
              />
            </FormasPagamento>
          </DivMobile>
        </SectionMobile>
      </Content>
      <Copyright>
        <FormasPagamentoDesktop style={{ marginBottom: "5px" }}>
          <CartoesImg
            src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/visa.png"
            alt=""
          />
          <CartoesImg
            src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/master.png"
            alt=""
          />
          <CartoesImg
            src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/hipercard.png"
            alt=""
          />
          <CartoesImg
            src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/amex.png"
            alt=""
          />
          <CartoesImg
            src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/diners.png"
            alt=""
          />
          <CartoesImg
            src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/elo.png"
            alt=""
          />
          <CartoesImg
            src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/pix2.png"
            alt=""
          />
        </FormasPagamentoDesktop>
        ©️ 2023 Copyright | Todos os direitos reservados a Adquira Ofertas
      </Copyright>
    </Container>
  )
}

export { Footer }
