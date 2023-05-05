
//Este código é um exemplo de como usar a API de reconhecimento de voz (SpeechRecognition) do Google Chrome 
//para tirar uma selfie.


//cria uma instância do reconhecimento de fala usando o construtor SpeechRecognition.
var SpeechRecognition = window.webkitSpeechRecognition;
  
// Define uma variável para a caixa de texto onde o resultado do reconhecimento de fala será exibido.
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox"); 


// Inicia o reconhecimento de fala usando a função start().
function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 // um evento de reconhecimento de voz está sendo registrado e quando o reconhecimento é bem-sucedido, 
 //uma função específica será executada.
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="tire minha selfie")
      {
        console.log("tirando selfie --- ");
        speak();
      }
}


// Define uma função chamada "speak"

function speak(){

  // Dentro da função, uma variável chamada "synth" é definida e recebe o objeto 
  //"speechSynthesis" da janela (window) do navegador.  

    var synth = window.speechSynthesis;

    speak_data = "Tirando sua selfie em 5 segundos";

    // Cria uma nova instância do objeto "SpeechSynthesisUtterance" chamado "utterThis", 
    //passando a variável "speak_data" como parâmetro

    var utterThis = new SpeechSynthesisUtterance(speak_data);

 // Isso cria um objeto que contém as informações sobre a fala que será reproduzida.

    synth.speak(utterThis);
// Usa o objeto "synth" (que foi previamente definido no código) para reproduzir a fala especificada em "utterThis".

// Anexa a câmera à página usando o método "attach" do objeto "Webcam".

    Webcam.attach(camera);

setTimeout(function()

// Define uma função a ser executada após 5 segundos usando a função "setTimeout". 
// A função inclui duas chamadas de função: "take_selfie()" e "save()". 
    { 
        // Chama uma função para capturar uma selfie usando a câmera anexada à página
        take_selfie(); 
        // Salva a imagem capturada
        save();
        //  5000 milissegundos= 5 segundos 
    }, 5000);
}

// busca na página um elemento HTML que tenha o atributo "id" igual a "camera" 
 camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
function take_selfie()
{

    // Parâmetro para uma função anônima que atualiza o conteúdo do elemento HTML com "id" igual a "result".
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}