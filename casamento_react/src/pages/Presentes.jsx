import React, { useState } from 'react';
import dianoiva from '../assets/images/presentes/dianoiva.jpeg';
import pocaomagica from '../assets/images/presentes/pocaomagica.jpeg';
import receita from '../assets/images/presentes/receita.jpeg';
import controle from '../assets/images/presentes/controle.jpeg';
import livro from '../assets/images/presentes/livro.jpeg';
import videogame from '../assets/images/presentes/videogame.jpeg';
import viajar from '../assets/images/presentes/viajar.jpeg';
import pano from '../assets/images/presentes/pano.jpeg';
import tpm from '../assets/images/presentes/tpm.jpeg';
import lupa from '../assets/images/presentes/lupa.jpeg';
import conta from '../assets/images/presentes/conta.jpeg';
import buffet from '../assets/images/presentes/buffet.jpeg';
import bentinho from '../assets/images/presentes/bentinho.jpeg';
import qrCode175 from '../assets/images/presentes/175.png';
import qrCode298 from '../assets/images/presentes/298.png';
import qrCode119 from '../assets/images/presentes/119.png';
import qrCode225 from '../assets/images/presentes/225.png';
import qrCode138 from '../assets/images/presentes/138.png';
import qrCode58 from '../assets/images/presentes/58.png';
import qrCode1000 from '../assets/images/presentes/1000.png';
import qrCode328 from '../assets/images/presentes/328.png';
import qrCode158 from '../assets/images/presentes/158.png';
import qrCode800 from '../assets/images/presentes/800.png';
import qrCode758 from '../assets/images/presentes/758.png';
import qrCode393 from '../assets/images/presentes/393.png';
import qrCode560 from '../assets/images/presentes/560.png';

const presentes = [
  { id: 1, nome: 'Dia da Noiva', imagem: dianoiva, descricao: 'Dia da noiva ficar uma belezura R$ 800,00', qrCode: qrCode175, transferCode: '00020126360014br.gov.bcb.pix0114+55159973550425204000053039865802BR5925JUCELIA MENDES DOS SANTOS6008SOROCABA62580520SAN2024102402451334050300017br.gov.bcb.brcode01051.0.063048AE3' },
  { id: 2, nome: 'Poção Mágica', imagem: pocaomagica, descricao: 'Porção mágica para noivo R$ 138,00', qrCode: qrCode138, transferCode: '00020126360014br.gov.bcb.pix0114+55159973550425204000053039865406138.005802BR5925JUCELIA MENDES DOS SANTOS6008SOROCABA62580520SAN2024102402332540150300017br.gov.bcb.brcode01051.0.063048047' },
  { id: 3, nome: 'Livro de Receitas', imagem: receita, descricao: 'Livro de receitas para o noivo não engasgar a noiva R$ 58,00', qrCode: qrCode58, transferCode: '00020126360014br.gov.bcb.pix0114+5515997355042520400005303986540558.005802BR5925JUCELIA MENDES DOS SANTOS6008SOROCABA62580520SAN2024102402315429850300017br.gov.bcb.brcode01051.0.063041749' },
  { id: 4, nome: 'Controle Pause', imagem: controle, descricao: 'Controle com pause para noiva parar de cantar no karaokê R$ 119,00', qrCode: qrCode119, transferCode: '00020126360014br.gov.bcb.pix0114+55159973550425204000053039865406119.005802BR5925JUCELIA MENDES DOS SANTOS6008SOROCABA62580520SAN2024102402351448050300017br.gov.bcb.brcode01051.0.06304A764' },
  { id: 5, nome: 'Livro do Noivo', imagem: livro, descricao: 'Livro para o noivo aprender a sempre estar certo como a noiva. R$ 175,00', qrCode: qrCode175, transferCode: '00000020126580014BR.GOV.BCB.PIX0136133b05cd-e71b-4d80-b0fd-0b75e6c015f85204000053039865406320.005802BR5925Jucelia Mendes dos Santos6009SAO PAULO62140510cgliKZTT3F6304574420126360014br.gov.bcb.pix0114+55159973550425204000053039865406275.005802BR5925JUCELIA MENDES DOS SANTOS6008SOROCABA62580520SAN2024102402341542450300017br.gov.bcb.brcode01051.0.06304BCCA' },
  { id: 6, nome: 'Pause no Videogame', imagem: videogame, descricao: 'Botão de pause no videogame do noivo R$ 298,00', qrCode: qrCode298, transferCode: '00020126360014br.gov.bcb.pix0114+55159973550425204000053039865406298.005802BR5925JUCELIA MENDES DOS SANTOS6008SOROCABA62580520SAN2024102402360863950300017br.gov.bcb.brcode01051.0.06304578D' },
  { id: 7, nome: 'Lua de Mel', imagem: viajar, descricao: 'Lua de mel dos noivos R$ 1.000,00', qrCode: qrCode1000, transferCode: '00020126360014br.gov.bcb.pix0114+551599735504252040000530398654071000.005802BR5925JUCELIA MENDES DOS SANTOS6008SOROCABA62580520SAN2024102402311897550300017br.gov.bcb.brcode01051.0.063045956' },
  { id: 8, nome: 'Kit Pano de Prato', imagem: pano, descricao: 'Kit pano de prato para noivo que nunca sabe o lugar certo de utilizar. R$ 225,00', qrCode: qrCode225, transferCode: '00020126360014br.gov.bcb.pix0114+55159973550425204000053039865406225.005802BR5925JUCELIA MENDES DOS SANTOS6008SOROCABA62580520SAN2024102402341542450300017br.gov.bcb.brcode01051.0.06304BCCA' },
  { id: 9, nome: 'Kit Anti TPM', imagem: tpm, descricao: 'Kit anti TPM para noiva R$ 328,00', qrCode: qrCode328, transferCode: '00020126360014br.gov.bcb.pix0114+55159973550425204000053039865406328.005802BR5925JUCELIA MENDES DOS SANTOS6008SOROCABA62580520SAN2024102402304057650300017br.gov.bcb.brcode01051.0.063045EA8' },
  { id: 10, nome: 'Lupa para o Noivo', imagem: lupa, descricao: 'Lupa para noivo começar a achar as coisas que estão na frente dele R$ 158,00', qrCode: qrCode158, transferCode: '00020126360014br.gov.bcb.pix0114+55159973550425204000053039865406158.005802BR5925JUCELIA MENDES DOS SANTOS6008SOROCABA62580520SAN2024102402293763750300017br.gov.bcb.brcode01051.0.06304063B' },
  { id: 11, nome: 'Botão Anti TPM', imagem: tpm, descricao: 'Botão para o noivo acionar e parar a TPM R$ 800,00', qrCode: qrCode800, transferCode: '00020126360014br.gov.bcb.pix0114+55159973550425204000053039865406800.005802BR5925JUCELIA MENDES DOS SANTOS6008SOROCABA62580520SAN2024102402283585350300017br.gov.bcb.brcode01051.0.06304BFC1' },
  { id: 12, nome: 'Conta de Luz', imagem: conta, descricao: '6 meses de conta de luz R$ 758,00', qrCode: qrCode758, transferCode: '00020126580014BR.GOV.BCB.PIX0136133b05cd-e71b-4d80-b0fd-0b75e6c015f85204000053039865406768.005802BR5925Jucelia Mendes dos Santos6009SAO PAULO62140510DmgA7O8zqE63044F63' },
  { id: 13, nome: 'Mese de buffet', imagem: buffet, descricao: 'Prioridade na mesa do buffet R$ 393,00', qrCode: qrCode393, transferCode: '00020126580014BR.GOV.BCB.PIX0136133b05cd-e71b-4d80-b0fd-0b75e6c015f85204000053039865406500.005802BR5925Jucelia Mendes dos Santos6009SAO PAULO62140510YnOF4mflqB6304231' },
  { id: 14, nome: 'Ração do Bentinho', imagem: bentinho, descricao: '6 meses de ração para bentinho R$ 560,00', qrCode: qrCode560, transferCode: '00020126580014BR.GOV.BCB.PIX0136133b05cd-e71b-4d80-b0fd-0b75e6c015f85204000053039865406560.005802BR5925Jucelia Mendes dos Santos6009SAO PAULO62140510EZv1z8FUrw6304CCE1' },


];

const Presentes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedQrCode, setSelectedQrCode] = useState('');
  const [transferCode, setTransferCode] = useState('');

  const handlePresentear = (qrCode, code) => {
    setSelectedQrCode(qrCode);
    setTransferCode(code || "Código de transferência não disponível.");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedQrCode('');
    setTransferCode('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transferCode);
    alert('Código de transferência copiado para a área de transferência!');
  };

  return (
    <div className="presentes-container">
      <h1>Presentes</h1>
      <p>Se desejar nos presentear, escolha uma das opções abaixo:</p>

      <div className="presentes-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {presentes.map((presente) => (
          <div key={presente.id} className="presente-item" style={{ border: '1px solid #ddd', padding: '20px', width: '150px', textAlign: 'center' }}>
            <img src={presente.imagem} alt={presente.nome} style={{ width: '100%', height: 'auto' }} />
            <h3>{presente.nome}</h3>
            <p>{presente.descricao}</p>
            <button onClick={() => handlePresentear(presente.qrCode, presente.transferCode)}>Presentear</button>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={closeModal}>
          <div className="modal-content" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '5px', position: 'relative', maxWidth: '600px' }} onClick={(e) => e.stopPropagation()}>
            <img src={selectedQrCode} alt="QR Code" style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto' }} />
            <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '8px' }}>
              {transferCode}
            </p>
            <button onClick={copyToClipboard} style={{ display: 'block', margin: '0 auto', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
              Copiar Código
            </button>
            <button onClick={closeModal} style={{ display: 'block', margin: '20px auto 0', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentes;
