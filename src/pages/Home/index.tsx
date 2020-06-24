import React from 'react';
import './styles.css';
import ResumeData from '../ResumeData';

const Home = () => {
    return (
      <>
        <section id="resume-data">
          <ResumeData />
        </section>
        <section id="whats">
          <h1>O que é COVID-19</h1>
          <p>
          A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que apresenta um quadro clínico que varia de infecções assintomáticas a quadros respiratórios graves. De acordo com a Organização Mundial de Saúde (OMS), a maioria dos pacientes com COVID-19 (cerca de 80%) podem ser assintomáticos e cerca de 20% dos casos podem requerer atendimento hospitalar por apresentarem dificuldade respiratória e desses casos aproximadamente 5% podem necessitar de suporte para o tratamento de insuficiência respiratória (suporte ventilatório).
          </p>
        </section>
        <section id="symptoms">
          <h1>Sintomas</h1>
          <p>
          Os sintomas da COVID-19 podem variar de um simples resfriado até uma pneumonia severa. Sendo os sintomas mais comuns:
          </p>
          <ul>
            <li>Tosse</li>
            <li>Febre</li>
            <li>Coriza</li>
            <li>Dor de garganta</li>
            <li>Dificuldade para respirar</li>
          </ul>
        </section>
        <section id="transmission">
          <h1>Transmissão</h1>
          <p>
          A transmissão acontece de uma pessoa doente para outra ou por contato próximo por meio de:
          </p>
          <ul>
            <li>Toque do aperto de mão</li>
            <li>Gotículas de saliva</li>
            <li>Espirro</li>
            <li>Tosse</li>
            <li>Catarro</li>
            <li>Objetos ou superfícies contaminadas, como celulares, mesas, maçanetas, brinquedos, teclados de computador etc.</li>
          </ul>
        </section>
        <section id="prevention">
          <h1>Prevenção</h1>
          <p>
          As recomendações de prevenção à COVID-19 são as seguintes:
          </p>
          <ul>
            <li>Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%.</li>
            <li>Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o braço, e não com as mãos.</li>
            <li>Evite tocar olhos, nariz e boca com as mãos não lavadas.</li>
            <li>Ao tocar, lave sempre as mãos como já indicado.</li>
            <li>Mantenha uma distância mínima de cerca de 2 metros de qualquer pessoa tossindo ou espirrando.</li>
            <li>Evite abraços, beijos e apertos de mãos. Adote um comportamento amigável sem contato físico, mas sempre com um sorriso no rosto.</li>
            <li>Higienize com frequência o celular e os brinquedos das crianças.</li>
            <li>Não compartilhe objetos de uso pessoal, como talheres, toalhas, pratos e copos.</li>
            <li>Mantenha os ambientes limpos e bem ventilados.</li>
            <li>Evite circulação desnecessária nas ruas, estádios, teatros, shoppings, shows, cinemas e igrejas. Se puder, fique em casa.</li>
            <li>Se estiver doente, evite contato físico com outras pessoas, principalmente idosos e doentes crônicos, e fique em casa até melhorar.</li>
            <li>Durma bem e tenha uma alimentação saudável.</li>
            <li>Utilize máscaras caseiras ou artesanais feitas de tecido em situações de saída de sua residência.</li>
          </ul>
        </section>
      </>
    )
}

export default Home;
