# YVH-API

Estimado Comandante Lando Calrissian,
Apreciamos la labor que ha realizado durante todos estos años en Varn y Kessel para la Nueva República. Es notablemente conocida su habilidad en la creación de droides y armamento. Es por ello que necesitamos su ayuda para terminar el nuevo droide de combate YVH al que aún le falta el módulo de selección de objetivos a atacar.
Los módulos del YVH disponen de un sofisticado sistema de comunicación entre ellos mediante peticiones a un API HTTP.
El objetivo de la misión es desarrollar un endpoint HTTP que acepte datos JSON y devuelva datos JSON.
El módulo de visión enviará una peticiónP OST a /radar con la información que recibe de su entorno, y el módulo que usted debe desarrollar deberá devolver cuales son las coordenadas del objetivo visible que debe de ser atacado.
Un ejemplo de cuerpo de envío sería:
**{"protocols":["avoid-mech"],"scan":[{"coordinates": {"x":0,"y":40},"enemies":{"type":"soldier","number":10}}]}**

> protocols : Protocolo o lista de protocolos que han de ser usados para determinar cual de los siguientes puntos debe de atacarse primero.

> scan : Lista de puntos extraidos del módulo de visión, que es un array de puntos con el número de objetivos de esa posición, y los siguientes subvalores:

    · coordinates : Coordenadas x e y del punto.
    · enemies : Tipo de enemigo type y número number . Los posibles valores de type serán: soldier y mech.
    
    · (optional) allies : Número de aliados que hay en dicha posición. Si no está presente este valor, significa que no hay aliados en la zona.

La respuesta debe de contener las coordenadas x e y del siguiente punto a destruir.

Un ejemplo de cuerpo de respuesta para el ejemplo anterior sería: **{"x":0,"y":40}**

De esa manera, nuestro droide de combate YVH sabría cual es el siguiente elemento que debe destruir.

Para determinar cual es el siguiente punto a destruir, deben de tenerse en cuenta cuales son los protocolos solicitados, y actuar según sus reglas.

**Protocolos disponibles:**
> **closest-enemies :** Se deberá priorizar el punto más cercano en el que haya enemigos.


> **furthest-enemies :** Se deberá priorizar el punto más lejano en el que haya enemigos.


> **assist-allies :** Deberan de priorizarse los puntos en los que exista algún aliado.


> **avoid-crossfire :** No debe de atacarse ningún punto en el que haya algún aliado.


> **prioritize-mech :** Debe de atacarse unm ech si se encuentra. En caso negativo, cualquier otro tipo de objetivo será válido.

> **avoid-mech :** No debe de atacarse ningún enemigo del tipo mech.

Es importante denotar que podrán proporcionarse varios protocolos en la petición. A modo de ejemplo, si recibiésemos los protocolos closest-enemies y assist-allies, deberíamos buscar el punto más cercano que tuviese aliados presentes.

En todo caso se proporcionarán protocolos compatibles entre sí. Puede asumirse que en ningún caso el módulo recibirá, por ejemplo, los protocolos closest-enemies y furthest-enemies en la misma petición.

Finalmente es importante tener en cuenta que los objetivos a una distancia superior a 100m se consideran demasiado alejados para ser atacados y por lo tanto deben ser ignorados.

Buena suerte, **may the Force be with you**.
