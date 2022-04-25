
## Indice

  

[TOC]

  

# Antecedentes Generales

  

## Propiedad / Ownership

  

Este artefacto es diseñado y mantenido por Arquitectura Tecnológica y el Centro de Excelencia de Arquitectura.

  

Para mas detalles, dirigirse a: **Wiki Arquitectura**


## Ramas del proyecto

  

La última versión del arquetipo se encuentra en la rama dev.

  


# BFF NodeJs para microservicios en Nest



Este repositorio contiene los artefactos necesarios para la disponibilización del arquetipo de microservicios que exponen API REST dentro del contexto NestJs.

  

Este acelerador del desarrollo está construido bajo los lineamientos de arquitectura tecnológica para el desarrollo de microservicios y operar en la nube.

  

## Prerequisitos

  

Como prerequisito de uso de este proyecto es necesario contar con Node js (v16.13.2). Una guía para la instalación de Node se puede encontrar en la documentación oficial de [Node Js - How to Install Node.js][node_install_url].

  

Instalar gestor de paquetes Yarn (v1.22.5) para administrar las dependencias del proyecto. Para ello ejecutar el comando `npm install -g yarn`.

  
  

## Instalación

  

Para la instalación debemos clonar el repositorio, ubicarse en la raiz del proyecto en la misma ruta que el archivo `package.json`.

  

Ejecutar el comando:

  

```bash
$ npm install
```

  

**Nota:** Este comando instala las dependencias contenidas dentro del `package.json`, las que guardara dentro de la carpeta `node_modules`.

### Levantar Servidor local - Swagger

## Uso de este bff

  

Este código fuente contiene el template para una aplicación que expone servicios REST utilizando el framework de [NestJS][nestjs_url]. Considerar este proyecto como una guía para el desarrollo de Microservicios y BFF.

  

El proyecto trabaja con[npm] como gestor de paquetes.

     
### Pruebas
Para este bff se tienen definido tres controladores donde cada uno de ellos cuenta con una url en especifico:
- **PostController:** Operaciones de composición entre objetos de distintas urls. **path:**`posts`
- **CircuitBreakerController:** Operaciones con ejemplos de prueba del patrón Circuit Breaker. **path:** `circuit`


Para ejecutar el código del bff y probar los endpoints se tienen 2 opciones:
- **Mediante la interfaz de swagger:** Por defecto esta configurada en el path `/api/` en este punto puedes utilizar cualquiera de los métodos disponibles. Para más detalle ver en el apartado de swagger más abajo.
	1. Inicializar el proyecto con `yarn start`.
	2. Ir a tu navegador e ingresar la url `http://localhost:8081/api`.
	
![image info](../images/swagger.png)

- Probar los endpoints definidos en los controladores mediante postman:
	 1. Inicializar el proyecto con `yarn start`.
	 2. Enviar solicitud mediante postman.
	
![image info](../images/postman.png)


### Componentes

  

1. Aplicación Nodejs construida con [NestJs][nestjs_url].

  

2. Dependencias y configuración para integración con modulo axios Http para conexiones con otros artefactos.

  

3. Test unitarios construidos con [Jest][jest_url] y [SuperTest][super_test_url] ambas dependencias vienen integradas dentro de NestJS.

  

4. Documentación de API y endpoints mediante [Swagger](swagger_url).

  

5. Logs construidos con [Winston Nest][winston_url].

  

### Propiedades Package.json

  

Algunas propiedades definidas para el bff en el archivo `package.json` relevantes de mencionar son:

  

**Importante:** Modificar esta name, versión, description, author según corresponda.

  

- Nombre, descripción, author y versión del proyecto, utilizando la especificación de [SemVer][semver_url].

  

```json
"name": "poc",
"version": "0.0.1",
"description": "",
"author": "",
...
```
  

- Los Scripts indica comandos que podemos correr dentro de nuestro proyecto, asociándolos a una palabra clave para que yarn los reconozca cuando queramos ejecutarlos.

  

```json
"scripts": {
	"prebuild": "rimraf dist",
	"build": "nest build",
	"format": "prettier --write \"src/**/*.ts\"  \"test/**/*.ts\"",
	"start": "nest start",
	"start:dev": "nest start --watch",
	"start:debug": "nest start --debug --watch",
	"start:prod": "node dist/main",
	"lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
	"test": "jest",
	"test:watch": "jest --watch",
	"test:cov": "jest --coverage",
	"test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
	"test:e2e": "jest --config ./test/jest-e2e.json"
}
```
  

- Por ejemplo :

  

```bash
$ yarn start
```

  

- Dependencies guarda los nombres y versiones de cada dependencia que se ha instalado dentro del proyecto. De esta forma, cada vez que alguien obtenga una copia de este proyecto, y corra el comando yarn install, se instalarán todas las dependencias aquí definidas.

  

```json
"dependencies": {
	"@hapi/joi": "^17.1.1",
	"@nestjs/common": "^8.2.5",
	"@nestjs/config": "^1.1.6",
	"@nestjs/core": "^8.2.5",
	"@nestjs/mapped-types": "^1.0.1",
	"@nestjs/platform-express": "^7.6.13",
	"@nestjs/swagger": "^5.1.5",
...

  

```

  

- DevDependencies cumple labor similar a dependencies con la diferencia que acá podemos incluir todas aquellas librerías que no son necesarias para que este proyecto corra en producción.

  
```json
"devDependencies": {
	"@nestjs/cli": "^8.2.0",
	"@nestjs/schematics": "^7.2.7",
	"@nestjs/testing": "^8.2.5",
	"@types/dotenv": "^8.2.0",
	"@types/express": "^4.17.11",
	"@types/jest": "^26.0.20",
	"@types/node": "^14.14.31",
	"@types/supertest": "^2.0.10",
...
```
  

### Propiedades de la Aplicación

  

Las propiedades de la aplicación se establecen en la carpeta `env`. Dentro del directorio se dejaron dos archivos `env/development.env` y `env/production.env`. Cabe destacar que la utilización de los archivos esta directamente relaciona con el entorno en el cuál se esta desplegando el microservicio, es decir, si se esta trabajando en desarrollo el documento utilizado será `env/development.env`. Dentro de las propiedades relevantes a mencionar son:

- Configura la descripción del API documentada.

  

```env
SWAGGER_NAME=Nombre de la API
SWAGGER_DESCRIPTION=Descripcion de la API
SWAGGER_VERSION=Version de la API
SWAGGER_CONTACT_NAME=Nombre del lider tecnico
SWAGGER_CONTACT_EMAIL=contacto@email.com
```

  

- Establece el nivel de registro de eventos para el logging.

  

```env
LOG_LEVEL=debug
```

  

- Establece las configuración para el módulo http encargado de conexiones externas.

```env
HTTP_TIMEOUT=5000
HTTP_MAX_REDIRECT=1
```

- Establece el puerto de exposición para el servidor.

  

```env
PORT=8081
```

  

- Endpoints que se utilizarán para los metodos de composición.

```env
REST_ENDPOINTS_JSONPLACEHOLDER=https://jsonplaceholder.typicode.com
REST_ENDPOINTS_UNIVERSITIES=http://universities.hipolabs.com
```

- Establece las configuraciones para el patron de circuit breaker.

```env
CIRCUIT_BREAKER_TIMEOUT=3000
CIRCUIT_BREAKER_RESETTIMEOUT=4000
CIRCUIT_BREAKER_MAX=5
```

  

- Describe el ambiente en el cuál esta siendo ejecutado el microservicio.

  

```env
NODE_ENV=production
```

  
  

### Estructura

  

Este proyecto utiliza la estructura de Controller-Service-Repository. Todas las clases que implementan estas capas de la aplicación se encuentran en las carpetas que definen su responsabilidad. La organización de carpetas será de esta forma:

  

```

+-- src

|---|---api

|---|---|--- controller

|---|---|--- dto

|---|---|--- exceptions

|---|---|--- middleware

|---|---|--- service

|---|---|--- utils

|--- config

```

  

- Todas las carpeta dentro de api y también la carpeta config, contienen un `index.js` el cuál cumple la función de importar sus respectivas clases.

  

Dentro de las carpetas descritas encontramos lo siguiente:

  

-  **controller:**
	-  **Controladores:** Los controladores son responsables de manejar las solicitudes entrantes y devolver las respuestas al cliente. Para ello generalmente recurren a los Servicios.
-  **dto:**
	-  **DTO:** Un DTO (Data Transfer Object) es un esquema que define cómo debemos recibir los datos para realizar una acción sobre la base de datos.
-  **exceptions:**
	-  **Filters:** Los filters son una capa de excepciones que es responsable de procesar todas las excepciones no controladas dentro de la aplicación.

-  **middleware:**
	-  **Middleware:** Los middleware a diferencia de Java son funciones que se llaman antes que el controlador. Las funciones de middleware tienen acceso a los objetos de solicitud y respuesta.
-  **services:**
	-  **Servicios:** Los servicios son responsables de hacer la lógica dentro del microservicios.

-  **utils:**

	- Contiene funciones o clases que son de utilidad dentro del microservicio por ejemplo: Funciones de mappeo, patrones, entre otros.

-  **config:**
	- Contiene los valores de las configuraciones obtenidas de las variables de entorno de los distintos módulos a utilizar.

  
  

#### Escenciales

  

Dentro del bff es importante mencionar aquellos archivos que son fundamentales para el funcionamiento de este. Estos son `src/main.ts` y `src/app.module.ts`

  

##### main.ts

  

En main.ts se encuentra una función asyncrona, que arrancará el microservicio. Dentro del archivo se realizan las siguientes acciones:

  

- Se Instancian las configuraciones del Logger y Open Api (Swagger),

  

- Se define la Instancia principal del proyecto el cual será el modulo `app.module.ts` mediante el comando `NestFactory.create`.

  

- Se define de manera global en todo el proyecto el filtro `HttpExceptionFilter` que se encarga del manejo de excepciones.

  

```ts

async  function  bootstrap() {
	const  config = dotenv.parse(fs.readFileSync(dotEnvOptions.path));
	const  logger: LoggerConfig = new  LoggerConfig();
	const  configSwagger = new  DocumentBuilder()
		.setTitle(config["SWAGGER_NAME"])
		.setDescription(config["SWAGGER_DESCRIPTION"])
		.setVersion(config["SWAGGER_VERSION"])
		.setContact(
			config["SWAGGER_CONTACT_NAME"],"",config["SWAGGER_CONTACT_EMAIL"])
		.build();
	const  app = await  NestFactory.create(AppModule, {
		logger:  WinstonModule.createLogger(logger.console()),
	});
	const  document = SwaggerModule.createDocument(app, configSwagger);
	SwaggerModule.setup("api", app, document);
	app.useGlobalFilters(new  HttpExceptionFilter());
	app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
	await  app.listen(config["PORT"]);
}
bootstrap();

```

  

##### app.module.ts

  

Es el modulo principal del bff, por lo tanto, es el punto de partida para crear el gráfico del microservicio. Dentro nos encontramos con los siguientes puntos:

  

- Se Inicializan configuraciones del Logger .

  

- Se configura módulo HttpModule.

  

- Se importan Modulos que serán utilizados dentro de este.

  

- Se Instancian los Controllers como también los Servicios utilizados en el módulo.

  

- Se definen middlewares que operarán en el módulo.

  

```ts

const  logger: LoggerConfig = new  LoggerConfig();


@Module({

	imports: [ConfigModule.forRoot(),
		WinstonModule.forRoot(logger.console())
		HttpModule.register(http.getOptions())
	],
	controllers: [PostController],
	providers: [PostService],
})

export  class  AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes(PostController);
	}
}

```
### Observables y Promesas
Javascript es un lenguaje de programación asíncrono, es decir, no se sienta a esperar que acaben las declaraciones antes de continuar con otra. Es por ello que para solucionar este inconveniente se crearon las Promesas y los Observables.
- **Promesas:** Una promesa es un objeto que representa un valor que puede que esté disponible ahora, después o quizas nunca lo esté.  A continuación un ejemplo de su uso en el bff en donde se transforma el observable obtenido desde el metodo `.get` a una promesa. Este se encuentra en `src/api/services/post.service.ts`.

```ts
import { map } from  'rxjs/operators';
import { forkJoin, lastValueFrom, Observable } from  'rxjs';


@Injectable()

export  class  PostService {
...

public  async  getPostById(id): Promise<PostDTO> {
	const  post = this.http.get<PostDTO>(`${this.env["REST_ENDPOINTS_JSONPLACEHOLDER"]}/posts/${id}`)
		.pipe(map(response  =>  response.data),)
	return  lastValueFrom(post);
}
```
- **Observables:** Los observables representan una colección de futuros valores o data, es decir, data que probablemente aún no estemos recibiendo pero que pueden escucharse más de una vez. A continuación un ejemplo en el arquetipo este se encuentra en `src/api/services/post.service.ts`.
```ts
import { map } from  'rxjs/operators';
import { forkJoin, lastValueFrom, Observable } from  'rxjs';


@Injectable()

export  class  PostService {
...

public  getUniversity(): Observable<UniversityDTO[]> {
	const  university = this.http.get<UniversityDTO[]>(`${this.env["REST_ENDPOINTS_UNIVERSITIES"]}/search?country=chile`)
	.pipe(map(response  =>  response.data),);
	return  university;
}

public  getPosts(): Observable<PostDTO[]> {
	const  posts = this.http
		.get<PostDTO[]>(`${this.env["REST_ENDPOINTS_JSONPLACEHOLDER"]}/posts`)
		.pipe(map(response  =>  response.data));
	return (posts)
}

public  getPostsWithUniversities(): Observable<MessageDTO> {
	const  universities = this.getUniversity();
	const  posts = this.getPosts();
	const  result = forkJoin({ universities, posts })
	return  result;
}
```

#### Diferencias entre ambos
A continuación algunas diferencias entre Promesas y Observables. Para más información ver las documentaciones correspondientes [Observables](https://rxjs.dev/guide/observable), [Promesas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- **Valores:** Las promesas solo pueden emitir, rechazar o resolver un solo valor. Por otro lado, los observables pueden emitir múltiples resultados. El suscriptor estará recibiendo resultados hasta que el observador se complete o se dé de baja. Por esto los Observables es una gran herramienta para escuchar flujos de datos.
- **Cancelaciones:** Las promesas una vez que comienzan no se pueden cancelar, teniendo solo dos opciones de resultados. la resolución o el rechazo. Por otro lado los observables son más pasivos, es decir, una vez que se realiza un subscribe pueden darse de baja en cualquier momento. Esto los hace útiles en momentos donde ya no estamos interesados en la respuesta.
-  **Ejecución:** Las promesas se ejecutan de inmediato a nivel del constructor es decir una vez comienza esta debe acabar, en cambio los observables solo se activan después que se haya realizado un subscribe, de lo contrario, estas permanecen inactivas.

**En conclusión** ¿Es necesario elegir entre una o la otra?, Por supuesto que no. Ambas pueden funcionar juntas sin problema . Se pueden crear Observables a partir de una promesa o traspasar Promesas a Observables.
Ambas son alternativas, depende del caso de uso y la preferencia personal.


### Swagger

Un microservicio bien diseñado puede hacer maravillas para la adopción y el consumo desde Apis, y un buen diseño se puede lograr mejor con el enfoque Design First. Por ello es de vital importancia disponer de documento que definan o describan los endpoints. Por ello se utiliza Open Api(Swagger) el cual posee integración con NestJs mediante un módulo dedicado. En la utilización de Swagger es necesario saber:

  

- Las configuraciones generales se especifican en el directorio `src/main.ts` obteniendose de las variables de entorno.

  

```ts
const  configSwagger = new  DocumentBuilder()
.setTitle(config["SWAGGER_NAME"])
.setDescription(config["SWAGGER_DESCRIPTION"])
.setVersion(config["SWAGGER_VERSION"])
.setContact(
config["SWAGGER_CONTACT_NAME"], "", config["SWAGGER_CONTACT_EMAIL"]
).build();
```

  
- Para generar una documentación precisa utilizar los decoradores de swagger en las clases que corresponda, para ello leer la documentación oficial de [NestJs Open Api][nest_swagger_url].

- Para visualizar el documento swagger de manera local, una vez levantado el microservicio ir al path `/api` en tu navegador. En caso de querer cambiar esta dirección configurar en el archivo `main.ts`.

```ts
if (config['NODE_ENV'] !== 'production') {
	const  document = SwaggerModule.createDocument(app, configSwagger);
	SwaggerModule.setup('api', app, document); // <------En este punto

```
  
  
### Manejo de errores

  

Para el manejo de errores se utilizo una capa de excepciones integrada dentro de Nest, que esta encargada de procesar todas las excepciones no controladas dentro del microservicio. Esta capa se puede encontrar en `src/api/exceptions/http-exception-filter.ts`. Dentro de esta se puede destacar:

  

- La utilización de `@Catch()` sin parametros indica que atrapa todas los tipos de excepciones no controladas.

  

- Permite estructurar el response ante una excepcion, por defecto posee la siguiente extructura:

  
```json
{
	"statusCode": 500,
	"timestamp": "2022-01-20T20:03:08.441Z",
	"path": "/example/v1/users/",
	"message": "Internal error"
}
```

  
- La utilización de `@Catch()` sin parametros indica que atrapa todas los tipos de excepciones no controladas.

```ts
@Catch()
export  class  HttpExceptionFilter  implements  ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		const  ctx = host.switchToHttp();
		const  response = ctx.getResponse<Response>();
		const  status = exception.getStatus ? exception.getStatus() : 500;
		const  message = exception.message;
		response.status(status).json({
			statusCode:  status,
			message,
		});
	}
}

```

  

### Logs

  

Para los logs se utilizo la libreria [Winston][winston_url] la cuál está diseñada para ser una biblioteca de registro simple y universal con soporte para múltiples transportes. Las configuraciones de la libreria están ubicadas en el directorio `src/api/factory/loggerConfig.ts`, de las cuales destacan:

  

- Se estructura la respuesta del log con el formato `${msg.timestamp} [${msg.level}] - ${msg.message}`. Ejempo:

  

```bash
2022-01-19T16:08:03.943Z [info] - Mapped {/posts, GET} route
2022-01-19T16:08:03.969Z [info] - Nest application successfully started
2022-01-19T16:09:43.022Z [debug] - Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/...
```

  

- Se selecciona el tipo de transporte de los logs.

  


```ts

export  class  LoggerConfig {

private  readonly  options: winston.LoggerOptions;

  
private  config = dotenv.parse(fs.readFileSync(dotEnvOptions.path));

  

constructor() {
	this.options = {
		exitOnError:  false,
		format:  format.combine(
			format.colorize(),
			format.timestamp(),
			format.printf((msg) => {
				return  `${msg.timestamp} [${msg.level}] - ${msg.message}`;
			})
		),
		transports: [new  transports.Console({ level:  this.config.LOG_LEVEL })], // alert > error > warning > notice > info > debug
};
}
public  console() {
	return  this.options;
	}
}
```

  

### Test

  

Para realizar test existen varias alternativas, de las cuales para este arquetipo se utilizarán Pruebas Unitarias y End to End.

  

**Tests unitarios:** Son código que ayuda a asegurar que las partes de las aplicaciones funcionan de la forma esperada. La unidad testada puede ser una función, una clase, un módulo. Deben ser independientes unos de otros.

  

Se creo un archivo de pruebas unitarias en el directorio `test/controller/user.controller.spec.ts`, en donde se ejecutan las pruebas unitarias del controlador. Para mayor detalle consultar en la documentación oficial de [NestJs] [nestjs_url_test] .

  

- Se ejecutan mediante el comando:

  

```bash
yarn test
```

  

- Aqui se muestra un test unitario al método create en el controller.

  
```ts
it("should create a user", () => {
	const  createUserDto = {
		name:  "testing",
		lastname:  "lasttesting",
		email:  "test@example.com",
	};

expect(userController.create(createUserDto)).toEqual({
	id:  expect.any(Number),
	...createUserDto,
	});
});

```

  

**Tests End to End (e2e):** Estas se enfocan más en módulos y clases individuales, las pruebas de extremo a extremo cubren la interacción de clases y módulos en un nivel más agregado, más cercano al tipo de interacción con usuarios.

 
Esta prueba se encuentra en el directorio `test/app.e2e-spec.ts`. Para mayor detalle consultar en la documentación oficial de [NestJs] [nestjs_url_test] .



- Se ejecutan mediante el comando:

  

```bash
$ yarn test:e2e
```

  

- Aqui se muestra un test e2e al método encargado del path `/example/v1/users/`.

  

```ts

it("/ (GET)", () => {

return  request(app.getHttpServer())

.get("/example/v1/users/")

  

.expect(200)

  

.expect("Content-Type", /json/)

  

.expect(mockUser);

});

```

  

### Conexiones externas y composiciones

  

Para el manejo de conexiones a otras apis o microservicios este arquetipo utiliza el paquete HttpService dispuesto por Axios ya que Nest envuelve Axios y lo expone a través del `HttpModule`.

La configuración de la conexión esta contenida dentro de las variables de entorno en el directorio `env` y son consumidas dentro del archivo `httpConfig.ts` ubicado en `src/config`. Para conocer más de estas configuraciones ver en [Axios][axios_url]. Para su utilización es importante destacar:

 
- Se importa el modulo Http en el directorio `app.module.ts` y se agrega en "imports".

 
```ts
import { HttpModule } from  '@nestjs/axios';
const  http: HttpConfig = new  HttpConfig();
@Module({
	imports: [
		ConfigModule.forRoot(),
		WinstonModule.forRoot(logger.console()),
		HttpModule.register(http.getOptions()),
	],
	controllers: [PostController],
	providers: [PostService],
})

```

- Se instancia en el constructor de la clase a utilizar, y se utilizan sus metodos (get, post, put, delete, ...). Para más detalle ver [aquí][https://docs.nestjs.com/techniques/http-module].

```ts
import { HttpService } from  '@nestjs/axios';
import { lastValueFrom } from  'rxjs';
import { dotEnvOptions } from  '../../config/dotenv-options';
import { map } from  'rxjs/operators';

@Injectable()

export  class  PostService {
	private  env = dotenv.parse(fs.readFileSync(dotEnvOptions.path));
	constructor(private  http: HttpService) { }
	
	public  async  getPosts(): Promise<PostDTO[]> {
		const  posts = this.http.get<PostDTO[]>(`${this.env["rest.endpoints.jsonplaceholder.url"]}/posts`)
		.pipe(map(response  =>  response.data),);
		return  lastValueFrom(posts)
	}
...
```

  
- Ejemplo de composición:

	- El método `getPostByIdWithComments` obtiene y mezcla dos peticiones en un mismo objeto y lo retorna.

  

```ts

public  async  getPostById(id): Promise<PostDTO> {
	const post = this.http.get<PostDTO>(`${this.env["rest.endpoints.jsonplaceholder.url"]}/posts/${id}`)
	.pipe(map(response => response.data),)
	return lastValueFrom(post);
}

public  getCommentsById(id): Promise<CommentDTO[]> {
	const comments = this.http.get<CommentDTO[](`${this.env["rest.endpoints.jsonplaceholder.url"]}/posts/${id}/comments`)
	.pipe(map(response => response.data),);
	return lastValueFrom(comments);
}


public  async  getPostByIdWithComments(id): Promise<PostDetailDTO> {
	const post = await  this.getPostById(id);
	const comments = await  this.getCommentsById(id);
	return ({ ...post, comments })
}

```

  

## Circuit Breaker

  

Para este arquetipo cuya función es conectarse con multiples apis o microservicios, es sumamente importante contar con una opción que le permita evitar que se intente de manera reiterada una operación que probablemente vaya a fallar. Para saber más de este patrón ver la documentación presente en la wiki de arquitectura [Circuit Breaker][circuit_breaker].

La implementación se hará mediante el paquete [Opossum][opossum_url] el cuál cuenta con varios años de antiguedad y es para NodeJs. Dentro de esta implementación es importante destacar:

  
- Instanciar `opossum` dentro de la clase en donde se utilizará.

  

```ts
private  CircuitBreaker = require('opossum');
```

  

- Crear una función que contenga la petición a ejecutar.
  
```ts

const  request = (): Promise<string> => {
	lastValueFrom(this.http.get<CommentDTO[]>(`${this.env["rest.endpoints.jsonplaceholder.url"]}/posts/${id}/comments`)
	.pipe(map((response) =>  response.data))
	);
};

```

- Instanciar Circuit breaker con la petición y las opciones correspondientes. Ver más detalle [aquí][opossum_url].

```ts

const  breaker = new  this.CircuitBreaker(request, {
	timeout:  3000, // If our function takes longer than 3 seconds, trigger a failure
	resetTimeout:  5000, // After 5 seconds, try again.
	max: 5 // maximum attempts
});

```
- Ejecutar Circuit Breaker mediante la función `fire()`

 
```ts
breaker.fire();
```

  

### Patrones presentes

En este arquetipo encontramos los siguientes patrones:

- [Microservicios](pattern_microservicios)

- [BFF](pattern_bff)

- [Circuit Breaker](pattern_circuit_breaker)

- [Retry](pattern_retry)

  

[pattern_microservicios]: https://gitlab.com/ccla/arquitectura-ccla-1/wiki-arquitectura/-/wikis/2.-%20Patrones/Patr%C3%B3n---Microservicios

[pattern_circuit_breaker]: https://gitlab.com/ccla/arquitectura-ccla-1/wiki-arquitectura/-/wikis/2.-%20Patrones/Patr%C3%B3n---Circuit-breaker

[pattern_bff]: https://gitlab.com/ccla/arquitectura-ccla-1/wiki-arquitectura/-/wikis/2.-%20Patrones/Patr%C3%B3n---BFF

[pattern_retry]: https://gitlab.com/ccla/arquitectura-ccla-1/wiki-arquitectura/-/wikis/2.-%20Patrones/Patr%C3%B3n---Retry

  

[opossum_url]: https://github.com/nodeshift/opossum

[circuit_breaker]: https://gitlab.com/ccla/arquitectura-ccla-1/wiki-arquitectura/-/wikis/2.-%20Patrones/Patr%C3%B3n---Circuit-breaker

[winston_url]: https://github.com/gremo/nest-winston

[swager_url]: https://docs.nestjs.com/openapi/introduction

[super_test_url]: https://www.npmjs.com/package/supertest

[jest_url]: https://jestjs.io/

[postgresql_url]: https://www.postgresql.org/

[npm_url]: https://www.npmjs.com/

[nestjs_url_test]: https://docs.nestjs.com/fundamentals/testing

[nestjs_url]: https://nestjs.com/

[nestcli_url]: https://docs.nestjs.com/cli/overview

[node_install_url]: https://nodejs.dev/learn/how-to-install-nodejs

[nest_swagger_url]: https://docs.nestjs.com/openapi/introduction

[axios_url]: https://github.com/axios/axios

[yarn_url]: https://yarnpkg.com/
