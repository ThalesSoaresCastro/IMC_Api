import React,{useState} from 'react';
import {
  Container,
  ViewFormulario,
  TitleView,
  TitleFont,
  ViewInfos,
  LabelInfo,
  InputInfo,
  ButtonConfirm,
  ViewResult,
  LabelButton,
  TextError,
  ViewButton,
  OptionsForm,
  TextIMC,
  TextDescription,
  ViewAnimation,
} from './styles';

import {
  api
} from './routes/api';


import Lottie from 'react-lottie';

import loading from './animations/loading-animation.json';
import result_ok from './animations/result_ok.json';
import result_error from './animations/result_error.json';

import {
  classificacao
} from './tools/ClassificacaoImc';

interface IMC{
  peso:number;
  altura:number;
}

function App() {
  const [altura, setAltura]:[number,any] = useState(0);
  const [peso, setPeso]:[number,any] = useState(0);
  const [ehidoso, SetEhIdoso]:[boolean, any]= useState(false);

  const [imc, SetIMC]:[number,any] = useState(0);
  const [description, SetDescription]:[string, any] = useState('');
  const [animation, SetAnimation]:[boolean, any] = useState(false); 

  const [modalaguardar, SetModalAguardar]:[boolean, any] = useState(false);
  const [modalpopup, SetModalPopup]:[boolean, any] = useState(false);
  const [errordata, SetErrorData] = useState(false);
  const [errorserver, SetErrorServer] = useState(false);


  const loadingOptions = {
    loop:true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const animationOK = {
    loop:false,
    autoplay: true,
    animationData: result_ok,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const animationError = {
    loop:false,
    autoplay: true,
    animationData: result_error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const booleanCheck = (value:string) =>{
    return ['true'].includes(value)? true: false;
  }

  const result_values = (response:number) =>{
    SetIMC(response);
    let classificacaoIMC = classificacao( ehidoso,imc);
    SetDescription(classificacaoIMC);
    SetModalAguardar(false);
    SetModalPopup(true);
    SetAnimation(true);
  }

  const setValues = () =>{
    SetErrorData(false);
    SetAnimation(false);
    SetIMC(0);
    SetDescription('');
    SetErrorServer(false);
    SetModalPopup(false);
  }

  const result_animation = () =>{
    return (description === 'Peso normal') || (description === 'Adequado ou eutrófico')?
        <Lottie 
          options={animationOK}
          height={'100%'}
          width={'42.85%'}
          style={{
            alignItems:"center", 
            justifyContent:"center"
          }}
      />:
      <Lottie 
        options={animationError}
        height={'100%'}
        width={'42.85%'}
        style={{ 
          alignItems:"center", 
          justifyContent:"center",
        }}
      />

  }

  return (
    <Container>
      <TitleView>
        <TitleFont>
          Cálculo do IMC
        </TitleFont>
      </TitleView>
      <ViewFormulario>
        {/*
          Verificar se o usuário tem idade
          maior ou igual a 65(idoso = true)
          ou menor que 65(idoso = false)

        */}
        <ViewInfos>
          <LabelInfo>
            Possui idade maior ou igual a 65 anos?
          </LabelInfo>
          <OptionsForm
            onChange={(event)=>{
              let value = booleanCheck(event.target.value);
              SetEhIdoso(value);
            }}
          >
            <option value='false'>Não</option>
            <option value='true'>Sim</option>
          </OptionsForm>

        </ViewInfos>

        {/*Altura*/}
        <ViewInfos>
          <LabelInfo>
            Informe a sua altura:
          </LabelInfo>
          <InputInfo
            placeholder="Digite a sua altura em metros"
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            onChange={(event)=>{
                        setAltura(event.target.value);
                      }}
          />
          <LabelInfo>
            metros
          </LabelInfo>
        </ViewInfos>
  
        {/*Peso*/}
        <ViewInfos>
          <LabelInfo>
            Informe o seu peso:
          </LabelInfo>
          <InputInfo 
            placeholder="Digite seu peso em kilo/grama"
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            onChange={(event)=>{
              setPeso(event.target.value);
            }}
          />
          <LabelInfo>
            kg
          </LabelInfo>
        </ViewInfos>


        <ViewResult>
          {
            errordata && 
            <TextError>
              {`Os valores de altura e peso devem ser apenas números e valores maiores que zero.`}
            </TextError>
          }

          {
            errorserver &&
            <TextError>
              {`Ocorreu um erro na requisição do servidor.\nTente novamente mais tarde.`}
            </TextError>
          }

          {
            modalaguardar &&  
            <Lottie 
              options={loadingOptions}
              height={'90%'}
              width={'80%'}
              style={{
                alignItems:"center", 
                justifyContent:"center"
              }}
            />
          }

          {
            modalpopup &&
            <>
              <ViewAnimation>
                {animation && result_animation()}
              </ViewAnimation>
              <TextIMC>
                IMC: {imc}
              </TextIMC>
              <TextDescription>
                {description}
              </TextDescription>
            </>

          }


        </ViewResult>

        {/*Button*/}
        <ViewButton>
          <ButtonConfirm
            onClick={async()=>{
              if(altura <= 0 || peso <= 0 ){
                setAltura(0);
                setPeso(0);
                SetModalAguardar(false);
                SetModalPopup(false);
                SetErrorData(true);
              }
              else{                
                setValues();
                const obj:IMC = {
                  peso:peso,
                  altura:altura
                }

                SetModalAguardar(true);
                const response = await api.post('/imc/', obj);
              
                if(response){
                  result_values(response.data.imc);
                }
                else{
                  SetErrorServer(true);
                }
              }

            }}
          >
            <LabelButton>
              Enviar
            </LabelButton>
          </ButtonConfirm>
        </ViewButton>

      </ViewFormulario>
    </Container>
    
    
  );
}

export default App;
