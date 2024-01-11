# Email Send

Enviando email com a biblioteca [emailjs](https://www.emailjs.com/).

## Tecnologias

- HTML
- CSS
- Javascript
- Emailjs

## Como utilizar

Para começar a usar EmailJS em seu site basta colar o seguinte trecho de código antes de fechar a tag, com a chave pública correta:

```javascript
<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init("YOUR_PUBLIC_KEY");
   })();
</script>
```

Você pode obter sua chave pública na [Conta](https://dashboard.emailjs.com/sign-in) página no painel EmailJS.

O método básico para enviar um email com EmailJS.

### Sintaxe

```javascript
emailjs.send(serviceID, templateID, templateParams);
```

### Resultado

O método retorna a promessa. Onde resposta é o objeto que contém statusas textpropriedades.

```javascript
var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
 
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
```